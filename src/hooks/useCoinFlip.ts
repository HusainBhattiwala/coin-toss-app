import { ImpactFeedbackStyle, impactAsync, NotificationFeedbackType, notificationAsync } from 'expo-haptics';
import { useCallback, useState } from 'react';
import type { ViewStyle } from 'react-native';
import { useAnimatedStyle, useSharedValue, withSequence, withTiming } from 'react-native-reanimated';
import { scheduleOnRN } from 'react-native-worklets';
import { ANIMATION_CONFIG } from '../constants/animation';
import type { CoinSide, FlipResult } from '../types/coin';

// Track recent results to avoid unrealistic streaks
const recentResults: boolean[] = [];

// Intelligent random that avoids long streaks (more realistic)
const getSmartRandomResult = (): boolean => {
  // Basic randomness
  const baseRandom = Math.random();

  // Check recent streak
  const recentCount = Math.min(recentResults.length, 3); // Look at last 3 flips
  if (recentCount >= 2) {
    const lastResult = recentResults[recentResults.length - 1];
    const allSame = recentResults.slice(-recentCount).every((r) => r === lastResult);

    if (allSame) {
      // After 2-3 same results, increase chance of opposite
      // Not guaranteed, but weighted (70% chance to break streak)
      const shouldBreakStreak = baseRandom < 0.7;
      const result = shouldBreakStreak ? !lastResult : lastResult;

      // Keep history limited to last 5 results
      recentResults.push(result);
      if (recentResults.length > 5) {
        recentResults.shift();
      }

      return result;
    }
  }

  // Normal 50/50 randomness
  const result = baseRandom < 0.5;
  recentResults.push(result);
  if (recentResults.length > 5) {
    recentResults.shift();
  }

  return result;
};

const calculateFlip = (): FlipResult => {
  // Use smart randomness that avoids unrealistic streaks
  const willBeHeads = getSmartRandomResult();

  // Vary rotations slightly for each flip (48-52 rotations)
  const rotationVariance = Math.floor(Math.random() * 5) - 2; // -2 to +2
  const fullRotations = 50 + rotationVariance;

  // Calculate total rotation to land cleanly on the target
  // For heads: land on 360n (0°)
  // For tails: land on 360n + 180 (180°)
  const targetAngle = willBeHeads ? 0 : 180;
  const finalRotation = fullRotations * 360 + targetAngle;

  return { finalRotation, result: willBeHeads ? 'heads' : 'tails' };
};

export const useCoinFlip = () => {
  const rotationX = useSharedValue(0);
  const scaleValue = useSharedValue(1);
  const [currentSide, setCurrentSide] = useState<CoinSide>('heads');
  const [isFlipping, setIsFlipping] = useState(false);

  const animatedStyle = useAnimatedStyle<ViewStyle>(() => {
    'worklet';
    return {
      transform: [
        { perspective: ANIMATION_CONFIG.perspective },
        { rotateX: `${rotationX.value}deg` },
        { scale: scaleValue.value },
      ],
    } as ViewStyle;
  });

  const onFlipComplete = useCallback((result: CoinSide) => {
    setCurrentSide(result);
    setIsFlipping(false);

    // Haptic feedback at end
    notificationAsync(NotificationFeedbackType.Success).catch(() => {
      // Silently fail
    });
  }, []);

  const flip = useCallback(async () => {
    // Calculate flip result
    const { finalRotation, result } = calculateFlip();
    setIsFlipping(true);

    // Haptic feedback at start of flip
    try {
      await impactAsync(ImpactFeedbackStyle.Medium);
    } catch {
      // Silently fail on unsupported devices
    }

    // Reset rotation to 0 before starting new flip
    rotationX.value = 0;
    scaleValue.value = 1;

    // Slight scale animation for depth perception
    scaleValue.value = withSequence(
      withTiming(1.1, { duration: 300 }),
      withTiming(1, { duration: ANIMATION_CONFIG.duration - 300 })
    );

    // Main X-axis rotation with consistent timing
    // Animation will land exactly on 0° (heads) or 180° (tails)
    rotationX.value = withTiming(
      finalRotation,
      {
        duration: ANIMATION_CONFIG.duration,
      },
      (finished) => {
        'worklet';
        if (finished) {
          scheduleOnRN(onFlipComplete, result);
        }
      }
    );
  }, [rotationX, scaleValue, onFlipComplete]);

  return { animatedStyle, flip, isFlipping, currentSide, rotationX };
};

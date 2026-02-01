import { useState, useCallback } from 'react';
import { useSharedValue, useAnimatedStyle, withTiming, withSequence } from 'react-native-reanimated';
import { scheduleOnRN } from 'react-native-worklets';
import { impactAsync, ImpactFeedbackStyle, notificationAsync, NotificationFeedbackType } from 'expo-haptics';
import { ANIMATION_CONFIG } from '../constants/animation';
import type { CoinSide, FlipResult } from '../types/coin';

// Track recent results to avoid unrealistic streaks
let recentResults: boolean[] = [];

// Intelligent random that avoids long streaks (more realistic)
const getSmartRandomResult = (): boolean => {
  // Basic randomness
  const baseRandom = Math.random();

  // Check recent streak
  const recentCount = Math.min(recentResults.length, 3); // Look at last 3 flips
  if (recentCount >= 2) {
    const lastResult = recentResults[recentResults.length - 1];
    const allSame = recentResults.slice(-recentCount).every(r => r === lastResult);

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

const calculateFlip = (currentRotation: number): FlipResult => {
  // Use smart randomness that avoids unrealistic streaks
  const willBeHeads = getSmartRandomResult();

  // Vary rotations slightly for each flip (48-52 rotations)
  const rotationVariance = Math.floor(Math.random() * 5) - 2; // -2 to +2
  const fullRotations = 50 + rotationVariance;

  // Calculate total rotation from current position
  // Add full rotations, then add final position (0 for heads, 180 for tails)
  const targetAngle = willBeHeads ? 0 : 180;
  const finalRotation = currentRotation + (fullRotations * 360) + targetAngle;

  return { finalRotation, result: willBeHeads ? 'heads' : 'tails' };
};

export const useCoinFlip = () => {
  const rotationX = useSharedValue(0);
  const scaleValue = useSharedValue(1);
  const [currentSide, setCurrentSide] = useState<CoinSide>('heads');
  const [isFlipping, setIsFlipping] = useState(false);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      transform: [
        { rotateX: `${rotationX.value}deg` },
        { scale: scaleValue.value },
      ] as any,
    };
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
    // Calculate flip from current rotation position
    const { finalRotation, result } = calculateFlip(rotationX.value);
    setIsFlipping(true);

    // Haptic feedback at start of flip
    try {
      await impactAsync(ImpactFeedbackStyle.Medium);
    } catch {
      // Silently fail on unsupported devices
    }

    scaleValue.value = 1;

    // Slight scale animation for depth perception
    scaleValue.value = withSequence(
      withTiming(1.1, { duration: 300 }),
      withTiming(1, { duration: ANIMATION_CONFIG.duration - 300 })
    );

    // Main X-axis rotation with consistent timing
    rotationX.value = withTiming(
      finalRotation,
      {
        duration: ANIMATION_CONFIG.duration,
      },
      (finished) => {
        'worklet';
        if (finished) {
          // Normalize to final position (0 for heads, 180 for tails)
          rotationX.value = result === 'heads' ? 0 : 180;
          scheduleOnRN(onFlipComplete, result);
        }
      }
    );
  }, [rotationX, scaleValue, onFlipComplete]);

  return { animatedStyle, flip, isFlipping, currentSide };
};

import { StyleSheet, Text, Pressable } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, TYPOGRAPHY } from '../constants/theme';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

interface FlipButtonProps {
  onPress: () => void;
  disabled: boolean;
}

export default function FlipButton({ onPress, disabled }: FlipButtonProps) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    scale.value = withSpring(0.92);
  };

  const handlePressOut = () => {
    scale.value = withSpring(1);
  };

  return (
    <AnimatedPressable
      style={[styles.buttonContainer, animatedStyle]}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={disabled}
      accessibilityLabel={disabled ? 'Coin is flipping' : 'Flip coin'}
      accessibilityRole="button"
    >
      <LinearGradient
        colors={[COLORS.button.gradientStart, COLORS.button.gradientEnd, COLORS.button.gradientStart]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[styles.button, disabled && styles.disabled]}
      >
        <Text style={styles.text}>{disabled ? 'FLIPPING...' : 'FLIP COIN'}</Text>
      </LinearGradient>
    </AnimatedPressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: '85%',
    maxWidth: 340,
    height: 65,
    borderRadius: 33,
    shadowColor: COLORS.button.shadow,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 12,
  },
  button: {
    width: '100%',
    height: '100%',
    borderRadius: 33,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    ...TYPOGRAPHY.button,
    color: COLORS.button.text,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
});

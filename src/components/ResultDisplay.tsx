import { useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { COLORS, TYPOGRAPHY } from '../constants/theme';
import type { CoinSide } from '../types/coin';

interface ResultDisplayProps {
  result: CoinSide;
  visible: boolean;
}

export default function ResultDisplay({ result, visible }: ResultDisplayProps) {
  const opacity = useSharedValue(1);

  useEffect(() => {
    opacity.value = withTiming(visible ? 1 : 0, { duration: 200 });
  }, [visible, opacity]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const displayText = result.charAt(0).toUpperCase() + result.slice(1);

  return (
    <Animated.View style={animatedStyle}>
      <Text style={styles.text} accessibilityLabel={`Result: ${displayText}`}>
        {displayText}
      </Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  text: {
    ...TYPOGRAPHY.result,
    color: COLORS.text.accent,
    textAlign: 'center',
  },
});

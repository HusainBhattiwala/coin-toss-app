import { Image } from 'expo-image';
import type { ImageStyle, ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native';
import type { SharedValue } from 'react-native-reanimated';
import Animated, { type AnimatedStyle, useAnimatedStyle } from 'react-native-reanimated';
import { COIN_SIZE } from '../constants/animation';

interface CoinProps {
  animatedStyle: AnimatedStyle<ViewStyle>;
  rotationX: SharedValue<number>;
}

export default function Coin({ animatedStyle, rotationX }: CoinProps) {
  // Calculate opacity for heads image based on rotation
  const headsStyle = useAnimatedStyle(() => {
    'worklet';
    // Normalize rotation to 0-360 range
    const normalizedRotation = ((rotationX.value % 360) + 360) % 360;
    // Heads visible from 315° to 45° (front facing)
    const isVisible = normalizedRotation < 90 || normalizedRotation > 270;
    return {
      opacity: isVisible ? 1 : 0,
    };
  });

  // Calculate opacity for tails image based on rotation
  const tailsStyle = useAnimatedStyle(() => {
    'worklet';
    // Normalize rotation to 0-360 range
    const normalizedRotation = ((rotationX.value % 360) + 360) % 360;
    // Tails visible from 90° to 270° (back facing)
    const isVisible = normalizedRotation >= 90 && normalizedRotation <= 270;
    return {
      opacity: isVisible ? 1 : 0,
    };
  });

  return (
    <Animated.View style={[styles.coinContainer, animatedStyle]}>
      <Animated.View style={[styles.imageContainer, headsStyle]}>
        <Image
          source={require('../../assets/heads.png')}
          style={styles.image}
          contentFit="cover"
          cachePolicy="memory-disk"
          priority="high"
        />
      </Animated.View>
      <Animated.View style={[styles.imageContainer, tailsStyle]}>
        <Image
          source={require('../../assets/tails.png')}
          style={[styles.image, styles.tailsImage]}
          contentFit="cover"
          cachePolicy="memory-disk"
          priority="high"
        />
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  coinContainer: {
    width: COIN_SIZE,
    height: COIN_SIZE,
    borderRadius: COIN_SIZE / 2,
    overflow: 'hidden',
    backgroundColor: '#1a1a2e',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 10,
  } as ViewStyle,
  imageContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  } as ViewStyle,
  image: {
    width: '100%',
    height: '100%',
  } as ImageStyle,
  tailsImage: {
    transform: [{ rotateZ: '180deg' }, { scaleX: -1 }],
  } as ImageStyle,
});

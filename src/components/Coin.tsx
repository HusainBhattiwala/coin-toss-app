import { StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import { Image } from 'expo-image';
import { COIN_SIZE } from '../constants/animation';
import type { CoinSide } from '../types/coin';

interface CoinProps {
  animatedStyle: any;
  currentSide: CoinSide;
}

export default function Coin({ animatedStyle, currentSide }: CoinProps) {
  return (
    <Animated.View style={[styles.coinContainer, animatedStyle]}>
      <Image
        source={currentSide === 'heads' ? require('../../assets/heads.png') : require('../../assets/tails.png')}
        style={[styles.image, currentSide === 'tails' && styles.tailsImage]}
        contentFit="cover"
        cachePolicy="memory-disk"
        priority="high"
      />
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
  },
  image: {
    width: '100%',
    height: '100%',
  },
  tailsImage: {
    transform: [{ rotateZ: '180deg' }, { scaleX: -1 }],
  },
});

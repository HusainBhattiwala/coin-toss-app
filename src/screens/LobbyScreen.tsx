import { StyleSheet, View, Text, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { COLORS, TYPOGRAPHY, SPACING } from '../constants/theme';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

interface LobbyScreenProps {
  onStart: () => void;
}

export default function LobbyScreen({ onStart }: LobbyScreenProps) {
  const buttonScale = useSharedValue(1);

  const buttonAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: buttonScale.value }],
  }));

  const handlePressIn = () => {
    buttonScale.value = withSpring(0.95);
  };

  const handlePressOut = () => {
    buttonScale.value = withSpring(1);
  };

  return (
    <LinearGradient colors={[COLORS.gradient.start, COLORS.gradient.middle, COLORS.gradient.end]} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar style="light" />

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>COIN TOSS</Text>
        </View>

        {/* Coin Icon */}
        <View style={styles.coinSection}>
          <View style={styles.coinDisplay}>
            <View style={styles.coinFace}>
              <Text style={styles.coinText}>₹</Text>
            </View>
          </View>
        </View>

        {/* Start Button */}
        <View style={styles.buttonSection}>
          <AnimatedPressable
            style={[styles.startButtonContainer, buttonAnimatedStyle]}
            onPress={onStart}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
          >
            <LinearGradient
              colors={[COLORS.button.gradientStart, COLORS.button.gradientEnd]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.startButton}
            >
              <Text style={styles.startButtonText}>START</Text>
            </LinearGradient>
          </AnimatedPressable>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: SPACING.md,
  },
  header: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: SPACING.xl,
  },
  title: {
    ...TYPOGRAPHY.heading,
    color: COLORS.text.primary,
    textShadowColor: 'rgba(255, 215, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 10,
  },
  coinSection: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  coinDisplay: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: COLORS.button.gradientStart,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 10,
  },
  coinFace: {
    width: '100%',
    height: '100%',
    borderRadius: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: COLORS.button.gradientEnd,
  },
  coinText: {
    fontSize: 70,
    fontWeight: '900',
    color: COLORS.background.primary,
  },
  buttonSection: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: SPACING.xl,
  },
  startButtonContainer: {
    width: '70%',
    maxWidth: 280,
    height: 60,
    borderRadius: 30,
    shadowColor: COLORS.button.shadow,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.6,
    shadowRadius: 15,
    elevation: 10,
  },
  startButton: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startButtonText: {
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 1.5,
    color: COLORS.button.text,
  },
});

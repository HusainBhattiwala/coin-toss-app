import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SPACING } from '../constants/theme';

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
    <LinearGradient
      colors={[COLORS.gradient.start, COLORS.gradient.middle, COLORS.gradient.end]}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <StatusBar style="light" />

        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/coin_toss_app.png')}
            style={styles.logo}
            contentFit="contain"
            cachePolicy="memory-disk"
            priority="high"
          />
        </View>

        {/* Start Button */}
        <View style={styles.buttonContainer}>
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
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.md,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: SPACING.xl,
  },
  logo: {
    width: '90%',
    height: '100%',
    maxWidth: 400,
    maxHeight: 400,
  },
  buttonContainer: {
    paddingBottom: SPACING.xl,
    alignItems: 'center',
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

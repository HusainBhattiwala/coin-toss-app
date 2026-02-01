import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Coin from '../components/Coin';
import FlipButton from '../components/FlipButton';
import ResultDisplay from '../components/ResultDisplay';
import { COLORS, SPACING, TYPOGRAPHY } from '../constants/theme';
import { useCoinFlip } from '../hooks/useCoinFlip';

interface GameScreenProps {
  onBack: () => void;
}

export default function GameScreen({ onBack }: GameScreenProps) {
  const { animatedStyle, flip, isFlipping, currentSide, rotationX } = useCoinFlip();

  return (
    <LinearGradient
      colors={[COLORS.gradient.start, COLORS.gradient.middle, COLORS.gradient.end]}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <StatusBar style="light" />

        {/* Back Button */}
        <Pressable style={styles.backButton} onPress={onBack}>
          <Text style={styles.backButtonText}>← Back</Text>
        </Pressable>

        <Text style={styles.title}>COIN TOSS</Text>

        <View style={styles.coinContainer}>
          <Coin animatedStyle={animatedStyle} rotationX={rotationX} />
        </View>

        <View style={styles.resultContainer}>
          <ResultDisplay result={currentSide} visible={!isFlipping} />
        </View>

        <View style={styles.buttonContainer}>
          <FlipButton onPress={flip} disabled={isFlipping} />
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
    alignItems: 'center',
    paddingHorizontal: SPACING.md,
    paddingTop: SPACING.lg,
    paddingBottom: SPACING.xl,
  },
  backButton: {
    position: 'absolute',
    top: SPACING.lg,
    left: SPACING.md,
    zIndex: 10,
    paddingVertical: SPACING.xs,
    paddingHorizontal: SPACING.sm,
  },
  backButtonText: {
    color: COLORS.text.accent,
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  title: {
    ...TYPOGRAPHY.heading,
    color: COLORS.text.primary,
    textShadowColor: 'rgba(255, 215, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 10,
    marginBottom: SPACING.md,
  },
  coinContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultContainer: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.lg,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
});

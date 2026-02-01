import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LobbyScreen from './src/screens/LobbyScreen';
import GameScreen from './src/screens/GameScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'lobby' | 'game'>('lobby');

  const handleStart = () => {
    setCurrentScreen('game');
  };

  const handleBack = () => {
    setCurrentScreen('lobby');
  };

  return (
    <SafeAreaProvider>
      {currentScreen === 'lobby' ? (
        <LobbyScreen onStart={handleStart} />
      ) : (
        <GameScreen onBack={handleBack} />
      )}
    </SafeAreaProvider>
  );
}

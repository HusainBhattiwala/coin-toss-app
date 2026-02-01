# 🪙 Coin Toss

A simple, elegant coin toss app built with React Native and Expo. Make quick decisions with smooth 3D animations and realistic physics.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Platform](https://img.shields.io/badge/platform-Android-green.svg)
![License](https://img.shields.io/badge/license-MIT-orange.svg)

## ✨ Features

- 🎯 **Simple & Elegant** - Clean, intuitive interface
- 🎬 **Smooth Animations** - 60 FPS 3D coin flip with Reanimated 4
- 🎲 **Truly Random** - Advanced randomization algorithm that avoids unrealistic streaks
- 📳 **Haptic Feedback** - Immersive vibration on flip start and end
- 🌙 **Beautiful Design** - Premium dark theme with golden accents
- ⚡ **Lightning Fast** - Results in 3 seconds
- 📱 **Offline First** - No internet required
- 🚫 **No Tracking** - Zero data collection, complete privacy

## 📱 Screenshots

<!-- Add your screenshots here -->
```
[Lobby Screen]  [Coin Flipping]  [Result]
```

## 🚀 Tech Stack

- **Framework:** Expo SDK 52+
- **Language:** TypeScript
- **Architecture:** React Native New Architecture (Fabric + TurboModules)
- **Animation:** Reanimated 4 + react-native-worklets
- **Images:** expo-image (optimized rendering)
- **Haptics:** expo-haptics
- **UI:** expo-linear-gradient, react-native-safe-area-context

## 🛠️ Installation

### Prerequisites

- Node.js 18+
- npm or yarn
- Expo CLI
- Android Studio (for Android development)

### Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd "coin toss app"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Run on Android**
   ```bash
   npm run android
   ```

## 📂 Project Structure

```
coin-toss-app/
├── assets/                 # Images and icons
│   ├── heads.png
│   ├── tails.png
│   ├── icon.png
│   └── adaptive-icon.png
├── src/
│   ├── components/        # Reusable components
│   │   ├── Coin.tsx
│   │   ├── FlipButton.tsx
│   │   └── ResultDisplay.tsx
│   ├── screens/           # App screens
│   │   ├── LobbyScreen.tsx
│   │   └── GameScreen.tsx
│   ├── hooks/             # Custom React hooks
│   │   └── useCoinFlip.ts
│   ├── constants/         # App constants
│   │   ├── theme.ts
│   │   └── animation.ts
│   └── types/             # TypeScript types
│       ├── coin.ts
│       └── reanimated.d.ts
├── App.tsx                # Main app component
├── app.json               # Expo configuration
├── package.json
└── README.md
```

## 🎮 How It Works

### Smart Randomization

The app uses an intelligent randomization algorithm that:
- Tracks the last 5 flip results
- Detects streaks (2-3 consecutive same results)
- Applies 70% probability to break streaks (while maintaining randomness)
- Provides more realistic, natural-feeling results

```typescript
// Example from useCoinFlip.ts
const getSmartRandomResult = (): boolean => {
  // Check for streaks and apply weighted randomness
  // Returns true for heads, false for tails
}
```

### Animation System

- **50 rotations** in 3 seconds for fast, exciting flips
- **X-axis rotation** for realistic vertical coin flip
- **Consistent timing** using `withTiming` animation
- **Rotation normalization** to ensure correct final position
- **UI thread execution** via Reanimated worklets for 60 FPS

## 🎨 Customization

### Change Flip Duration

Edit `src/constants/animation.ts`:
```typescript
export const ANIMATION_CONFIG = {
  duration: 3000,  // Change to desired milliseconds
  // ...
}
```

### Change Number of Rotations

Edit `src/hooks/useCoinFlip.ts`:
```typescript
const fullRotations = 50;  // Change rotation count
```

### Modify Theme Colors

Edit `src/constants/theme.ts`:
```typescript
export const COLORS = {
  gradient: {
    start: '#0a0e27',    // Background gradient start
    middle: '#1a1f3a',   // Background gradient middle
    end: '#0f1729',      // Background gradient end
  },
  button: {
    gradientStart: '#FFD700',  // Button gold color
    gradientEnd: '#FFA500',    // Button orange color
  }
}
```

## 📦 Building for Production

### Using EAS Build (Recommended)

1. **Install EAS CLI**
   ```bash
   npm install -g eas-cli
   ```

2. **Login to Expo**
   ```bash
   eas login
   ```

3. **Configure EAS**
   ```bash
   eas build:configure
   ```

4. **Build for Android**
   ```bash
   eas build --platform android --profile production
   ```

### Local Build

```bash
npx expo run:android --variant release
```

## 🔄 Versioning

This project follows [Semantic Versioning](https://semver.org/):

- **Major (x.0.0):** Breaking changes, complete redesigns
- **Minor (1.x.0):** New features, non-breaking changes
- **Patch (1.0.x):** Bug fixes, minor improvements

**Current Version:** 1.0.0

### Version History

- **1.0.0** (Current) - Initial release
  - Basic coin flip functionality
  - Lobby screen
  - Smart randomization
  - Haptic feedback
  - 3D animations

## 🗺️ Roadmap

### Version 1.1.0 - Statistics & History
- [ ] Flip history tracker
- [ ] Win/loss statistics
- [ ] Streak counter
- [ ] Results persistence

### Version 1.2.0 - Customization
- [ ] Multiple coin types (different currencies)
- [ ] Sound effects with toggle
- [ ] Light theme option
- [ ] Custom coin faces

### Version 2.0.0 - Advanced Features
- [ ] Best of 3/5/7 mode
- [ ] Multiplayer coin toss
- [ ] Dice roller
- [ ] Decision wheel
- [ ] Home screen widget

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Use TypeScript for type safety
- Write meaningful commit messages
- Test on both Android devices/emulators
- Update documentation for new features

## 🐛 Bug Reports

Found a bug? Please open an issue with:
- Device model and Android version
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@HusainBhattuwala](https://github.com/HusainBhattuwala)
- Email: husainbhattiwala5253@gmail.com

## 🙏 Acknowledgments

- Built with [Expo](https://expo.dev)
- Animations powered by [Reanimated 4](https://docs.swmansion.com/react-native-reanimated/)
- Icons from [Expo Image](https://docs.expo.dev/versions/latest/sdk/image/)

## 📱 Download

in progress

## 💡 Support

If you like this project, please give it a ⭐ on GitHub!

---

Made with ❤️

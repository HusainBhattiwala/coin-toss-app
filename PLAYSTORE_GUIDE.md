# Google Play Store Publishing Guide

## App Information

**App Name:** Coin Toss
**Package Name:** com.cointoss.app
**Current Version:** 1.0.0
**Version Code:** 1

## App Description

### Short Description (80 characters max)
Make quick decisions with a simple, elegant coin toss app.

### Full Description

**Coin Toss** - The simplest way to make decisions!

Can't decide? Let fate choose! Flip a virtual coin with smooth 3D animations and realistic physics.

✨ **Features:**
• Simple and elegant interface
• Smooth 3D coin flip animation
• Realistic physics simulation
• Haptic feedback for immersive experience
• Beautiful dark theme design
• Fast and responsive
• No ads, no tracking, no nonsense

Perfect for:
• Making quick decisions
• Settling debates
• Sports coin tosses
• Games and fun
• Breaking ties

**Why choose Coin Toss?**
- Lightning fast - instant results in 3 seconds
- Truly random - uses advanced randomization
- Beautiful animations - smooth 60 FPS performance
- Works offline - no internet required

Download now and let the coin decide!

---

## Store Listing Assets Needed

### Icon Requirements
- **512x512 PNG** - High-res icon for Play Store
- **1024x500 PNG** - Feature graphic
- Already have: adaptive-icon.png (foreground)

### Screenshots (Required: minimum 2)
1. **Lobby Screen** - Show the home screen with "START" button
2. **Coin Flip in Action** - Show the coin mid-flip
3. **Result Screen** - Show heads or tails result
4. **Optional: Different states** - Show both heads and tails results

Screenshot sizes:
- Phone: 1080x1920 or 1080x2340 (recommended)
- Tablet (optional): 2048x1536 or 2048x2732

### Video (Optional but recommended)
- 30 second video showing:
  1. Opening the app
  2. Tapping START
  3. Watching coin flip
  4. Seeing result
  5. Flipping again

---

## Version Management

### Current Version
- **Version Name:** 1.0.0
- **Version Code:** 1

### For Future Updates

When releasing updates:

1. **Update version in app.json:**
   ```json
   "version": "1.0.1",  // or 1.1.0 for features, 2.0.0 for major changes
   ```

2. **Update Android versionCode:**
   ```json
   "android": {
     "versionCode": 2  // Increment by 1 for each release
   }
   ```

3. **Version Naming Convention:**
   - **1.0.x** - Bug fixes and minor improvements
   - **1.x.0** - New features
   - **x.0.0** - Major changes or redesigns

---

## Building for Play Store

### Option 1: Using EAS Build (Recommended)

1. **Install EAS CLI:**
   ```bash
   npm install -g eas-cli
   ```

2. **Login to Expo:**
   ```bash
   eas login
   ```

3. **Configure EAS:**
   ```bash
   eas build:configure
   ```

4. **Build Production APK/AAB:**
   ```bash
   eas build --platform android --profile production
   ```

### Option 2: Local Build

1. **Install Expo CLI:**
   ```bash
   npx expo install
   ```

2. **Build locally:**
   ```bash
   npx expo run:android --variant release
   ```

---

## Play Store Submission Checklist

### Before Submitting

- [ ] App tested on multiple Android devices
- [ ] All features working correctly
- [ ] No crashes or bugs
- [ ] Haptic feedback works
- [ ] Animations smooth (60 FPS)
- [ ] App works offline
- [ ] Version numbers updated

### Store Listing

- [ ] App name: "Coin Toss"
- [ ] Short description (80 chars)
- [ ] Full description (4000 chars max)
- [ ] App icon (512x512)
- [ ] Feature graphic (1024x500)
- [ ] At least 2 screenshots
- [ ] Privacy policy URL (if collecting data - currently NOT needed)
- [ ] Content rating completed

### App Content

- [ ] Category: Tools or Entertainment
- [ ] Content rating: Everyone
- [ ] No ads: Yes
- [ ] In-app purchases: No
- [ ] Target audience: Everyone

---

## Content Rating Questionnaire Answers

**Violence:** No
**Sexual Content:** No
**Language:** No
**Controlled Substances:** No
**Gambling:** No
**User-Generated Content:** No
**User Interaction:** No
**Location Sharing:** No
**Personal Information:** No

**Result:** Rated for Everyone

---

## Privacy Policy

Since the app:
- Doesn't collect any user data
- Doesn't use analytics
- Doesn't require internet
- Doesn't have ads
- Doesn't store any information

**You don't need a privacy policy!** ✅

However, if you want to add one for transparency:

```
Privacy Policy for Coin Toss

This app does not collect, store, or share any personal information.
All coin flips are processed locally on your device.
No data is transmitted to any servers.
No analytics or tracking is performed.

Last updated: [Current Date]
```

---

## Regular Update Strategy

### Update Schedule
- **Bug fixes:** As needed (1-2 weeks)
- **Feature updates:** Monthly or quarterly
- **Major updates:** Every 6-12 months

### Planned Features for Future Versions

**Version 1.1.0 (Feature Update):**
- Flip history/statistics
- Multiple coin types (different currencies)
- Sound effects toggle
- Light theme option

**Version 1.2.0:**
- Best of 3 mode
- Custom coin faces (upload images)
- Shake to flip feature

**Version 2.0.0 (Major Update):**
- Multiplayer mode
- Dice roller feature
- Decision maker wheel
- Widgets for home screen

### Update Process

1. Develop new features
2. Test thoroughly
3. Update version numbers
4. Build new APK/AAB
5. Write release notes
6. Submit to Play Store
7. Monitor reviews and crash reports

---

## Marketing & ASO (App Store Optimization)

### Keywords to Target
- coin toss
- coin flip
- decision maker
- heads or tails
- flip a coin
- random decision
- toss coin
- virtual coin
- decision app

### Categories
- **Primary:** Tools
- **Secondary:** Entertainment

### Tags
- Utility
- Productivity
- Decision Making
- Games

---

## Post-Launch Checklist

- [ ] Monitor crash reports daily
- [ ] Respond to user reviews (within 24-48 hours)
- [ ] Track download numbers
- [ ] Collect user feedback
- [ ] Plan next update based on feedback
- [ ] Share app link on social media
- [ ] Ask friends/family to review

---

## Support & Contact

Set up support channels:
- Email: [your-email]@gmail.com
- GitHub Issues: [repo-url] (if open source)
- In-app feedback option (future feature)

---

## Useful Commands

```bash
# Check app version
cat app.json | grep version

# Build for production
eas build --platform android --profile production

# Test production build locally
npx expo run:android --variant release

# Clear Metro cache
npx expo start -c

# Update dependencies
npm update
```

---

## Success Metrics to Track

- Downloads per day/week/month
- User retention (how many come back)
- Average rating
- Review sentiment
- Crash-free rate (aim for >99%)
- Daily active users

---

## Remember

- Keep the app simple and focused
- Respond to user feedback
- Fix bugs quickly
- Add features users actually want
- Maintain high quality
- Regular updates keep users engaged

Good luck with your Play Store launch! 🚀

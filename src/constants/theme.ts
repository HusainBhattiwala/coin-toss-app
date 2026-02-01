export const COLORS = {
  background: {
    primary: '#0a0e27',
    secondary: '#1a1f3a',
  },
  gradient: {
    start: '#0a0e27',
    middle: '#1a1f3a',
    end: '#0f1729',
  },
  text: {
    primary: '#ffffff',
    secondary: '#b8bcc8',
    accent: '#FFD700',
  },
  button: {
    gradientStart: '#FFD700',
    gradientEnd: '#FFA500',
    text: '#0a0e27',
    shadow: 'rgba(255, 215, 0, 0.5)',
  },
  coin: {
    borderStart: '#FFD700',
    borderMid: '#FFA500',
    borderEnd: '#FFD700',
  },
} as const;

export const TYPOGRAPHY = {
  heading: {
    fontSize: 36,
    fontWeight: '800' as const,
    letterSpacing: 2,
  },
  button: {
    fontSize: 19,
    fontWeight: '700' as const,
    letterSpacing: 1.2,
  },
  result: {
    fontSize: 28,
    fontWeight: '600' as const,
    letterSpacing: 0.5,
  },
} as const;

export const SPACING = {
  xs: 8,
  sm: 16,
  md: 24,
  lg: 32,
  xl: 48,
} as const;

// SnoozeWar Design Tokens
// Dark mode first. Premium feel. Amber accent.

export const colors = {
  bg: '#0A0A0F',
  bgCard: '#141420',
  bgElevated: '#1C1C2E',
  bgOverlay: 'rgba(10, 10, 15, 0.85)',

  accent: '#E09145',
  accentLight: '#F0A85C',
  accentDim: 'rgba(224, 145, 69, 0.15)',
  accentGlow: 'rgba(224, 145, 69, 0.3)',

  textPrimary: '#FFFFFF',
  textSecondary: '#8E8EA0',
  textTertiary: '#4E4E5C',
  textAccent: '#E09145',

  success: '#34D399',
  warning: '#FBBF24',
  danger: '#EF4444',

  border: 'rgba(255, 255, 255, 0.08)',
  borderLight: 'rgba(255, 255, 255, 0.15)',
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
} as const;

export const radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 999,
} as const;

export const fonts = {
  display: 'SpaceGrotesk_700Bold',
  heading: 'SpaceGrotesk_600SemiBold',
  body: 'Inter_400Regular',
  bodyMedium: 'Inter_500Medium',
  bodySemiBold: 'Inter_600SemiBold',
} as const;

export const fontSize = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 22,
  xxl: 28,
  display: 48,
  hero: 64,
} as const;

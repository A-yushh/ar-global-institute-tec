// Central Color System for A. R. Global Institute
// ALL colors live in this file only. No hardcoded hex values anywhere else.

export const colors = {
  // Brand Primary (#aa3bff) and Tonal Variations
  primary: '#aa3bff',
  primaryLight: '#be5efc',
  primaryLighter: '#dca4ff',
  primaryPale: '#f7edff',
  primaryDark: '#8a23d4',
  primaryDarker: '#6c15a8',
  primaryGlow: 'rgba(170, 59, 255, 0.22)',
  primaryGlowStrong: 'rgba(170, 59, 255, 0.38)',
  primaryBorder: 'rgba(170, 59, 255, 0.35)',

  // Backgrounds - Alternated between sections for clean visual separation
  bgWhite: '#ffffff',
  bgLight: '#f8f9fc',
  bgAlt: '#f3f4f8',
  bgSubtle: '#eceff5',
  bgCard: '#ffffff',
  bgCardHover: '#fafaff',
  bgDark: '#0f172a',
  bgDarkAlt: '#1e293b',

  // Text Colors
  textPrimary: '#1f2937',
  textSecondary: '#4b5563',
  textMuted: '#6b7280',
  textLight: '#9ca3af',
  textWhite: '#ffffff',
  textOnPrimary: '#ffffff',
  textAccent: '#aa3bff',

  // Borders & Dividers
  borderLight: '#e5e7eb',
  borderMedium: '#d1d5db',
  borderDark: '#9ca3af',
  borderHighlight: '#aa3bff',

  // Status & Feedback Colors
  success: '#10b981',
  successLight: '#34d399',
  successBg: '#ecfdf5',
  successBorder: '#a7f3d0',
  successDark: '#065f46',

  error: '#ef4444',
  errorLight: '#f87171',
  errorBg: '#fef2f2',
  errorBorder: '#fecaca',
  errorDark: '#991b1b',

  warning: '#f59e0b',
  warningLight: '#fbbf24',
  warningBg: '#fffbeb',
  warningBorder: '#fde68a',
  warningDark: '#92400e',

  info: '#3b82f6',
  infoLight: '#60a5fa',
  infoBg: '#eff6ff',
  infoBorder: '#bfdbfe',
  infoDark: '#1e40af',

  // Interactive & Accents
  accentOrange: '#ff7a00',
  accentOrangeBg: '#fff5eb',
  accentGreen: '#059669',
  accentGreenBg: '#ecfdf5',
  accentBlue: '#2563eb',
  accentBlueBg: '#eff6ff',
  accentPink: '#ec4899',
  accentPinkBg: '#fdf2f8',

  // Shadows & Overlays
  overlay: 'rgba(15, 23, 42, 0.65)',
  overlayLight: 'rgba(255, 255, 255, 0.85)',
  shadowSm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  shadowMd: '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04)',
  shadowLg: '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
  shadowCard: '0 4px 20px -2px rgba(0, 0, 0, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
  shadowCardHover: '0 14px 30px -4px rgba(170, 59, 255, 0.18), 0 6px 12px -2px rgba(0, 0, 0, 0.05)',
  shadowPrimaryBtn: '0 4px 14px 0 rgba(170, 59, 255, 0.38)',
  shadowPrimaryBtnHover: '0 6px 20px 0 rgba(170, 59, 255, 0.52)',
} as const;

export type ThemeColors = typeof colors;

export default colors;

import { colors } from './colors';

export const lightTheme = {
  background: '#FFFFFF',
  text: colors.black900,
  cardBackground: '#F9FAFB',
  accent: colors.purple500,
  border: '#E5E7EB',
  secondaryText: colors.grey500,
  subtleText: colors.grey700,
  activeTab: colors.blue500,
  success: colors.green500,
  failure: colors.red500,
};

export const darkTheme = {
  background: colors.black900,
  text: colors.white100,
  cardBackground: colors.black800,
  accent: colors.purple500,
  border: colors.border,
  secondaryText: colors.grey300,
  subtleText: colors.grey700,
  activeTab: colors.blue500,
  success: colors.green500,
  failure: colors.red500,
};

export type AppTheme = typeof lightTheme;

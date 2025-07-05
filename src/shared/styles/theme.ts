import { colors } from './colors';

export const lightTheme = {
  background: colors.white100,
  text: colors.grey900,
  cardBackground: colors.grey200,
  accent: colors.purple500,
};

export const darkTheme = {
  background: colors.black900,
  text: colors.white100,
  cardBackground: colors.grey800,
  accent: colors.purple500,
};

export type AppTheme = typeof lightTheme;

import { TextStyle } from "react-native";

export type TypographyProps = {
  text: string | undefined;
  size?: number;
  maxChar?: number;
  noLimit?: boolean;
  isRequired?: boolean;
  withoutDots?: boolean;
  numberOfLines?: number;
  color?: string;
} & TextStyle;

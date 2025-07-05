import React from 'react';
import { TypographyProps } from './Types';
import { colors } from '@/shared/styles/colors';
import { perfectFont } from '@/utils';
import { Text } from 'react-native';

const Typography: React.FC<TypographyProps> = ({
  text,
  color = colors.white100,
  size = 16,
  fontFamily,
  noLimit,
  maxChar = 50,
  withoutDots = false,
  numberOfLines,
  ...props
}: TypographyProps) => {
  return (
    <Text
      style={{
        fontSize: perfectFont(size),
        fontFamily,
        color,
        ...props,
      }}
      numberOfLines={numberOfLines}
      allowFontScaling={false}
    >
      {noLimit
        ? text
        : text !== undefined &&
          (text?.length >= maxChar
            ? withoutDots
              ? text?.slice(0, maxChar)
              : text?.slice(0, maxChar) + '...'
            : text)}
    </Text>
  );
};

export default Typography;

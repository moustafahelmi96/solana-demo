import { colors } from '@/shared/styles/colors';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Path, Svg } from 'react-native-svg';

export function BackIcon({
  color = colors.white100,
  size = '35',
  onPress,
}: {
  color?: string;
  size?: string;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
          d="M15 3.33C14.81 3.33 14.62 3.4 14.47 3.55L7.95 10.07C6.89 11.13 6.89 12.87 7.95 13.93L14.47 20.45C14.76 20.74 15.24 20.74 15.53 20.45C15.82 20.16 15.82 19.68 15.53 19.39L9.01 12.87C8.53 12.39 8.53 11.61 9.01 11.13L15.53 4.61C15.82 4.32 15.82 3.84 15.53 3.55C15.38 3.41 15.19 3.33 15 3.33Z"
          fill={color}
        />
      </Svg>
    </TouchableOpacity>
  );
}

export default BackIcon;
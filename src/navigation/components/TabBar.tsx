import { useAppTheme } from '@/shared/styles/themeProvider';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SingleTabBar = ({
  focused,
  title,
  icon,
}: {
  focused: boolean;
  title: string;
  icon?: React.ReactNode;
}) => {
  const { theme } = useAppTheme();
  const styles = StyleSheet.create({
    container: {
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'red',
    },
    text: {
      color: focused ? theme.text : theme.cardBackground,
      fontSize: 12,
      fontWeight: '500',
    },
  });

  return (
    <View style={styles.container}>
      {icon && icon}
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default SingleTabBar;

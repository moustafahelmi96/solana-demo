import { useAppTheme } from '@/shared/styles/themeProvider';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const Home = () => {
  const { theme } = useAppTheme();
  console.log("🚀 ~ Home ~ theme:", theme)
  const styles = StyleSheet.create({
    mainContainer: {
      width: '100%',
      height: '100%',
      backgroundColor: theme.background,
    },
  });

  return (
    <View style={styles.mainContainer}>
      <></>
    </View>
  );
};

export default Home;

import React from 'react';
import { HOME_SCREEN } from './Routes';
import { useAppTheme } from '@/shared/styles/themeProvider';
import Home from '@/modules/home/screens/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  const { theme } = useAppTheme();
  return (
    <Stack.Navigator
      initialRouteName={HOME_SCREEN}
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: theme.background,
        },
      }}
    >
      <Stack.Screen name={HOME_SCREEN} component={Home} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;

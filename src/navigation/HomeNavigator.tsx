import React from 'react';
import { ALL_TOKENS_SCREEN, HOME_SCREEN } from './Routes';
import { useAppTheme } from '@/shared/styles/themeProvider';
import Home from '@/modules/home/screens/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllTokens from '@/modules/home/screens/AllTokens';

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
      <Stack.Screen name={ALL_TOKENS_SCREEN} component={AllTokens} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;

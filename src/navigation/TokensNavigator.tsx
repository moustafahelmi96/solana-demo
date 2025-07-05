import React from 'react';
import { TOKENS_SCREEN } from './Routes';
import { useAppTheme } from '@/shared/styles/themeProvider';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tokens from '@/modules/tokens/screens/Tokens';

const Stack = createNativeStackNavigator();

const TokensNavigator = () => {
  const { theme } = useAppTheme();
  return (
    <Stack.Navigator
      initialRouteName={TOKENS_SCREEN}
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: theme.background,
        },
      }}
    >
      <Stack.Screen name={TOKENS_SCREEN} component={Tokens} />
    </Stack.Navigator>
  );
};

export default TokensNavigator;

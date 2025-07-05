import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BOTTOM_NAVIGATOR } from '@navigation/Routes';
import BottomNavigator from './BottomNavigator';

const MainNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name={BOTTOM_NAVIGATOR}
          component={BottomNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HOME_NAVIGATOR } from '@navigation/Routes';
import HomeNavigator from '@navigation/HomeNavigator';
import SingleTabBar from './components/TabBar';

function TabBarIcon({
  focused,
  title,
  icon,
}: {
  focused: boolean;
  title: string;
  icon?: React.ReactNode;
}) {
  return <SingleTabBar focused={focused} title={title} icon={icon} />;
}

const BottomNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'green',
        },
      }}
    >
      <Tab.Screen
        name={HOME_NAVIGATOR}
        component={HomeNavigator}
        options={() => {
          return {
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) =>
              TabBarIcon({
                focused,
                title: 'Home',
              }),
          };
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HOME_NAVIGATOR } from '@navigation/Routes';
import HomeNavigator from '@navigation/HomeNavigator';
import SingleTabBar from './components/TabBar';
import { StyleSheet } from 'react-native';
import { useAppTheme } from '@/shared/styles/themeProvider';

function TabBarIcon({ focused, title }: { focused: boolean; title: string }) {
  return <SingleTabBar focused={focused} title={title} />;
}

const BottomNavigator = () => {
  const Tab = createBottomTabNavigator();
  const { theme } = useAppTheme();

  const styles = StyleSheet.create({
    tabBar: {
      backgroundColor: theme.background,
      paddingTop: 15,
    },
  });

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
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

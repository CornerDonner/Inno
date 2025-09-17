// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/Home/Home';
import SettingsScreen from './screens/Settings/Settings';
import ProfileStack from './StackScreens/ProfileStack';


import { screenOptions } from './screens/NavbarStyles'; 

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Hjem" component={HomeScreen} />
        <Tab.Screen
          name="Profil"
          component={ProfileStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen name="Indstillinger" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// App.js

// Importerer React og nødvendige komponenter fra React Navigation
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Importerer skærm-komponenter
import HomeScreen from './screens/Home/Home';
import SettingsScreen from './screens/Settings/Settings';
import ProfileStack from './StackScreens/ProfileStack';

// Importerer skærm-indstillinger til navigation
import { screenOptions } from './screens/NavbarStyles'; 

// Opretter en bundfanenavigator
const Tab = createBottomTabNavigator();

// Hovedkomponenten for appen
export default function App() {
  return (
    // Wrapper navigationen i NavigationContainer
    <NavigationContainer>
      {/* Definerer bundfanenavigatoren med skærmindstillinger */}
      <Tab.Navigator screenOptions={screenOptions}>
        {/* Tilføjer Hjem-skærmen til navigatoren */}
        <Tab.Screen name="Hjem" component={HomeScreen} />
        {/* Tilføjer Profil-stakken til navigatoren og skjuler headeren */}
        <Tab.Screen
          name="Profil"
          component={ProfileStack}
          options={{ headerShown: false }}
        />
        {/* Tilføjer Indstillinger-skærmen til navigatoren */}
        <Tab.Screen name="Indstillinger" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

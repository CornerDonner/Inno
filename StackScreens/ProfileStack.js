// Importerer React-biblioteket
import * as React from 'react';
// Importerer createNativeStackNavigator fra @react-navigation/native-stack
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importerer Profile-komponenten fra den angivne sti
import Profile from '../screens/Profile/Profile';
// Importerer OpretBruger-komponenten fra den angivne sti
import OpretBruger from '../screens/OpretBruger/OpretBruger';

// Opretter en Stack Navigator
const Stack = createNativeStackNavigator();

// Eksporterer ProfileStack-komponenten som standard
export default function ProfileStack() {
  return (
    // Definerer Stack Navigatoren, som indeholder de forskellige screens
    <Stack.Navigator>
      {/* Den første skærm, man ser i Profile-tabben */}
      <Stack.Screen
        name="ProfileHome" // Navnet på screenen i navigatoren
        component={Profile} // Komponenten der skal vises
        options={{ title: 'Profil' }} // Titel der vises i headeren
      />
      {/* Skærmen man navigerer til */}
      <Stack.Screen
        name="OpretBruger" // Navnet på screenen i navigatoren
        component={OpretBruger} // Komponenten der skal vises
        options={{ title: 'Opret bruger' }} // Titel der vises i headeren
      />
    </Stack.Navigator>
  );
}

// StackScreens/ProfileStack.js
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Profile from '../screens/Profile/Profile';
import OpretBruger from '../screens/OpretBruger/OpretBruger';

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator>
      {/* The screen you see first inside the Profile tab */}
      <Stack.Screen
        name="ProfileHome"
        component={Profile}
        options={{ title: 'Profil' }}
      />
      {/* The screen you navigate to */}
      <Stack.Screen
        name="OpretBruger"
        component={OpretBruger}
        options={{ title: 'Opret bruger' }}
      />
    </Stack.Navigator>
  );
}

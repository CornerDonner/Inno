// styles/NavbarStyles.js
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

// Export colors so screen styles can reuse them (optional but handy)
export const colors = {
  primary: '#4CAF50',
  text: '#111',
  mutedText: '#666',
  bg: '#FFFFFF',
  tabBg: '#FFFFFF',
  tabActive: '#4CAF50',
  tabInactive: '#888',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

const iconMap = {
  Hjem: { on: 'home', off: 'home-outline' },
  Profil: { on: 'person', off: 'person-outline' },
  Indstillinger: { on: 'settings', off: 'settings-outline' },
};

export const screenOptions = ({ route }) => ({
  headerShown: false,
  tabBarIcon: ({ focused, color, size }) => {
    const icons = iconMap[route.name] ?? { on: 'ellipse', off: 'ellipse-outline' };
    const name = focused ? icons.on : icons.off;
    return <Ionicons name={name} size={size} color={color} />;
  },
  tabBarActiveTintColor: colors.tabActive,
  tabBarInactiveTintColor: colors.tabInactive,
  tabBarStyle: { backgroundColor: colors.tabBg },
  tabBarLabelStyle: { fontSize: 12 },
});

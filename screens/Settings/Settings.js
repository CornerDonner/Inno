// Importerer React-biblioteket
import React from 'react';
// Importerer View og Text komponenter fra react-native
import { View, Text } from 'react-native';
// Importerer styles fra SettingsStyles-filen
import styles from './SettingsStyles';

// Eksporterer SettingsScreen komponenten som standard
export default function SettingsScreen() {
  return (
    // Returnerer en View-komponent med container-stil
    <View style={styles.container}>
      {/* Viser en tekst med title-stil */}
      <Text style={styles.title}>Velkommen til Settings</Text>
    </View>
  );
}

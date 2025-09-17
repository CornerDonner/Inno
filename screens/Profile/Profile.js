// Importerer nødvendige moduler fra React og React Native
import React from 'react';
import { View, Text, Button, Alert } from 'react-native';
// Importerer styles fra en ekstern fil
import styles from './ProfileStyles';

// Definerer og eksporterer ProfileScreen-komponenten
export default function ProfileScreen({ navigation }) {
  return (
    // Yderste container med styling
    <View style={styles.container}>
      {/* Viser en velkomsttekst */}
      <Text style={styles.title}>Velkommen til din profil</Text>
      {/* Viser en tekst om login eller oprettelse */}
      <Text style={styles.title}>Log ind eller opret en bruger</Text>

      {/* Wrapper til login-knappen */}
      <View style={styles.buttonWrap}>
        <Button
          title="Login"
          // Viser en alert når login-knappen trykkes
          onPress={() => Alert.alert('Login trykket')}
        />
      </View>

      {/* Wrapper til opret bruger-knappen */}
      <View style={styles.buttonWrap}>
        <Button
          title="Opret bruger"
          // Navigerer til 'OpretBruger'-skærmen når knappen trykkes
          onPress={() => navigation.navigate('OpretBruger')}
        />
      </View>
    </View>
  );
}

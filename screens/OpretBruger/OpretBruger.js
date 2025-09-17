import React, { useState } from 'react';
// Importerer nødvendige komponenter fra React Native
import { View, Text, TextInput, Button, Alert } from 'react-native';
// Importerer styles fra en ekstern fil
import styles from './OpretBrugerStyles';

// Funktionel komponent til oprettelse af bruger
const OpretBruger = () => {
  // State til at holde navn, email og adgangskode
  const [navn, setNavn] = useState('');
  const [email, setEmail] = useState('');
  const [adgangskode, setAdgangskode] = useState('');

  // Funktion der håndterer oprettelse af bruger
  const handleOpretBruger = () => {
    // Viser en alert med velkomstbesked
    Alert.alert('Bruger oprettet!', `Velkommen, ${navn}!`);
    // Nulstiller inputfelterne
    setNavn('');
    setEmail('');
    setAdgangskode('');
  };

  // Returnerer UI-komponenterne
  return (
    <View style={styles.container}>
      {/* Titel */}
      <Text style={styles.title}>Opret Bruger</Text>

      {/* Inputfelt til navn */}
      <TextInput
        style={styles.input}
        placeholder="Navn"
        value={navn}
        onChangeText={setNavn}
      />

      {/* Inputfelt til email */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Inputfelt til adgangskode */}
      <TextInput
        style={styles.input}
        placeholder="Adgangskode"
        value={adgangskode}
        onChangeText={setAdgangskode}
        secureTextEntry
      />

      {/* Knap til at oprette bruger */}
      <Button title="Opret Bruger" onPress={handleOpretBruger} />
    </View>
  );
};

// Eksporterer komponenten
export default OpretBruger;

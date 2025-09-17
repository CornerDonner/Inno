import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import styles from './OpretBrugerStyles';

const OpretBruger = () => {
  const [navn, setNavn] = useState('');
  const [email, setEmail] = useState('');
  const [adgangskode, setAdgangskode] = useState('');

  const handleOpretBruger = () => {
    Alert.alert('Bruger oprettet!', `Velkommen, ${navn}!`);
    setNavn('');
    setEmail('');
    setAdgangskode('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Opret Bruger</Text>

      <TextInput
        style={styles.input}
        placeholder="Navn"
        value={navn}
        onChangeText={setNavn}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Adgangskode"
        value={adgangskode}
        onChangeText={setAdgangskode}
        secureTextEntry
      />

      <Button title="Opret Bruger" onPress={handleOpretBruger} />
    </View>
  );
};

export default OpretBruger;

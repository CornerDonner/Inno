// screens/Profile.js
import React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import styles from './ProfileStyles';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Velkommen til din profil</Text>
      <Text style={styles.title}>Log ind eller opret en bruger</Text>

      <View style={styles.buttonWrap}>
        <Button
          title="Login"
          onPress={() => Alert.alert('Login trykket')}
        />
      </View>

      <View style={styles.buttonWrap}>
        <Button
          title="Opret bruger"
          onPress={() => navigation.navigate('OpretBruger')}
        />
      </View>
    </View>
  );
}

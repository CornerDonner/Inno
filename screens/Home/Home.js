// screens/Home/Home.js

// Importerer nødvendige moduler fra React og React Native
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './HomeStyles';

// Liste over værktøj med id, navn, kategori og evt. år/stand
const VAERKTOEJ = [
  { id: '1', navn: 'Boremaskine',   kategori: 'El-værktøj', stand: 'God' },
  { id: '2', navn: 'Cirkelsav',     kategori: 'El-værktøj', stand: 'Som ny' },
  { id: '3', navn: 'Hammer',        kategori: 'Håndværktøj', stand: 'Brugt' },
  { id: '4', navn: 'Stiksav',       kategori: 'El-værktøj', stand: 'God' },
  { id: '5', navn: 'Vaterpas',      kategori: 'Måleværktøj', stand: 'Som ny' },
];

// HomeScreen-komponenten
export default function HomeScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      {/* Viser værktøjets navn */}
      <Text style={styles.carTitle}>{item.navn}</Text>
      {/* Viser kategori og stand */}
      <Text style={styles.carMeta}>
        Kategori: {item.kategori} | Stand: {item.stand}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Titel på skærmen */}
      <Text style={styles.title}>Velkommen til Lently</Text>
      {/* Beskrivende tekst */}
      <Text style={styles.body}>Her kan du se en liste over tilgængeligt værktøj.</Text>

      {/* Sektionstitel for værktøj-listen */}
      <Text style={styles.sectionTitle}>Værktøj</Text>
      <FlatList
        data={VAERKTOEJ}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

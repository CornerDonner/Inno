// screens/Home/Home.js

// Importerer nødvendige moduler fra React og React Native
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './HomeStyles';

// Definerer en konstant liste af biler med id, mærke, model og år
const BILER = [
  { id: '1', maerke: 'Volvo',   model: 'XC40',  aar: 2022 },
  { id: '2', maerke: 'BMW',     model: '320i',  aar: 2019 },
  { id: '3', maerke: 'Audi',    model: 'A4',    aar: 2021 },
  { id: '4', maerke: 'Toyota',  model: 'Corolla', aar: 2018 },
  { id: '5', maerke: 'Tesla',   model: 'Model 3', aar: 2023 },
];

// Definerer HomeScreen-komponenten som standard eksport
export default function HomeScreen() {
  // Funktion til at gengive hvert element i listen (en bil)
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      {/* Viser bilens mærke og model */}
      <Text style={styles.carTitle}>{item.maerke} {item.model}</Text>
      {/* Viser bilens år */}
      <Text style={styles.carMeta}>År: {item.aar}</Text>
    </View>
  );

  // Returnerer komponentens layout
  return (
    <View style={styles.container}>
      {/* Titel på skærmen */}
      <Text style={styles.title}>Velkommen til Hjem</Text>
      {/* Beskrivende tekst */}
      <Text style={styles.body}>Dette er Home skærmen.</Text>

      {/* Sektionstitel for bil-listen */}
      <Text style={styles.sectionTitle}>Biler</Text>
      {/* FlatList til at vise listen af biler */}
      <FlatList
        data={BILER} // Dataen der skal vises
        renderItem={renderItem} // Funktion til at gengive hvert element
        keyExtractor={(item) => item.id} // Unik nøgle for hvert element
        contentContainerStyle={styles.listContent} // Styling til listen
        ItemSeparatorComponent={() => <View style={styles.separator} />} // Separator mellem elementer
        showsVerticalScrollIndicator={false} // Skjuler scroll-indikator
      />
    </View>
  );
}

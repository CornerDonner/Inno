// screens/Home/Home.js
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './HomeStyles';

const BILER = [
  { id: '1', maerke: 'Volvo',   model: 'XC40',  aar: 2022 },
  { id: '2', maerke: 'BMW',     model: '320i',  aar: 2019 },
  { id: '3', maerke: 'Audi',    model: 'A4',    aar: 2021 },
  { id: '4', maerke: 'Toyota',  model: 'Corolla', aar: 2018 },
  { id: '5', maerke: 'Tesla',   model: 'Model 3', aar: 2023 },
];

export default function HomeScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.carTitle}>{item.maerke} {item.model}</Text>
      <Text style={styles.carMeta}>År: {item.aar}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Velkommen til Hjem</Text>
      <Text style={styles.body}>Dette er Home skærmen.</Text>

      <Text style={styles.sectionTitle}>Biler</Text>
      <FlatList
        data={BILER}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

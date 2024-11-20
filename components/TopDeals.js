import React from 'react';
import { View, Text, StyleSheet,FlatList } from 'react-native';
import DealCard from './DealCard';
import dealItems from '../data/dealItems.json';
export default function TopDeals({ handleBestSellerPress }) {
  
  const renderDealItem = ({ item }) => (
  <DealCard
    key={item.id} // Assuming each item has a unique `id`
    item={item}
    onPress={() => handleBestSellerPress(item)}
  />
);

return (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Top Deals</Text>
    <FlatList
      data={dealItems} // The array of items
      keyExtractor={(item) => item.id} // Use a unique identifier for each item
      renderItem={renderDealItem}
      
    />
  </View>
);
}

const styles = StyleSheet.create({
  section: {
    padding: 20,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  
});
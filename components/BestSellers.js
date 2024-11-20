import React from 'react';
import { View, Text, ScrollView, StyleSheet,FlatList } from 'react-native';
import BestSellerItem from './BestSellerItem';
import bestSellerItems from '../data/bestSellers.json';

export default function BestSellers({ handleBestSellerPress }) {

  return (
    <View style={styles.section}>
    <Text style={styles.sectionTitle}>Best Sellers</Text>
    <FlatList
      horizontal
      data={bestSellerItems}
      keyExtractor={(item, index) => index.toString()}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewContainer}
      renderItem={({ item }) => (
        <BestSellerItem
          title={item.title}
          price={item.price}
          image={item.image}
          onPress={() => handleBestSellerPress(item)}
        />
      )}
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
  scrollViewContainer: {
    flexDirection: 'row',
    paddingRight: 20,
  },
});
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import MenuItem from './MenuItem';
import menuItems from '../data/menuItems.json';

export default function ExploreMenu({ handleViewAllPress }: { handleViewAllPress: () => void }) {
  const renderItem = ({ item, index }: { item: any; index: number }) => (
    <MenuItem
      key={index}
      title={item.title}
      image={item.image}
      onPress={handleViewAllPress}
    />
  );

  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Explore Menu</Text>
        <TouchableOpacity onPress={handleViewAllPress}>
          <Text style={styles.viewAllText}>VIEW ALL</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={menuItems}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        columnWrapperStyle={styles.menuGrid}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    padding: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  viewAllText: {
    color: 'white',
    fontSize: 14,
  },
  menuGrid: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
});
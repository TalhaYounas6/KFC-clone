import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

export default function BestSellerItem({ title, price, image, onPress }) {
  return (
    <TouchableOpacity style={styles.bestSellerItem} onPress={onPress}>
      <Image
        source={{ uri: image }}
        style={styles.menuItemImage}
        resizeMode="cover"
      />
      <Text style={styles.menuItemTitle}>{title}</Text>
      {price && <Text style={styles.menuItemPrice}>Rs {price}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  bestSellerItem: {
    width: 200,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Black transparent
    borderRadius: 8,
    padding: 8,
    marginBottom: 10,
    marginRight: 16,
    borderWidth: 1, // Add border
    borderColor: 'white', // White border color
    borderStyle: 'dotted', // Dotted border
  },
  menuItemImage: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    marginBottom: 8,
  },
  menuItemTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    borderBottomWidth: 2,
    borderBottomColor: '#E4002B',
    paddingBottom: 4,
  },
  menuItemPrice: {
    color: 'white',
    fontSize: 14,
    marginTop: 4,
  },
});

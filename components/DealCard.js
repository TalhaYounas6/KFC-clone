import React from 'react';
import { TouchableOpacity, Image, Text, View, StyleSheet } from 'react-native';

export default function DealCard({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.dealCard} onPress={onPress}>
      <Image source={{ uri: item.image }} style={styles.dealImage} />
      <View style={styles.dealInfo}>
        <Text style={styles.dealTitle}>{item.title}</Text>
        <Text style={styles.dealDescription}>{item.description}</Text>
        <View style={styles.whiteLine} />
        <View style={styles.priceAndButtonContainer}>
          <Text style={styles.dealPrice}>Rs {item.price}</Text>
          <TouchableOpacity style={styles.viewButton} onPress={onPress}>
            <Text style={styles.viewButtonText}>VIEW</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  dealCard: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Transparent black background
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
    borderWidth: 1, // White dotted border
    borderColor: 'white',
    borderStyle: 'dotted', // Dotted border
  },
  dealImage: {
    width: '30%',
    height: 120,
    resizeMode: 'cover',
  },
  dealInfo: {
    width: '70%',
    padding: 16,
    justifyContent: 'space-between',
  },
  dealTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  dealDescription: {
    color: 'white',
    fontSize: 14,
    marginBottom: 8,
  },
  whiteLine: {
    height: 1,
    backgroundColor: 'white',
    marginVertical: 8,
  },
  priceAndButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dealPrice: {
    color: 'white',
    fontSize: 16,
    marginRight: 16,
  },
  viewButton: {
    backgroundColor: '#E4002B',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignItems: 'center',
  },
  viewButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

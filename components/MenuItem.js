import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

export default function MenuItem({ title, image, onPress }) {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <Text style={styles.menuItemTitle}>{title}</Text>
      <Image
        source={{ uri: image }}
        style={styles.menuItemImage}
        resizeMode="cover"
      />
      
    
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  menuItem: {
    width: '47%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Black transparent
    borderRadius: 8,
    padding: 8,
    marginBottom: 10,
    marginRight: 2,
    borderWidth: 1, // Add border
    borderColor: 'white', // Border color
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
    fontSize: 18,
    fontWeight: 'bold',
    borderBottomWidth: 2,
  
    paddingBottom: 4,
    textAlign:"center"
  },
  
});

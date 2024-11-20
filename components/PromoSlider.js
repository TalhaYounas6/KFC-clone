import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import sliderImages from '../data/sliderImages.json';
export default function PromoSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % sliderImages.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>What's new</Text>
      <Image
        source={{ uri: sliderImages[currentImageIndex] }}
        style={styles.promoImage}
      />
      <TouchableOpacity style={styles.reorderButton}>
        <Text style={styles.reorderButtonText}>REORDER</Text>
      </TouchableOpacity>
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
  promoImage: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    resizeMode: 'contain',
  },
  reorderButton: {
    backgroundColor: '#E4002B',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  reorderButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
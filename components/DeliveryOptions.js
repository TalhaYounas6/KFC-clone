import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Truck, User } from 'lucide-react-native';

export default function DeliveryOptions({ selectedDelivery, setSelectedDelivery }) {
  return (
    <View style={styles.deliveryOptions}>
      <TouchableOpacity
        style={[
          styles.deliveryButton,
          selectedDelivery === 'delivery' && styles.selectedButton,
        ]}
        onPress={() => setSelectedDelivery('delivery')}>
        <Truck color="white" size={24} />
        <Text style={styles.deliveryButtonText}>Delivery</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.deliveryButton,
          selectedDelivery === 'pickup' && styles.selectedButton,
        ]}
        onPress={() => setSelectedDelivery('pickup')}>
        <User color="white" size={24} />
        <Text style={styles.deliveryButtonText}>Pickup</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  deliveryOptions: {
    flexDirection: 'row',
    padding: 16,
    gap: 16,
  },
  deliveryButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1A1A1A',
    padding: 16,
    borderRadius: 8,
    gap: 8,
  },
  selectedButton: {
    backgroundColor: '#E4002B',
  },
  deliveryButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});
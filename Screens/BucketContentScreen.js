import React, { useContext } from 'react';
import {
  SafeAreaView,
  ScrollView,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BucketContext } from '../BucketContext';
import { useBucket } from '../BucketContext';
import {
  ArrowLeft,
  Trash,
  Plus,
  Pencil,
  ChevronRight,
} from 'lucide-react-native';

export default function BucketContentScreen() {
  const navigation = useNavigation();
  const { bucketItems, addToBucket, removeFromBucket, subtotal, gst, total } =
    useBucket();

  const handleAddToBucket = (product) => {
    addToBucket(product);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            accessibilityLabel="Go back"
            accessibilityRole="button">
            <ArrowLeft color="white" size={24} />
          </TouchableOpacity>
          <Image
            source={{
              uri: 'data:image/png;base64,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',
            }}
            style={styles.logo}
          />
        </View>

        <Text style={styles.title}>Bucket</Text>

        {/* Items List */}
        <FlatList
          data={bucketItems}
          keyExtractor={(item, index) =>
            item?.id ? item.id.toString() : index.toString()
          }
          ListEmptyComponent={
            <Text style={styles.emptyMessage}>Your bucket is empty.</Text>
          }
          renderItem={({ item }) => (
            <View style={styles.itemCard}>
              <View style={styles.itemHeader}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Image source={{ uri: item.image }} style={styles.itemImage} />
              </View>
              <View style={styles.itemControls}>
                <Text style={styles.price}>Rs {item.price.toFixed(2)}</Text>
                <View style={styles.quantityControls}>
                  <TouchableOpacity
                    onPress={() => removeFromBucket(item)}
                    style={styles.iconButton}>
                    <Trash color="white" size={20} />
                  </TouchableOpacity>
                  <Text style={styles.quantity}>{item.quantity}</Text>
                  <TouchableOpacity
                    onPress={() => handleAddToBucket(item)}
                    style={styles.iconButton}>
                    <Plus color="white" size={20} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />

        {/* Order Summary */}
        <View style={styles.summary}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryText}>Sub Total</Text>
            <Text style={styles.summaryText}>Rs {subtotal.toFixed(2)}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryText}>GST (16%)</Text>
            <Text style={styles.summaryText}>Rs {gst.toFixed(2)}</Text>
          </View>
          <View style={[styles.summaryRow, styles.totalRow]}>
            <Text style={styles.summaryText}>Total</Text>
            <Text style={styles.summaryText}>Rs {total.toFixed(2)}</Text>
          </View>
        </View>
      </ScrollView>

      {/* Checkout Bar */}
      <View style={styles.checkoutBar}>
        <Text style={styles.checkoutPrice}>Rs {total.toFixed(2)}</Text>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutText}>Checkout</Text>
          <ChevronRight color="white" size={24} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginTop: 15,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  locationContainer: {
    marginLeft: 8,
  },
  pickupText: {
    color: '#fff',
    fontSize: 12,
  },
  locationText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  logo: {
    width: 60,
    height: 30,
    resizeMode: 'contain',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    padding: 16,
  },
  itemCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 16,
    margin: 16,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  itemSubtext: {
    color: '#666',
    fontSize: 14,
  },
  itemImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  itemControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  price: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  iconButton: {
    padding: 8,
    backgroundColor: '#333',
    borderRadius: 8,
  },
  quantity: {
    color: '#fff',
    fontSize: 16,
  },
  instructionsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 16,
  },
  instructionsText: {
    color: '#666',
    fontSize: 14,
  },
  phoneInput: {
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 16,
    margin: 16,
    color: '#fff',
  },
  exploreMenu: {
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 16,
    margin: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  exploreMenuTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  exploreMenuSubtext: {
    color: '#666',
    fontSize: 14,
  },
  summary: {
    margin: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#333',
    borderStyle: 'dashed',
    borderRadius: 12,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  totalRow: {
    borderTopWidth: 1,
    borderTopColor: '#333',
    paddingTop: 8,
    marginTop: 8,
  },
  summaryText: {
    color: '#fff',
    fontSize: 14,
  },
  recommendationTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    padding: 16,
  },
  checkoutBar: {
    backgroundColor: '#1a1a1a',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkoutLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  checkoutImage: {
    width: 40,
    height: 25,
    resizeMode: 'contain',
  },
  itemCount: {
    color: '#fff',
    fontSize: 14,
  },
  checkoutButton: {
    backgroundColor: '#e31837',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    gap: 8,
  },
  checkoutPrice: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  checkoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

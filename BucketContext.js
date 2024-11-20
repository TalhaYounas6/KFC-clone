import React, { createContext, useState, useContext } from 'react';

const BucketContext = createContext();

// Provider component to wrap your app and provide the bucket state
export const BucketProvider = ({ children }) => {
  const [bucketItems, setBucketItems] = useState([]);

  const addToBucket = (item) => {
    const validPrice = isNaN(parseFloat(item.price)) ? 0 : parseFloat(item.price);
    setBucketItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.name=== item.name);
      if (existingItem) {
        return prevItems.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        )
      } else {
        
        return [...prevItems, { ...item, price: validPrice, quantity: 1 }];
      }
    });
  };

  const removeFromBucket = (item) => {
    setBucketItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.name === item.name);
      if (existingItem && existingItem.quantity > 1) {
        return prevItems.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity - 1 } : i
        );
      } else {
        return prevItems.filter((i) => i.name !== item.name);
      }
    });
  };

  const subtotal = bucketItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const gst = subtotal * 0.16;
  const total = subtotal + gst;
  const itemCount = bucketItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <BucketContext.Provider
      value={{ bucketItems, itemCount, addToBucket, removeFromBucket, subtotal, gst, total }}
    >
      {children}
    </BucketContext.Provider>
  );
};
// Custom hook to use the BucketContext
export const useBucket = () => {
  const context = useContext(BucketContext);
  if (!context) {
    throw new Error('useBucket must be used within a BucketProvider');
  }
  return context;
};
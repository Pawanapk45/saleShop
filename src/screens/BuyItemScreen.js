// // BuyItemScreen.js
// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
// import { useSelector } from 'react-redux';

// const BuyItemScreen = ({ navigation }) => {
//   const cartItems = useSelector(state => state.cart.items);
//   const userAddress = "123 Main Street"; 
//   const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0); 

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Buy Item</Text>

//       {/* Cart Items */}
//       <FlatList
//         data={cartItems}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.itemContainer}>
//             <Text>{item.name}</Text>
//             <Text>{item.price}</Text>
//           </View>
//         )}
//       />

//       {/* Total Amount */}
//       <Text style={styles.totalText}>Total: ${totalAmount}</Text>

//       {/* Address */}
//       <View style={styles.addressContainer}>
//         <Text style={styles.addressText}>Delivery Address:</Text>
//         <Text>{userAddress}</Text>
//         <TouchableOpacity onPress={() => navigation.navigate('AddressScreen')}>
//           <Text style={styles.changeAddressText}>Change Address</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Payment Options */}
//       <Text style={styles.paymentText}>Payment Method:</Text>
//       <TouchableOpacity style={styles.paymentOption}>
//         <Text>Pay with Card</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.paymentOption}>
//         <Text>Pay with Paytm UPI</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16 },
//   header: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
//   itemContainer: { flexDirection: 'row', justifyContent: 'space-between', padding: 8 },
//   totalText: { fontSize: 18, fontWeight: 'bold', marginVertical: 16 },
//   addressContainer: { marginVertical: 16 },
//   addressText: { fontSize: 16, fontWeight: 'bold' },
//   changeAddressText: { color: 'blue' },
//   paymentText: { fontSize: 16, fontWeight: 'bold', marginVertical: 8 },
//   paymentOption: { padding: 12, backgroundColor: 'lightgrey', marginVertical: 4, borderRadius: 8 },
// });

// export default BuyItemScreen;

// import React from "react";
// import { View, Text, FlatList, StyleSheet } from "react-native";
// import UserAddress from "../components/molecules/UserAddress";
// import { GestureHandlerRootView, ScrollView, TouchableOpacity } from "react-native-gesture-handler";

// const BuyItemScreen = ({ route }) => {
//   const { items, total } = route.params;

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Items to Buy</Text>
//       <FlatList
//         data={items}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => (
//           <GestureHandlerRootView>
//             <ScrollView>
//             <View style={styles.itemContainer}>
//             <Text>{item.name}</Text>
//             <Text>{item.price} x {item.quantity}</Text>
//             {/* <TouchableOpacity style={{backgroundColor:'red',padding:5,borderRadius:10}}>
//               <Text style={{color:'#fff'}}>Remove</Text>
//             </TouchableOpacity> */}
//           </View>
//           </ScrollView>
//           </GestureHandlerRootView>
//         )}
//       />
//       <Text style={styles.totalText}>Total: ${total}</Text>
//       <UserAddress/>

//      <GestureHandlerRootView>
//        <View>
//       <Text style={styles.paymentText}>Payment Method:</Text>
//       <TouchableOpacity style={styles.paymentOption}>
//         <Text>Pay with Card</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.paymentOption}>
//         <Text>Pay with Paytm UPI</Text>
//       </TouchableOpacity>
//       </View>
//      </GestureHandlerRootView>
//     </View>
//   );
// };


// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16 },
//   header: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
//   itemContainer: { flexDirection: 'row', justifyContent: 'space-between', padding: 8,backgroundColor:'#fff',margin:2,borderRadius:10 },
//   totalText: { fontSize: 20, fontWeight: 'bold', marginTop: 0, textAlign: 'center' },
// });

// export default BuyItemScreen;


import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, Alert } from "react-native";
import UserAddress from "../components/molecules/UserAddress";
import { GestureHandlerRootView, ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import CustomComponent from "../components/modals/Component";

const BuyItemScreen = ({ route }) => {
  const { items, total } = route.params;
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  const handlePaymentSelection = (method) => {
    setSelectedPaymentMethod(method);
  };

  const handleConfirmPayment = () => {
    if (!selectedPaymentMethod) {
      Alert.alert("Payment Method Required", "Please select a payment method to continue.");
      return;
    }
    
    Alert.alert("Payment Successful", `You have paid ${total} using ${selectedPaymentMethod}.`);
  };

  return (
    <GestureHandlerRootView>
       <CustomComponent ShowIcon={false} textContent={"Items to Buy"}/> 
      <ScrollView>
      <View style={styles.container}>
      {/* <Text style={styles.header}>Items to Buy</Text> */}
          
      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <GestureHandlerRootView>
            <ScrollView>
              <View style={styles.itemContainer}>
                <Text>{item.name}</Text>
                <Text>{item.price} x {item.quantity}</Text>
              </View>
            </ScrollView>
          </GestureHandlerRootView>
        )}
      />

      <Text style={styles.totalText}>Total: ${total}</Text>
      <UserAddress />

      <View style={styles.paymentContainer}>
        <Text style={styles.paymentText}>Select Payment Method:</Text>
        
        <TouchableOpacity
          style={[
            styles.paymentOption,
            selectedPaymentMethod === "Card" && styles.selectedPaymentOption
          ]}
          onPress={() => handlePaymentSelection("Card")}
        >
          <Text>Pay with Card</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.paymentOption,
            selectedPaymentMethod === "Paytm UPI" && styles.selectedPaymentOption
          ]}
          onPress={() => handlePaymentSelection("Paytm UPI")}
        >
          <Text>Pay with Paytm UPI</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmPayment}>
          <Text style={styles.confirmButtonText}>Confirm Payment</Text>
        </TouchableOpacity>
      </View>
    </View>
    
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    backgroundColor: '#fff',
    margin: 2,
    borderRadius: 10
  },
  totalText: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginVertical: 10 },
  paymentContainer: { marginTop: 20 },
  paymentText: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  paymentOption: {
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f0f0f0',
  },
  selectedPaymentOption: {
    borderColor: '#007bff',
    backgroundColor: '#e0f7ff',
  },
  confirmButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default BuyItemScreen;

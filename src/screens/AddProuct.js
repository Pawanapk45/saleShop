// import React, {useEffect} from 'react';
// import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
// import {FlatList, GestureHandlerRootView} from 'react-native-gesture-handler';
// import UserNavBar from '../components/molecules/UserNavBar';
// import { useDispatch } from 'react-redux';
// import { addItemToCart } from '../redux/featurs/cartSlice/CartSliceProduct';

// const AddProduct = ({route,navigation}) => {
//   const {item} = route.params;
//   const dispatch = useDispatch();

//   const handleAddToCart = (product) => {
//     dispatch(addItemToCart(product));
//   };

//   useEffect(() => {
//     console.log(item);
//   }, []);

//   return (
//     <GestureHandlerRootView>
//       <UserNavBar />

//       <FlatList
//         data={item.subcategories}
//         keyExtractor={(subcategory, index) => index.toString()}
//         showsHorizontalScrollIndicator={true}
//         renderItem={({ item: subcategory }) => (
            
//             <TouchableOpacity onPress={()=> {console.log('Button pressed'),navigation.navigate('ProductDetails', { product: subcategory })}}>
//               <View
//             style={{
//               flexDirection: 'row',
//               alignItems: 'center',
//               justifyContent: 'space-evenly',
//               backgroundColor: '#e0d1e5e0',
//               borderRadius: 20,
//               paddingVertical: 5,
//               margin:5
//             }}>
//             <View>
//               <Image
//                 source={{
//                   uri: subcategory.image,
//                 }}
//                 style={{width: 100, height: 100, resizeMode: 'contain', borderRadius: 20}}
//               />
//             </View>
//             <View style={{marginHorizontal: 10}}>
//               <View>
//                 <Text style={{fontSize: 20, color: '#000'}}>{subcategory.name}</Text>
//                 <Text style={{fontSize: 13}}>{subcategory.price}</Text>
//                 <View>
//                   <Text style={{fontSize: 15}}>Rating 4.5</Text>
//                 </View>
//               </View>
//             </View>
//             <View style={{}}>
//               <TouchableOpacity style={{backgroundColor: 'lightpink', borderRadius: 15}} onPress={() => handleAddToCart(subcategory)}>
//                 <Text
//                   style={{
//                     paddingHorizontal: 10,
//                     paddingVertical: 5,
//                     textAlign: 'center',
//                   }}>
//                   Add To Cart
//                 </Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={{backgroundColor: 'lightpink', marginTop: 5, borderRadius: 15}}
//                 onPress={() => navigation.navigate('BuyItemScreen')}>
//                 <Text
//                   style={{
//                     paddingHorizontal: 10,
//                     paddingVertical: 5,
//                     textAlign: 'center',
//                   }}>
//                   Buy Now
//                 </Text>
//               </TouchableOpacity>
//             </View>
//             </View> 
//             </TouchableOpacity>
           
//         )}
//       />
//      </GestureHandlerRootView>
//   );
// };

// export default AddProduct;


// import React, { useEffect } from 'react';
// import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';
// import UserNavBar from '../components/molecules/UserNavBar';
// import { useDispatch, useSelector } from 'react-redux';
// import { addItemToCart } from '../redux/featurs/cartSlice/CartSliceProduct';

// const AddProduct = ({ route, navigation }) => {
//   const { item } = route.params;
//   const cartItems = useSelector((state) => state.cart.items); // Access current cart items
//   const dispatch = useDispatch();

//   const handleAddToCart = (product) => {
//     dispatch(addItemToCart(product));
//   };

//   const handleBuyNow = (product) => {
//     // Combine current cart items with selected product
//     const updatedItems = [...cartItems, { ...product, quantity: 1 }];
//     const total = updatedItems.reduce((sum, item) => {
//       const price = parseFloat(item.price.replace('$', ''));
//       return sum + price * (item.quantity || 1);
//     }, 0);

//     // Navigate to BuyItemScreen with the updated cart items and total
//     navigation.navigate('BuyItemScreen', { items: updatedItems, total });
//   };

//   useEffect(() => {
//     console.log(item);
//   }, []);

//   return (
//     <GestureHandlerRootView>
//       <UserNavBar />

//       <FlatList
//         data={item.subcategories}
//         keyExtractor={(subcategory, index) => index.toString()}
//         showsHorizontalScrollIndicator={true}
//         renderItem={({ item: subcategory }) => (
//           <TouchableOpacity
//             onPress={() => {
//               console.log('Button pressed');
//               navigation.navigate('ProductDetails', { product: subcategory });
//             }}
//           >
//             <View
//               style={{
//                 flexDirection: 'row',
//                 alignItems: 'center',
//                 justifyContent: 'space-evenly',
//                 backgroundColor: '#e0d1e5e0',
//                 borderRadius: 20,
//                 paddingVertical: 5,
//                 margin: 5,
//               }}
//             >
//               <Image
//                 source={{ uri: subcategory.image }}
//                 style={{ width: 100, height: 100, resizeMode: 'contain', borderRadius: 20 }}
//               />
//               <View style={{ marginHorizontal: 10 }}>
//                 <Text style={{ fontSize: 20, color: '#000' }}>{subcategory.name}</Text>
//                 <Text style={{ fontSize: 13 }}>{subcategory.price}</Text>
//                 <Text style={{ fontSize: 15 }}>Rating 4.5</Text>
                
//               </View>
//               <View>
//                 <TouchableOpacity
//                   style={{ backgroundColor: 'lightpink', borderRadius: 15 }}
//                   onPress={() => handleAddToCart(subcategory)}
//                 >
//                   <Text style={{ paddingHorizontal: 10, paddingVertical: 5, textAlign: 'center' }}>
//                     Add To Cart
//                   </Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   style={{ backgroundColor: 'lightpink', marginTop: 5, borderRadius: 15 }}
//                   onPress={() => handleBuyNow(subcategory)} // Updated to call handleBuyNow
//                 >
//                   <Text style={{ paddingHorizontal: 10, paddingVertical: 5, textAlign: 'center' }}>
//                     Buy Now
//                   </Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </TouchableOpacity>
//         )}
//       />
//     </GestureHandlerRootView>
//   );
// };

// export default AddProduct;



/////


import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';
import UserNavBar from '../components/molecules/UserNavBar';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, removeItemFromCart, updateItemQuantity,incrementQuantity,decrementQuantity } from '../redux/featurs/cartSlice/CartSliceProduct';

const AddProduct = ({ route, navigation }) => {
  const { item } = route.params;
  const cartItems = useSelector((state) => state.cart.items); // Access current cart items
  const dispatch = useDispatch();

  // Function to check if the product is already in the cart
  const isProductInCart = (productId) => {
    return cartItems.some(item => item.id === productId);
  };

  const handleAddToCart = (product) => {
    dispatch(addItemToCart({ ...product, quantity: 1 }));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeItemFromCart(productId));
  };

  const handleBuyNow = (product) => {
    // Combine current cart items with selected product
    const updatedItems = [...cartItems, { ...product, quantity: 1 }];
    
    // Calculate the total price of the cart
    const total = updatedItems.reduce((sum, item) => {
      const price = parseFloat(item.price.replace('$', '')); // Assuming price is in string format like "$20"
      return sum + price * (item.quantity || 1);
    }, 0);
  
    // Navigate to the BuyItemScreen and pass the updated cart items and total price
    navigation.navigate('BuyItemScreen', { items: updatedItems, total });
  };



  useEffect(() => {
    console.log(item);
  }, []);

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  return (
    <GestureHandlerRootView>
      <UserNavBar showUserInfo={false} flex='flex-end' goBack={true} mgBottom={10} />

      <FlatList
        data={item.subcategories}
        keyExtractor={(subcategory, index) => index.toString()}
        showsHorizontalScrollIndicator={true}
        renderItem={({ item: subcategory }) => {
          const isInCart = isProductInCart(subcategory.id);
          const cartItem = cartItems.find(cartItem => cartItem.id === subcategory.id);
          const quantity = cartItem ? cartItem.quantity : 1;

          return (
            <TouchableOpacity
              onPress={() => {
                console.log('Button pressed');
                navigation.navigate('ProductDetails', { product: subcategory });
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                  backgroundColor: '#e0d1e5e0',
                  borderRadius: 20,
                  paddingVertical: 5,
                  margin: 5,
                  elevation: 5,
                }}
              >
                <Image
                  source={{ uri: subcategory.image }}
                  style={{ width: 100, height: 100, resizeMode: 'contain', borderRadius: 20 }}
                />
                <View style={{ marginHorizontal: 10 }}>
                  <Text style={{ fontSize: 20, color: '#000' }}>{subcategory.name}</Text>
                  <Text style={{ fontSize: 13 }}>{subcategory.price}</Text>
                  <Text style={{ fontSize: 15 }}>Rating 4.5</Text>
                  {isInCart && (
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                      <TouchableOpacity onPress={() => handleDecrement(subcategory.id)}>
                        <Text style={{ fontSize: 20, marginHorizontal: 10, fontWeight: 'bold' }}>-</Text>
                      </TouchableOpacity>
                      <TextInput
                        value={quantity.toString()}
                        editable={false}
                        style={{
                          width: 40,
                          height: 40,
                          backgroundColor: '#fff',
                          textAlign: 'center',
                          fontSize: 18,
                          color: 'red',
                          borderRadius: 5,
                        }}
                      />
                      <TouchableOpacity onPress={() => handleIncrement(subcategory.id)}>
                        <Text style={{ fontSize: 20, marginHorizontal: 10, fontWeight: 'bold' }}>+</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
                <View>
                  {isInCart ? (
                    <TouchableOpacity
                      style={{ backgroundColor: 'red', borderRadius: 15 }}
                      onPress={() => handleRemoveFromCart(subcategory.id)}
                    >
                      <Text style={{ paddingHorizontal: 10, paddingVertical: 5, textAlign: 'center', color:'white' }}>
                        Remove
                      </Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      style={{ backgroundColor: 'lightpink', borderRadius: 15 }}
                      onPress={() => handleAddToCart(subcategory)}
                    >
                      <Text style={{ paddingHorizontal: 10, paddingVertical: 5, textAlign: 'center' }}>
                        Add to Cart
                      </Text>
                    </TouchableOpacity>
                  )}
                  <TouchableOpacity
                    style={{ backgroundColor: 'lightpink', marginTop: 5, borderRadius: 15 }}
                    onPress={() => handleBuyNow(subcategory)}  
                  >
                    <Text style={{ paddingHorizontal: 10, paddingVertical: 5, textAlign: 'center' }}>
                      Buy Now
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </GestureHandlerRootView>
  );
};

export default AddProduct;

// import React from "react";
// import { View, Text, FlatList, Image } from "react-native";
// import { useSelector, useDispatch } from "react-redux";
// import { GestureHandlerRootView, TouchableOpacity } from "react-native-gesture-handler";
// import { removeItemFromCart } from "../redux/featurs/cartSlice/CartSliceProduct";
// import Icon from 'react-native-vector-icons/MaterialIcons';

// const CatScreen = () => {
//   const cartItems = useSelector((state) => state.cart.items);
//   const dispatch = useDispatch();

//   const handleRemoveFromCart = (id) => {
//     dispatch(removeItemFromCart(id));
//   };

//   return (
//     <GestureHandlerRootView>
//       <View>
        
//         {cartItems.length > 0 ? (
//           <FlatList
//             data={cartItems}
//             keyExtractor={(item, index) => index.toString()}
//             showsHorizontalScrollIndicator={true}
//             renderItem={({ item }) => (
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   alignItems: 'center',
//                   justifyContent: 'space-evenly',
//                   backgroundColor: '#e0d1e5e0',
//                   borderRadius: 20,
//                   paddingVertical: 5,
//                   margin: 5
//                 }}>
//                 <View>
//                   <Image
//                     source={{
//                       uri: item.image,
//                     }}
//                     style={{ width: 100, height: 100, resizeMode: 'contain', borderRadius: 20 }}
//                   />
//                 </View>
//                 <View style={{ marginLeft: 0 ,marginRight:50}}>
//                   <Text style={{ fontSize: 20, color: '#000' }}>{item.name}</Text>
//                   <Text style={{ fontSize: 13 }}>{item.price}</Text>
//                   <Text style={{ fontSize: 15 }}>Rating 4.5</Text>
//                 </View>
//                 <View>
//                   <TouchableOpacity
//                     style={{ backgroundColor: 'red', borderRadius: 15 }}
//                     onPress={() => {handleRemoveFromCart(item),console.log(item)}} 
//                   >
//                     <Text
//                       style={{
//                         paddingHorizontal: 10,
//                         paddingVertical: 5,
//                         textAlign: 'center',
//                         color: 'white',
//                       }}>
//                       Remove
//                     </Text>
//                   </TouchableOpacity>
                 
//                 </View>
//               </View>
//             )}
//           />
//         ) : (
//           <View style={{alignItems:'center',justifyContent:'center',marginTop:100}}>
//             <Image
//             source={{uri:'https://cdn-icons-png.flaticon.com/512/1199/1199716.png'}}
//             style={{width:200,height:200}}/>
//             <Text style={{fontSize:25,fontWeight:'bold',marginTop:20,}}>No items in cart.</Text>
//          </View>
//         )}
//       </View>
//     </GestureHandlerRootView>
//   );
// };

// export default CatScreen;

import React from "react";
import { View, Text, FlatList, Image, TextInput } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { GestureHandlerRootView, ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { removeItemFromCart, incrementQuantity, decrementQuantity } from "../redux/featurs/cartSlice/CartSliceProduct";
import UserNavBar from "../components/molecules/UserNavBar";

const CatScreen = ({navigation}) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    console.log("Removing item with id:", id);
    dispatch(removeItemFromCart(id));
  };

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  
  const totalPrice = cartItems.reduce((sum, item) => {
    const itemPrice = parseFloat(item.price.replace('$', ''));
    return sum + itemPrice * (item.quantity || 1);
  }, 0);

  return (
    <GestureHandlerRootView>
     <UserNavBar showUserInfo={false} flex='flex-end' goBack={true} mgBottom={10} />
     <View style={{ flex: 1, padding: 10 }}>
        {cartItems.length > 0 ? (
          <>
            <FlatList
              data={cartItems}
              keyExtractor={(item, index) => index.toString()}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item   }) => (
                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                  backgroundColor: '#e0d1e5e0',
                  borderRadius: 20,
                  paddingVertical: 5,
                  marginVertical: 5,
                  elevation: 5,
                }}>
                  <Image
                    source={{ uri: item.image }}
                    style={{
                      width: 100,
                      height: 100,
                      resizeMode: 'contain',
                      borderRadius: 20,
                    }}
                  />
                  <View style={{ flex: 1, marginLeft: 10 }}>
                    <Text style={{ fontSize: 18, color: '#000', fontWeight: 'bold' }}>{item.name}</Text>
                    <Text style={{ fontSize: 15, color: '#333' }}>{item.price}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                      <TouchableOpacity onPress={() => handleDecrement(item.id)}>
                        <Text style={{ fontSize: 20, marginHorizontal: 10, fontWeight: 'bold' }}>-</Text>
                      </TouchableOpacity>
                      <TextInput
                        value={item.quantity.toString()}
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
                      <TouchableOpacity onPress={() => handleIncrement(item.id)}>
                        <Text style={{ fontSize: 20, marginHorizontal: 10, fontWeight: 'bold' }}>+</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <TouchableOpacity
                    style={{
                      backgroundColor: 'red',
                      borderRadius: 15,
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                      marginRight:20,
                    }}
                    onPress={() => handleRemoveFromCart(item.id)}
                  >
                    <Text style={{ color: 'white', textAlign: 'center' }}>Remove</Text>
                  </TouchableOpacity>
                </View>
              )}
            />
            <View style={{
              alignItems: 'center',
              paddingVertical: 20,
              borderTopWidth: 1,
              borderColor: '#ccc',
            }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#333' }}>Total: ${totalPrice.toFixed(2)}</Text>
              <View>
                <TouchableOpacity
                onPress={() =>
                  navigation.navigate('BuyItemScreen', {
                    items: cartItems,
                    total: totalPrice.toFixed(2),
                  })
                }
                  style={{
                    backgroundColor: '#e0d1e5e0',
                    borderRadius: 15,
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    marginTop:10,
                  }}
                >
                  <Text style={{ color: '#000', textAlign: 'center',fontWeight:700 }}>Buy Items</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        ) : (
          <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 100 }}>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1199/1199716.png' }}
              style={{ width: 200, height: 200 }}
            />
            <Text style={{ fontSize: 25, fontWeight: 'bold', marginTop: 20 }}>No items in cart.</Text>
          </View>
        )}
      </View>
    
     
    </GestureHandlerRootView>
   
  );
};

export default CatScreen;
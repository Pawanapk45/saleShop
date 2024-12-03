import React from "react";
import { View, Text,Pressable,Image } from "react-native";
import { GestureHandlerRootView, TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from "react-redux";
import { addCartItem,removeCartItem } from '../redux/featurs/cartSlice/CartSlice';
import Icon from 'react-native-vector-icons/FontAwesome';
import Form from '../Form';


const Cart = () =>{

    const dispatch = useDispatch();
  
    const addItem = (item) => {
      dispatch(addCartItem(item));
    };
  
    const addeditem = useSelector(state => state.cart);
  
    const removeItem = (item) => {
      dispatch(removeCartItem(item));
    };
  
  

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
          <View>
            <Text style={{color:'black'}}>Cart Screen</Text>
          </View>
    
         
    
          <FlatList
            data={addeditem}
            renderItem={({ item }) => (
                <FlatList
                data={addeditem}
                renderItem={({ item }) => (
                  <Pressable style={{
                    width: '100%',
                    height: 'auto',
                    backgroundColor: '#fffffff',
                    borderRadius: 5,
                    shadowColor: '#aba5a5c7',
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.1,
                    shadowRadius: 2,
                    elevation: 2,
                    marginHorizontal: 10,
                    marginVertical: 10,
                  }}>
                    <Text style={{
                      textAlign: 'center',
                      fontSize: 15,
                      fontWeight: 'bold',
                      color: '#4776db',
                      paddingTop: 20,
                    }}>{item.id} : {item.name}</Text>
                    <Image source={{ uri: item.image }} style={{ width: 'auto', height: 200, margin: 10 }} />
                    <Text style={{
                      textAlign: 'left',
                      fontSize: 12,
                      color: '#666666',
                      paddingVertical: 10,
                      marginLeft: 20
                    }}>Rating: {item.rating}</Text>
                    <Text style={{
                      textAlign: 'left',
                      fontSize: 12,
                      color: '#666666',
                      paddingVertical: 10,
                      marginLeft: 20
                    }}>{item.ingredients}</Text>
                    <GestureHandlerRootView style={{ alignItems: 'flex-end', marginHorizontal: 20 }}>
                      <TouchableOpacity style={{ backgroundColor: 'red', padding: 10, width: 130 }} onPress={() => removeItem(item)}>
                        <Text style={{ color: 'white' }}>Remove Item</Text>
                      </TouchableOpacity>
                    </GestureHandlerRootView>
                  </Pressable>
                )}
                keyExtractor={item => item.id.toString()} 
                numColumns={1}
              />
            )}
            numColumns={1}
            keyExtractor={item => item.id}
          />
        </GestureHandlerRootView>
      );
}

export default Cart;
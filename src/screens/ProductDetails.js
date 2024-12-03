import React from 'react';
import {View, Text, Image, Button} from 'react-native';
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from 'react-native-gesture-handler';

const ProductDetails = ({route}) => {
  const {product} = route.params;

  return (
    <View>
      <View
        style={{
          width: '100%',
          height: 100,
          backgroundColor: 'lightpink',
          borderBottomRightRadius: 50,
          borderBottomLeftRadius: 50,
        }}></View>
      <Image
        source={{uri: product.image}}
        style={{
          width: 200,
          height: 200,
          margin: 'auto',
          borderRadius: 100,
          marginTop: -50,
        }}
      />
      <Text style={{textAlign: 'center', fontSize: 30, marginVertical: 20}}>
        {product.name}{' '}
      </Text>

      <Text style={{textAlign: 'justify', marginHorizontal: 20}}>
        {product.description}
      </Text>
      <Text style={{fontSize: 20, color: '#000', marginLeft: 20}}>
        Raiting 4.5
      </Text>
      <Text style={{fontSize: 30, color: '#000', marginLeft: 20}}>
        {product.price}
      </Text>

      <View style={{flexDirection:'row',justifyContent:'space-between',margin:20,marginTop:50}}>
      <View style={{ width: '45%'}}>
        <Button title="Add To cart" />
      </View>
      <View style={{ width: '45%'}}>
        <Button title="Buy" />
      </View>
      </View>
    </View>
  );
};

export default ProductDetails;

import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import { useSelector } from "react-redux";

const ItemPrice = () => {
  const item = [
    {
      name: "Apple",
      price: 20,
    }
  ];

  const count = useSelector((state) => state.counter.value);

  
  const totalPrice = item[0].price * count;

  useEffect(() => {
    
    console.log(`Total price has been updated: ${totalPrice}`);
  }, [totalPrice]); 

  return (
    <View style={{marginTop:20,alignItems:'center'}}>
       <Image
        source={{ uri: 'https://www.sportswing.in/wp-content/uploads/2020/10/Flash-i30-Synthetic-Cricket-Ball.jpg' }} 
        style={{ width: 100, height: 100 }} 
      />
     <Text style={{ color: 'black' }}>Ball</Text>
     <Text style={{ color: 'black' }}>Count: {count}</Text>
      <Text style={{ color: 'black' }}>Price: Rs {totalPrice}</Text>
    </View>
  );
};

export default ItemPrice;

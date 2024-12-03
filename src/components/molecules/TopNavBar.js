import React from "react";
import { View , Text, Image } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

const TopNavBar =()=>{

    return (
        <>
         <View
      style={{
        backgroundColor: 'lightpink',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height:70,
        borderBottomEndRadius:25,
        borderBottomLeftRadius:25,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQULSeJ6vbRyxjnK57ujX5zy3cOtYC0P6TVww&s',
          }}
          style={{width: 35, height: 40}}
        />
        <Text style={{fontSize: 20, marginHorizontal: 15, fontWeight: 600}}>
          Qwerty
        </Text>
      </View>
      <View style={{flexDirection:'row'}}>
        <Icon name="notifications" size={25} style={{marginHorizontal:10}} />

        {/* <Icon name="shopping-cart" size={25} style={{marginHorizontal:10}} /> */}
      </View>
    </View>
        </>
    )
}

export default TopNavBar;
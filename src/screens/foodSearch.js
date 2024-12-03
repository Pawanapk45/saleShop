import React from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import FoodList from './foodList'
import { ScrollView } from "react-native-virtualized-view";

const FoodSearch = ()=>{

  const category = ['All','BreakFast','Dinner','Lunch','Drinks','Pizza','Burger','Veg','Non-Veg'];
  
  return(
    <>
   <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'#dbd1d1c7'}}>
     <View style={{alignItems:'start'}}>
     <Text style={{
      fontSize:25,
      color:'black',
      fontWeight:'bold',
      marginVertical:10,
      marginLeft:20,
      fontFamily:'lucida grande',
     }}>Hello , Petter</Text>
     </View>
     <View style={{flexDirection:'row'}}>
       {/* bell iconPart */}
       <Icon style={{marginRight:20, fontSize:25,marginTop:15}}  name='bell'/>
       <Icon style={{marginRight:20, fontSize:25,marginTop:15}}  name='shopping-cart'/>
     </View>
   </View>

  {/* search Input  */}
   <View style={{
    width:'90%',
    margin:'auto',
    
    marginVertical:20,
    flexDirection:'row'
   }}>
     <View style={{
      width:'85%'
     }}>
      <TextInput placeholder="Search Item..." style={{
        width:'100%',
        height:50,
        paddingHorizontal:10,
        backgroundColor:'#ffffff',
        borderRadius:10,
        marginLeft:10,
        backgroundColor:'#f5f5f5'
      }}/>
     </View>
     <View style={{
      backgroundColor:'#f5f5f5',
      borderRadius:10,
      width:'15%',
      alignItems:'center',
      justifyContent:'center',
     }}>
      <Icon   name='search' style={{
        backgroundColor:'#f5f5f5',
        borderRadius:10,
        padding:5,
        marginLeft:10,
        borderColor:'#f5f5f5',
        borderWidth:1,
        color:'#999999',
        fontSize:25,
       
      }}/>
     </View>
   </View>
   {/* categary  list */}
    <View>
      <Text style={{
        fontSize:25,
        color:'black',
        fontWeight:'bold',
        marginVertical:10,
        marginLeft:20,
        fontFamily:'lucida grande',
      }}>Category</Text>
      
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={{flexDirection:'row'}}>
        {category.map(category => (
          <View key={category}>
            <Text style={{
              backgroundColor:'#f5f5f5',
              borderRadius:10,
              padding:10,
              marginLeft:10,
              color:'#000',
              fontSize:20,
              textAlign:'center',
            }}>{category}</Text>
          </View>
        ))}
      </View>
      </ScrollView>
    </View>
   <FoodList />
  </>
  )
}

export default FoodSearch;
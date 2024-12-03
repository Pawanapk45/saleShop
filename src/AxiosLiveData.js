import React, { useEffect, useState } from "react";
import { View, Text,FlatList,StyleSheet } from "react-native";
import axios from "axios";

const ApiScreen = () => {
    const [data, setData] = useState([]);
   
    useEffect(() => {
        axios.get('http://127.0.0.1/users')
      .then(response => {
        setData(response.data); 
      })
      .catch(error => {
        console.error('Error fetching data:', error);   
      });
        
    }, []); 
   
    

    return (
        <>
         <FlatList
        data={data} 
        keyExtractor={item => item.id.toString()} 
        renderItem={({item}) => (
          <View style={{backgroundColor:'lightblue',marginVertical:15,padding:20}}>
            <Text style={styles.text}>{item.id}</Text>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>{item.email}</Text>
          </View>
         )} 
  
       
       />
    
        </>
    );
}

export default ApiScreen;

const styles = StyleSheet.create({
 text:{
     fontSize:18,
     fontWeight:'bold',
     marginHorizontal:10,
     color:'black'
 }

})

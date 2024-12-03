import React, { useEffect, useState } from "react";
import { View, Text,FlatList,StyleSheet } from "react-native";

const ApiScreen = () => {
    const [data, setData] = useState([]);
   
    useEffect(() => {
        
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error(error));
    }, []); 

    // const renderItem = ({ item }) => (
        
    //   );

    
    // const getApiData = async () => {
    //   const url = 'http://10.0.2.2:3000/users';
    //   let result = await fetch(url);
    //   result =await result.json();
    //   console.warn(result);
    // }
    // useEffect(()=>{
    //   getApiData();
    // })

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

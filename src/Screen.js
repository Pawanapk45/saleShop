import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


const Screen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity style={{backgroundColor:'lightblue',padding:15,margin:20}} onPress={() => navigation.navigate('NumCounter')}>
        <Text style={{color:'black'}}>Number Counter</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor:'lightblue',padding:15,margin:20}} onPress={() => navigation.navigate('TodoList')}>
        <Text style={{color:'black'}}>Todo List</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor:'lightblue',padding:15,margin:20}} onPress={() => navigation.navigate('From')}>
        <Text style={{color:'black'}}>Form</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor:'lightblue',padding:15,margin:20}} onPress={() => navigation.navigate('NumCounter')}>
        <Text style={{color:'black'}}>Food Order</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:'lightblue',padding:15,margin:20}} onPress={() => navigation.navigate('NoteItem')}>
        <Text style={{color:'black'}}>Notes Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor:'lightblue',padding:15,margin:20}} onPress={() => navigation.navigate('ApiScreen')}>
        <Text style={{color:'black'}}>Api Screen</Text>
      </TouchableOpacity>
     
      <TouchableOpacity style={{backgroundColor:'lightblue',padding:15,margin:20}} onPress={() => navigation.navigate('AxiosScreen')}>
        <Text style={{color:'black'}}>Axios Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor:'lightblue',padding:15,margin:20}} onPress={() => navigation.navigate('PostData')}>
        <Text style={{color:'black'}}>json Live Data</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor:'lightblue',padding:15,margin:20}} onPress={() => navigation.navigate('PostData')}>
        <Text style={{color:'black'}}>Post Data</Text>
      </TouchableOpacity>
    </View>

    
  );
};

export default Screen;
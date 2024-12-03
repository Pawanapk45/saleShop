import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';

const PostData = () => {
  const token = true; 
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [data, setData] = useState([]);

  const handleSubmit = async () => {
    try {
      console.log(name + " " + phone + " " + email);
      const url = 'https://http://192.168.237.191:3000/users';

      let result = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          name,
          phone,
          email,
        }),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!result.ok) {
        throw new Error(`HTTP error! status: ${result.status}`);
      }

      result = await result.json();

      if (result) {
        Alert.alert('Successfully, Data entered');
        setData([...data, result]); // Adding new result to data list
      }

    } catch (error) {
      Alert.alert('Error', `Something went wrong: ${error.message}`);
      console.error('Error:', error);
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <Text style={styles.title}>Post Data</Text>

      <TextInput
        placeholder='Name'
        value={name}
        onChangeText={text => setName(text)}
        style={styles.input}
      />
      <TextInput
        placeholder='Phone'
        value={phone}
        onChangeText={text => setPhone(text)}
        style={styles.input}
        keyboardType='phone-pad'
      />
      <TextInput
        placeholder='Email'
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>{item.phone}</Text>
            <Text style={styles.text}>{item.email}</Text>
          </View>
        )}
      />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    color: 'black',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  listItem: {
    backgroundColor: 'lightblue',
    marginVertical: 15,
    padding: 20,
  },
  text: {
    color: 'black',
    fontSize: 16,
  },
});

export default PostData;

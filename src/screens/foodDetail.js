import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';

const FoodDetails = ({ navigation, route }) => {
  const { item } = route.params; // get item from navigation params

  // Method to render each step
  const renderSteps = () => {
    return item.step.map((step, index) => (
      <Text key={index} style={{ fontSize: 15, textAlign: 'justify', marginVertical: 5 ,flex:1}}>
        {` ${index + 1}: ${step}`}
      </Text>
    ));
  };

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#f78da7',
    }}>
      <SafeAreaView style={{
        width: '90%',
        margin: 'auto',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 10,
      }}>
        <View>
          <GestureHandlerRootView>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name='arrow-circle-left' style={{
                fontSize: 30,
              }} />
            </TouchableOpacity>
          </GestureHandlerRootView>
        </View>
        <View>
          <Icon name='heart-o' style={{
            fontSize: 30,
          }} />
        </View>
      </SafeAreaView>
      <View style={{
        marginTop: 100,
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
      }}>
        <View style={{
          width: 250,
          height: 250,
          borderRadius: 100,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: -80,
        }}>
          <Image source={{ uri: item.image }} style={{ width: '80%', height: '80%', borderRadius: 100 }} />
        </View>
        <View style={{ position: 'absolute', flex: 1, top: 150 }}>
          <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: '700', marginVertical: 20 }}>{item.name}</Text>
          <ScrollView style={{ flex:1 }}>
            {renderSteps()} 
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

export default FoodDetails;

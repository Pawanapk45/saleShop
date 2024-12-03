import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
// import BottomTab from "../navigations/appNavigation/BottomNavigation";
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import CustomComponent from '../components/modals/Component';


const UserScreen = ({navigation}) => {
  const handleSignOut = () => {
    signOut();
  };

  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
  };

  const handlepress = () => {
    console.log('click press qwerty');
  };
  const CartList = () => {
    navigation.navigate('Cart')
  };
  const resetPassswordPress = () => {
    navigation.navigate('ResetPassword')
  }

  const CustomerServicesBtn = () => {
    navigation.navigate('CustomerServices')
  }

  return (
    <>
    <View style={{height:100,backgroundColor:'lightpink',marginTop:70,marginHorizontal:0,borderRadius:10,flexDirection:'row',elevation:10}}>
       <View>
         <Image
            source={{
              uri: 'https://i.pinimg.com/736x/f8/95/68/f895680161de0db0a97b631b1f72cd95.jpg',
            }}
            style={{width: 100, height: 100 ,borderRadius:50,marginTop:-50,marginHorizontal:20,elevation:10,borderColor:'lightpink',borderWidth:5}}
          />
       </View>
       <View style={{marginTop:20}}>
         <Text style={{fontSize:20,fontWeight:600}}>Name: {user.name}</Text>
         <Text style={styles.detail}>Email: {user.email}</Text>
         <Text style={styles.detail}>Phone: {user.phone}</Text>
       </View>
    </View>
      <CustomComponent textContent={'User Information'} onPress={handlepress} />
      <CustomComponent
        textContent={'Your Cart List'}
        iconName="shopping-cart"
        onPress={CartList}
      />
      <CustomComponent textContent={'Your Order'} iconName="shopping-bag" />
      <CustomComponent textContent={'Reset Password'} iconName="mobile-phone" onPress={resetPassswordPress} />
      <CustomComponent textContent={'Account Information'} iconName='bank'/>
      <CustomComponent textContent={'Customer Service'} iconName='phone-square' onPress={CustomerServicesBtn}/>
      <CustomComponent textContent={'Sign Out'} iconName='sign-out'/>
     
    </>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   // flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   padding: 20,
  // },
  // header: {
  //   fontSize: 24,
  //   fontWeight: 'bold',
  //   marginBottom: 20,
  // },
    detail: {
    fontSize: 14,
    marginBottom: 5,
    elevation:5,
  },
});

export default UserScreen;

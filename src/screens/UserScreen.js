import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, } from 'react-native';
import auth from '@react-native-firebase/auth';
import CustomComponent from '../components/modals/Component';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/featurs/authSlice/AuthSlice';

const UserScreen = ({ navigation }) => {
  const [userData, setUserData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedUserData = await AsyncStorage.getItem('userData');
        if (storedUserData) {
          setUserData(JSON.parse(storedUserData));
        }
      } catch (error) {
        console.error('Failed to load user data', error);
      }
    };

    fetchUserData();
  }, []);
  // const handleSignOut = async () => {
  //   try {
  //     const currentUser = auth().currentUser;

  //     if (currentUser) {
  //       await auth().signOut();
  //       await AsyncStorage.removeItem('userData'); // यूजर डेटा क्लियर करें
  //       Alert.alert('Success', 'You have been signed out.');
  //       navigation.reset({
  //         index: 0,
  //         routes: [{ name: 'LoginScreen' }],
  //       });
  //     } else {
  //       Alert.alert('Error', 'No user is currently signed in.');
  //     }
  //   } catch (error) {
  //     console.error('Sign-Out Error:', error);
  //     Alert.alert('Error', 'Failed to sign out. Please try again.');
  //   }
  // };

  const logOut = async () => {
    await AsyncStorage.removeItem('isLoggedIn');
    dispatch(logout());
  };
  return (
    <>
      <View
        style={{
          height: 100,
          backgroundColor: 'lightpink',
          marginTop: 70,
          marginHorizontal: 0,
          borderRadius: 10,
          flexDirection: 'row',
          elevation: 10,
        }}
      >
        <View>
          <Image
            source={{
              uri: 'https://i.pinimg.com/736x/f8/95/68/f895680161de0db0a97b631b1f72cd95.jpg',
            }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              marginTop: -50,
              marginHorizontal: 20,
              elevation: 10,
              borderColor: 'lightpink',
              borderWidth: 5,
            }}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          {/* यहां यूजर डेटा दिखाएं */}
          <Text style={{ fontSize: 20, fontWeight: 600 }}>
            Name: {userData?.displayName || 'Not Available'}
          </Text>
          <Text style={styles.detail}>
            Email: {userData?.email || 'Not Available'}
          </Text>
          {/* <Text style={styles.detail}>Phone: {userData?.phoneNumber || 'Not Available'}</Text> */}
          <Text style={[styles.detail,{fontSize:11,marginLeft:-20}]}>Id: {userData?.uid || 'Not Available'}</Text>
        </View>
      </View>
      <CustomComponent textContent={'User Information'} onPress={() => console.log('User Info Pressed')} />
      <CustomComponent textContent={'Your Cart List'} iconName="shopping-cart" onPress={() => navigation.navigate('Cart')} />
      <CustomComponent textContent={'Your Order'} iconName="shopping-bag" />
      <CustomComponent textContent={'Reset Password'} iconName="mobile-phone" onPress={() => navigation.navigate('ResetPassword')} />
      <CustomComponent textContent={'Account Information'} iconName="bank" />
      <CustomComponent textContent={'Customer Service'} iconName="phone-square" onPress={() => navigation.navigate('CustomerServices')} />
      <CustomComponent textContent={'Sign Out'} iconName="sign-out" onPress={logOut} />
    </>
  );
};

const styles = StyleSheet.create({
  detail: {
    fontSize: 14,
    marginBottom: 5,
    elevation: 5,
  },
});

export default UserScreen;

import React, { useEffect } from 'react';
import { Button, Alert, Text, View, TouchableOpacity } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth'; // Ensure you have this package installed

function GoogleSignIn({navigation}) {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '798438603522-mj5q584bhsnfr9khjgkt56omajrljfll.apps.googleusercontent.com', // Replace with your actual web client ID
    });
  }, []);

  async function onGoogleButtonPress() {
    try {
      // Check if the device supports Google Play services
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      
      // Get the user's ID token
      const { idToken } = await GoogleSignin.signIn();
      
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      
      // Sign in the user with the credential
      const userCredential = await auth().signInWithCredential(googleCredential);
      console.log('User signed in:', userCredential);
      Alert.alert('Success', `Welcome ${userCredential.user.displayName}`);
      
    } catch (error) {
      console.error(error);
      Alert.alert('Error', error.message);
    }
  }

  return (
    <>
    <TouchableOpacity onPress={()=> onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}>
      <Text style={{ fontSize: 18, padding: 10, backgroundColor: '#ddd', textAlign: 'center' }}>
        Login with Google
      </Text>
    </TouchableOpacity>

    <View>
      <Button onPress={()=> navigation.navigate('NumCounter')}/>
    </View>
    </>
  );
}

export default GoogleSignIn;

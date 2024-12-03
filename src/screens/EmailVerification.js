import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EmailVerification = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');

  const handleSendVerificationCode = async () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email!');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert('Error', 'Please enter a valid email!');
      return;
    }

    try {
      // Send verification email
      await auth().sendSignInLinkToEmail(email, {
        handleCodeInApp: true,
        url: 'https://your-app.firebaseapp.com', // Update with your app's URL
      });
      Alert.alert('Success', 'Verification email sent successfully!');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  const handleVerifyCode = async () => {
    if (!verificationCode) {
      Alert.alert('Error', 'Please enter the verification code!');
      return;
    }

    try {
      const credential = auth.EmailAuthProvider.credential(email, verificationCode);
      await auth().signInWithCredential(credential);

      Alert.alert('Success', 'Email verified successfully!');
      await AsyncStorage.setItem('isLoggedIn', 'true');

      navigation.reset({
        index: 0,
        routes: [{ name: 'ShomeHomeScreen' }],
      });
    } catch (error) {
      Alert.alert('Error', 'Invalid verification code!');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View>
          <Image
            source={require('../assests/images/waveup.png')}
            style={styles.waveLogo}
          />
        </View>
        <View>
          <Text style={styles.heading}>Email Verification</Text>
        </View>
        <View style={styles.inputContainer}>
          <Icon name="envelope" style={styles.inputIcon} />
          <TextInput
            placeholder="Enter Email"
            style={styles.userTextinput}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <TouchableOpacity style={styles.loginBtn} onPress={handleSendVerificationCode}>
          <Text style={styles.loginBtntxt}>Send Verification Code</Text>
        </TouchableOpacity>

        <View style={styles.inputContainer}>
          <Icon name="key" style={styles.inputIcon} />
          <TextInput
            placeholder="Enter Verification Code"
            style={styles.userTextinput}
            value={verificationCode}
            onChangeText={setVerificationCode}
            keyboardType="numeric"
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity style={styles.loginBtn} onPress={handleVerifyCode}>
          <Text style={styles.loginBtntxt}>Verify Code</Text>
        </TouchableOpacity>

        <View>
          <Image
            source={require('../assests/images/downWave.png')}
            style={styles.downWave}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  waveLogo: {
    width: '100%',
    height: 180,
  },
  heading: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#f78da7',
  },
  inputContainer: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    margin: 'auto',
    borderRadius: 20,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 4,
  },
  inputIcon: {
    fontSize: 30,
    marginHorizontal: 20,
    marginVertical: 15,
  },
  userTextinput: {
    fontSize: 18,
    flex: 1,
  },
  loginBtn: {
    backgroundColor: '#f78da7',
    width: '55%',
    margin: 'auto',
    marginTop: 10,
    borderRadius: 30,
  },
  loginBtntxt: {
    textAlign: 'center',
    fontSize: 20,
    color: '#ffffff',
    padding: 10,
    borderRadius: 100,
  },
  downWave: {
    width: '100%',
    height: 100,
  },
});

export default EmailVerification;

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

const ResetPassword = ({ navigation }) => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleResetPassword = async () => {
    if (!oldPassword || !newPassword || !confirmPassword) {
      Alert.alert('Error', 'Please fill all fields!');
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert('Error', 'New Password and Confirm Password do not match!');
      return;
    }

    if (newPassword.length < 6) {
      Alert.alert('Error', 'Password should be at least 6 characters long.');
      return;
    }

    try {
      const currentUser = auth().currentUser;

      if (currentUser) {
        const credential = auth.EmailAuthProvider.credential(
          currentUser.email,
          oldPassword
        );

        // Reauthenticate user
        await currentUser.reauthenticateWithCredential(credential);

        // Update password
        await currentUser.updatePassword(newPassword);
        Alert.alert('Success', 'Password reset successful!');
        navigation.navigate('Login');
      } else {
        Alert.alert('Error', 'No user is currently signed in!');
      }
    } catch (error) {
      Alert.alert('Error', error.message);
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
          <Text style={styles.heading}>Reset Password</Text>
        </View>

        <View style={styles.inputContainer}>
          <Icon name="lock" style={styles.inputIcon} />
          <TextInput
            placeholder="Old Password"
            style={styles.userTextinput}
            value={oldPassword}
            onChangeText={setOldPassword}
            secureTextEntry={true}
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="lock" style={styles.inputIcon} />
          <TextInput
            placeholder="New Password"
            style={styles.userTextinput}
            value={newPassword}
            onChangeText={setNewPassword}
            secureTextEntry={true}
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="lock" style={styles.inputIcon} />
          <TextInput
            placeholder="Confirm Password"
            style={styles.userTextinput}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity style={styles.loginBtn} onPress={handleResetPassword}>
          <Text style={styles.loginBtntxt}>Reset Password</Text>
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

export default ResetPassword;

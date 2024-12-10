import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';
import auth from '@react-native-firebase/auth';

const ForgotPasswordScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleForgotPassword = async () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email!');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address!');
      return;
    }

    setLoading(true);

    try {
      await auth().sendPasswordResetEmail(email);
      setLoading(false);
      Alert.alert(
        'Success',
        'A password reset link has been sent to your email. Please check your inbox.',
        [
          {
            text: 'OK',
            onPress: () => navigation.goBack(), // Navigate back to Login
          },
        ],
      );
    } catch (error) {
      setLoading(false);
      Alert.alert('Error', error.message);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View>
        <Image
          source={require('../assests/images/waveup.png')}
          style={styles.waveLogo}
        />
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.heading}>Forgot Password</Text>
        <Text style={styles.subText}>
          Enter your registered email to receive a password reset link.
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={text => setEmail(text)}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TouchableOpacity
          style={styles.resetButton}
          onPress={handleForgotPassword}
          disabled={loading}>
          <Text style={styles.resetButtonText}>
            {loading ? 'Sending...' : 'Send Reset Link'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backToLogin}>Back to Login</Text>
        </TouchableOpacity>
      </View>
     
     
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    
  },
  waveLogo: {
    width: '100%',
    height: 180,
  },
  
  innerContainer: {
    marginHorizontal: 20,
    alignItems: 'center',
    // marginVertical:80
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#f78da7',
  },
  subText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 15,
    borderRadius: 20,
    fontSize: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  resetButton: {
    backgroundColor: '#f78da7',
    paddingVertical: 15,
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backToLogin: {
    color: '#f78da7',
    fontSize: 16,
    marginTop: 20,
    textDecorationLine: 'underline',
  },
});

export default ForgotPasswordScreen;

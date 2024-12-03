import React, {useState} from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage'; // AsyncStorage इंपोर्ट करें
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill all fields!');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert('Error', 'Please enter a valid email!');
      return;
    }

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(async () => {
        Alert.alert('Success', 'Login Successful');
        await AsyncStorage.setItem('isLoggedIn', 'true');
        navigation.reset({
          index: 0,
          routes: [{name: 'ShomeHomeScreen'}],
        });
      })
      .catch(err => {
        Alert.alert('Error', err.message);
      });

    // if(email !=="apk@gmail.com") {
    //   Alert.alert("Error", "Invalid email!");
    //   return;
    // }
    // if(password !=="qwerty123") {
    //   Alert.alert("Error", "Wrong Password");
    //   return;
    // }

    // try {

    //   await AsyncStorage.setItem("isLoggedIn", "true");
    //   navigation.reset({
    //     index: 0,
    //     routes: [{ name: 'AppNavigation' }],
    //   });
    // } catch (error) {
    //   Alert.alert("Error", "Something went wrong. Please try again.");
    //   console.error("AsyncStorage Error:", error);
    // }
  };

  GoogleSignin.configure({
    offlineAccess: true,
    webClientId:
      '798438603522-mj5q584bhsnfr9khjgkt56omajrljfll.apps.googleusercontent.com',
  });

  // google prss btn function
  async function onGoogleButtonPress() {
    try {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});

      // Get the user's ID token
      const userInfo = await GoogleSignin.signIn();
      const {idToken} = userInfo;

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      await auth().signInWithCredential(googleCredential);

      // Login Successful Alert
      Alert.alert('Success', 'Login Successful with Google!');
      await AsyncStorage.setItem('isLoggedIn', 'true');

      // Navigate to Home Screen
      navigation.reset({
        index: 0,
        routes: [{name: 'ShomeHomeScreen'}],
      });
    } catch (error) {
      console.error('Google Sign-In Error:', error);
      Alert.alert(
        'Error',
        'Network Error: Please check your connection and try again.',
      );
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View>
          <Image
            source={require('../assests/images/waveup.png')}
            style={styles.waveLogo}
          />
        </View>
        <View>
          <Text style={styles.heading}>Welcome to QWERTY</Text>
        </View>
        <View>
          <View
            style={{
              borderBottomColor: '#4776db',
              borderBottomWidth: 5,
              width: '50%',
              alignItems: 'center',
              margin: 'auto',
            }}>
            <Text style={styles.Loginlogo}>Login</Text>
          </View>
          {/* <View
            style={{
              // borderBottomColor: '#4776db',
              // borderBottomWidth: 5,
              width: '70%',
              alignItems: 'center',
              margin: 'auto',
              flexDirection: 'row',
              justifyContent: 'center',
              marginVertical: 20,
            }}>
            <TouchableOpacity style={{marginHorizontal: 20}}>
              <Text style={{color: 'blue', fontSize: 20}}>Login by Email</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginHorizontal: 20}}>
              <Text style={{color: 'blue', fontSize: 20}}>Login by Phone</Text>
            </TouchableOpacity>
          </View> */}
          <View style={styles.inputContainer}>
            <Icon name="user" style={styles.inputIcon} />
            <TextInput
              placeholder="User Id / Email"
              style={styles.userTextinput}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <View style={styles.inputContainer}>
            <Icon name="lock" style={styles.inputIcon} />
            <TextInput
              placeholder="Password"
              style={styles.userTextinput}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.forgetpsdbox}>
            <TouchableOpacity>
              <Text style={styles.forgetPassword}>Forget Password</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
            <Text style={styles.loginBtntxt}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.loginBtntxt}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.socialBtn}
            onPress={() =>
              onGoogleButtonPress().then(() =>
                console.log('Signed in with Google!'),
              )
            }>
            <Icon name="google-plus" style={styles.googleIcon} />
            <Text style={styles.sociallogin}>Login with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialBtn}>
            <Icon name="facebook-official" style={styles.facebookIcon} />
            <Text style={styles.sociallogin}>Login with Facebook</Text>
          </TouchableOpacity>
          <View>
            <Image
              source={require('../assests/images/downWave.png')}
              style={styles.downWave}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  // Styles remain the same
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
  Loginlogo: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#4776db',
    textAlign: 'center',
    letterSpacing: 2,
    paddingBottom: 5,
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
    shadowOffset: {width: 0, height: 4},
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
  forgetpsdbox: {
    width: '80%',
    margin: 'auto',
    marginTop: 10,
  },
  forgetPassword: {
    textAlign: 'right',
    marginRight: 15,
    fontSize: 15,
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
  socialBtn: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    width: '75%',
    margin: 'auto',
    marginTop: 20,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 4,
    borderRadius: 20,
  },
  googleIcon: {
    color: 'red',
    fontSize: 30,
    marginHorizontal: 20,
    marginVertical: 15,
  },
  facebookIcon: {
    color: 'blue',
    fontSize: 30,
    marginHorizontal: 20,
    marginVertical: 15,
  },
  sociallogin: {
    fontSize: 18,
    color: 'gray',
    marginHorizontal: 20,
    marginVertical: 15,
  },
  downWave: {
    width: '100%',
    height: 100,
  },
});

export default Login;

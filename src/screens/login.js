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
  ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage'; // AsyncStorage इंपोर्ट करें
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore';
import { useDispatch } from 'react-redux';
import { login } from '../redux/featurs/authSlice/AuthSlice';
// import { getFirestore , collection, addDoc } from '@react-native-firebase/firestore';

const Login = ({navigation}) => {
   const [emailLogIn, setEmailLogin] = useState('');
  const [passwordLogIn, setPasswordLogin] = useState('');
  const [isEmailSignIn, setIsEmailSignIn] = useState(true);
  const [isEmailPhone, setIsEmailPhone] = useState(true);
  const [emailSignIn, setEmailSignIn] = useState('');
  const [passwordSignIn, setPasswordSignIn] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phPwd, setPhPwd] = useState('');
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
 
  const dispatch = useDispatch();
  const handleLogin = async () => {
    
    if (!emailLogIn || !passwordLogIn) {
      Alert.alert('Error', 'Please fill all fields!');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(emailLogIn)) {
      Alert.alert('Error', 'Please enter a valid email!');
      return;
    }

    setLoading(true); // start loading

    auth()
      .signInWithEmailAndPassword(emailLogIn, passwordLogIn)
      .then(async () => {
        const user = auth().currentUser;
        console.log('Logged in user data:', user);
        await AsyncStorage.setItem('userData', JSON.stringify(user));
      await AsyncStorage.setItem('isLoggedIn', 'true');
      dispatch(login(user));
      })
      .catch(err => {
        setLoading(false); 
        // Alert.alert('Error', err.message);
        Alert.alert('Error',"Invalid User");
      });
  };

  GoogleSignin.configure({
    offlineAccess: true,
    webClientId:
      '798438603522-mj5q584bhsnfr9khjgkt56omajrljfll.apps.googleusercontent.com',
  });

  // google prss btn function
  async function onGoogleButtonPress() {
    try {
      setLoading(true); // loading start
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
        routes: [{name: 'ShopHomeScreen'}],
      });
    } catch (error) {
      setLoading(false); // loading end
      console.error('Google Sign-In Error:', error);
      Alert.alert(
        'Error',
        'Network Error: Please check your connection and try again.',
      );
    }
  }

  const createUser = () => {
    auth()
      .createUserWithEmailAndPassword(emailSignIn, passwordSignIn)
      .then((userData) => {
        firestore()
      .collection('users')
      .doc(userData.user.uid)
      .set({
        name: name,
        email: emailSignIn,
        password:passwordSignIn,
        
      })
         AsyncStorage.setItem('userData', JSON.stringify(userData));

        console.log('User account created & signed in');
        Alert.alert('User created & signed in' + JSON.stringify(userData))
        console.log(JSON.stringify(userData))
        
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  //phone Auth code
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);

  // verification code (OTP - One-Time-Passcode)
  const [code, setCode] = useState('');

  const signInWithPhoneNumber = async phoneNumber => {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  };

  const confirmCode = async () => {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
    }
  };
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

        {loading ? (
          <ActivityIndicator
            size="large"
            color="#f78da7"
            style={styles.loader}
          />
        ) : (
          <View>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  borderBottomColor: isEmailSignIn ? 'lightpink' : 'grey',
                  borderBottomWidth: isEmailSignIn ? 3 : 0,
                  width: '30%',
                  alignItems: 'center',
                  margin: 'auto',
                }}>
                <TouchableOpacity onPress={() => setIsEmailSignIn(true)}>
                  <Text
                    style={[
                      styles.Loginlogo,
                      {color: isEmailSignIn ? 'lightpink' : 'gray'},
                    ]}>
                    Login
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  borderBottomColor: !isEmailSignIn ? 'lightpink' : 'grey',
                  borderBottomWidth: !isEmailSignIn ? 3 : 0,
                  width: '30%',
                  alignItems: 'center',
                  margin: 'auto',
                }}>
                <TouchableOpacity onPress={() => setIsEmailSignIn(false)}>
                  <Text
                    style={[
                      styles.Loginlogo,
                      {color: !isEmailSignIn ? 'lightpink' : 'gray'},
                    ]}>
                    Signin
                  </Text>
                </TouchableOpacity>
              </View>
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

            {/* login page inputs */}
            {isEmailSignIn ? (
              <>
                <View style={styles.inputContainer}>
                  <Icon name="user" style={styles.inputIcon} />
                  <TextInput
                    placeholder="User Id / Email"
                    style={styles.userTextinput}
                    value={emailLogIn}
                    onChangeText={(text)  => setEmailLogin(text)}
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Icon name="lock" style={styles.inputIcon} />
                  <TextInput
                    placeholder="Password"
                    style={styles.userTextinput}
                    value={passwordLogIn}
                    onChangeText={(text) => setPasswordLogin(text)}
                    // secureTextEntry={true}
                  />
                </View>
                <View style={styles.forgetpsdbox}>
                  <TouchableOpacity onPress={()=> navigation.navigate('ForgotPasswordScreen')}>
                    <Text style={styles.forgetPassword}>Forget Password</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
                  <Text style={styles.loginBtntxt}>Login</Text>
                </TouchableOpacity>
              </>
            ) : (
              //  <View
              //   style={{
              //     width: '70%',
              //     alignItems: 'center',
              //     margin: 'auto',
              //     flexDirection: 'row',
              //     justifyContent: 'center',
              //     marginVertical: 20,
              //   }}>
              //   <TouchableOpacity
              //     style={{marginHorizontal: 20}}
              //     onPress={() => setIsEmailPhone(true)}>
              //     <Text
              //       style={{
              //         color: isEmailPhone ? 'blue' : '#000',
              //         borderBottomWidth: isEmailPhone ? 3 : 0,
              //         fontSize: 20,
              //       }}>
              //       Sign in Email
              //     </Text>
              //   </TouchableOpacity>
              //   <TouchableOpacity
              //     style={{marginHorizontal: 20}}
              //     onPress={() => setIsEmailPhone(false)}>
              //     <Text
              //       style={{
              //         color: !isEmailPhone ? 'blue' : '#000',
              //         borderBottomWidth: !isEmailPhone ? 3 : 0,
              //         fontSize: 20,
              //       }}>
              //       Sign in Phone
              //     </Text>
              //   </TouchableOpacity>
              // </View>

              <View>
                <View style={styles.emailInputbox}>
                  <TextInput
                    style={styles.emailInput}
                    value={name}
                    onChangeText={(text) => setName(text)}
                    placeholder="Full Name"
                  />
                </View>
                <View style={styles.emailInputbox}>
                  <TextInput
                    style={styles.emailInput}
                    value={emailSignIn}
                    onChangeText={(text) => setEmailSignIn(text)}
                    placeholder="Enter Email Address"
                  />
                </View>
                <View style={styles.passwordInputbox}>
                  <TextInput
                    style={styles.passwordInput}
                    value={passwordSignIn}
                    secureTextEntry={true}
                    onChangeText={(text) => setPasswordSignIn(text)}
                    placeholder="Enter Password"
                  />
                </View>
                <TouchableOpacity
                  style={styles.signBtnbox}
                  onPress={createUser}>
                  <Text style={styles.signBtntxt}>Sign in</Text>
                </TouchableOpacity>
              </View>

              // phone  authorization

              //   <View style={styles.emailInputbox}>
              //     <TextInput
              //       style={styles.emailInput}
              //       value={phoneNumber}
              //       onChangeText={text => setPhoneNumber(text)}
              //       placeholder="Enter Phone Number"
              //     />
              //   </View>
              //   <TouchableOpacity
              //     style={styles.signBtnbox}
              //     onPress={() => {
              //       signInWithPhoneNumber();
              //       console.log('otp-sent');
              //     }}>
              //     <Text style={styles.signBtntxt}>Sign in</Text>
              //   </TouchableOpacity>
              // </>
            )}

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
        )}
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
  Loginlogo: {
    fontSize: 20,
    fontWeight: 'bold',
    // color: '#4776db',
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
  emailInputbox: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'start',
    width: '80%',
    margin: 'auto',
    borderRadius: 20,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 4,
  },
  emailInput: {
    fontSize: 18,
    marginLeft: 10,
  },
  phoneInputbox: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'start',
    width: '80%',
    margin: 'auto',
    borderRadius: 20,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 4,
  },
  PhoneInput: {
    fontSize: 18,
    marginLeft: 10,
  },
  passwordInputbox: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'start',
    width: '80%',
    margin: 'auto',
    borderRadius: 20,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 4,
  },
  passwordInput: {
    fontSize: 18,
    marginLeft: 10,
  },
  signBtnbox: {
    backgroundColor: '#f78da7',
    width: '55%',
    margin: 'auto',
    marginTop: 20,
    borderRadius: 30,
  },
  signBtntxt: {
    textAlign: 'center',
    fontSize: 20,
    color: '#ffffff',
    padding: 10,
    borderRadius: 100,
  },
  inputIcon: {
    fontSize: 25,
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

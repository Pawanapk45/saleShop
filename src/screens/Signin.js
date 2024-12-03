import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';

const SignIn = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailSignIn, setIsEmailSignIn] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phPwd , setPhPwd] = useState('');


  const createUser = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
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

  const  signInWithPhoneNumber = async phoneNumber => {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

 const confirmCode = async () => {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
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

        <View style={styles.signLogo}>
          <Text style={styles.signText}>Create Account</Text>
        </View>
        <View
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
          <TouchableOpacity
            style={{marginHorizontal: 20}}
            onPress={() => setIsEmailSignIn(true)}>
            <Text
              style={{
                color: isEmailSignIn ? 'blue' : '#000',
                borderBottomWidth: isEmailSignIn ? 3 : 0,
                fontSize: 20,
              }}>
              Sign in Email
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginHorizontal: 20}}
            onPress={() => setIsEmailSignIn(false)}>
            <Text
              style={{
                color: !isEmailSignIn ? 'blue' : '#000',
                borderBottomWidth: !isEmailSignIn ? 3 : 0,
                fontSize: 20,
              }}>
              Sign in Phone
            </Text>
          </TouchableOpacity>
        </View>

        {/* <View style={styles.nameInputbox}>
           <TextInput style={styles.nameInput}  placeholder="First Name"/>
        </View> */}

        {isEmailSignIn ? (
          <>
            <View style={styles.emailInputbox}>
              <TextInput
                style={styles.emailInput}
                value={email}
                onChangeText={text => setEmail(text)}
                placeholder="Enter Email Adress"
              />
            </View>

            {/* <View style={styles.phoneInputbox}>
         <TextInput style={styles.PhoneInput}  placeholder="Enter your Number" maxLength={10} keyboardType="number-pad"/>
      </View> */}

            <View style={styles.passwordInputbox}>
              <TextInput
                style={styles.passwordInput}
                value={password}
                secureTextEntry={true}
                onChangeText={text => setPassword(text)}
                placeholder="Enter Password"
              />
            </View>

            <TouchableOpacity
              style={styles.signBtnbox}
              onPress={() => createUser()}>
              <Text style={styles.signBtntxt}>Sign in</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <View style={styles.emailInputbox}>
              <TextInput
                style={styles.emailInput}
                value={phoneNumber}
                onChangeText={text => setPhoneNumber(text)}
                placeholder="Enter Phone Number"
              />
            </View>

            {/* <View style={styles.phoneInputbox}>
        <TextInput style={styles.PhoneInput}  placeholder="Enter your Number" maxLength={10} keyboardType="number-pad"/>
     </View> */}

            {/* <View style={styles.passwordInputbox}>
              <TextInput
                style={styles.passwordInput}
                value={phPwd}
                secureTextEntry={true}
                onChangeText={text => setPhPwd(text)}
                placeholder="Enter Password"
              />
            </View> */}

            <TouchableOpacity
              style={styles.signBtnbox}
              onPress={() => {signInWithPhoneNumber(),console.log("otp-sent")}}>
              <Text style={styles.signBtntxt}>Sign in</Text>
            </TouchableOpacity>
          </>
        )}
        <TouchableOpacity style={styles.socialBtn}>
          <Icon name="google-plus" style={styles.googleIcon} />
          <Text style={styles.sociallogin}>Sign with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialBtn}>
          <Icon name="facebook-official" style={styles.facebookIcon} />
          <Text style={styles.sociallogin}>Sign with Facebook</Text>
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
  signLogo: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#4776db',
    textAlign: 'center',
    letterSpacing: 2,
    paddingBottom: 10,
  },
  signText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#4776db',
    textAlign: 'center',
    letterSpacing: 2,
    paddingBottom: 10,
    borderBottomColor: '#4776db',
    borderBottomWidth: 2,
    width: '80%',
    margin: 'auto',
  },
  nameInput: {
    flexDirection: 'row',
    width: '45%',
  },
  nameInputbox: {
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
  nameInput: {
    fontSize: 18,
    marginLeft: 10,
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
    padding: 15,
    borderRadius: 100,
  },
  goggleIcon: {
    color: 'red',
    fontSize: 30,
    marginHorizontal: 20,
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
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
    justifyContent: 'center',
    alignItems: 'center',
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  downWave: {
    width: '100%',
    height: 100,
  },
});

export default SignIn;


// import React from 'react';
// import { View, Text, Image, Button,StyleSheet } from 'react-native';
// import { TouchableOpacity , GestureHandlerRootView} from 'react-native-gesture-handler';
// import Logo from '../assests/images/images.png';

// function DetailsScreen({ navigation }) {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen</Text>
//         <Button
//           title="Go to Details... again"
//           onPress={() => navigation.navigate('Details')}
//         />
//       </View>
//     );
//   }
// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Image source={Logo}/>
//       <Text>First Home screen</Text>

//       <View style={{margin:10}}>
//       <Button
//         title="Log In"
//         onPress={() => navigation.navigate('Log in')}/>
//       </View>

//       <View style={{margin:10}}>
//       <Button
//         title="Sin In" style={StyleSheet.regbtn}
//         onPress={() => navigation.navigate('Sign In')}/>
//       </View>


//       <GestureHandlerRootView style={styles.container}>
//       <TouchableOpacity style={styles.regbtn} onPress={() => navigation.navigate('Login')}>
//         <Text style={{color:'white',fontSize:25,}}>Log In</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.regbtn} onPress={() => navigation.navigate('Signin')}>
//         <Text style={{color:'white',fontSize:25,}}>Sign In</Text>
//       </TouchableOpacity>
//     </GestureHandlerRootView>

     
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   regbtn: {
//     backgroundColor: 'lightblue',
//     padding: 10,
//     borderRadius: 8,
//     margin:20,
//   },
// });

// export default HomeScreen;



import { GestureHandlerRefContext } from '@react-navigation/stack';
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = ({navigation}) => {
  return (
    <LinearGradient colors={['#020228','#162f85','#7238b1','#135fc3']} style={styles.linearGradient}>
      <View style={styles.Applogo}>
        <Text style={styles.Applogotext}>QWERTY Restaurant</Text>
        <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam soluta ipsum provident recusandae tempore quod esse accusantium iure est.</Text>
        
        <View style={styles.startBtn}>
          <Button title='Get Started...' onPress={()=> navigation.navigate('Login')}/>
        </View>
      </View>
      {/* <View>
        <Text>The way a song is performed can greatly affect its impact. </Text>
      </View> */}
     
    </LinearGradient>
  );
};

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    
  },
  Applogo:{
    position:'relative',
    top:300,
    alignItems: 'center',

  },
  Applogotext:{
    fontSize:35,
    fontWeight:'bold',
    color:'#ffffff',
  },
  text:{
    color:'#ffffff',
    marginTop:20,
    fontSize:18,
    textAlign:'center',
    fontFamily:'Helvetica',
    letterSpacing:3,
    fontFamily:'CedarvilleCursive-Regular',
  },
  startBtn:{
    backgroundColor:'#ffffff',
  },
  startLogin:{
    color:'#ffffff',
    fontSize:30,
  },
  startBtn:{
    marginTop:20,
    backgroundColor:'#135fc3',
   
  }
});

export default HomeScreen;

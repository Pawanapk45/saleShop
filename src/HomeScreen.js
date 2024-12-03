// import {View, Text, TouchableOpacity, Alert} from 'react-native';
// import React, {useEffect} from 'react';
// import {useNavigation} from '@react-navigation/native';
// import messaging from '@react-native-firebase/messaging';
// import notifee, {AndroidImportance, EventType} from '@notifee/react-native';

// const HomeScreen = () => {
//   const navigation = useNavigation();

  // useEffect(() => {
  //   getFcmToken();
  // }, []);
  // const getFcmToken = async () => {
  //   const token = await messaging().getToken();
  //   console.log('myToken: ' + token);
  // };
//   useEffect(() => {
//     const unsubscribe = messaging().onMessage(async remoteMessage => {
//       const {title, body} = remoteMessage.notification;
// console.log("message received:"+title)
//       displayNotification(title, body);
//     });
//     return unsubscribe;
//   }, []);

  // const displayNotification = async (title, body) => {
  //   await notifee.requestPermission();

  //   const channelId = await notifee.createChannel({
  //     id: 'default',
  //     name: 'Default Channel',
  //     vibration: true,
  //     importance: AndroidImportance.HIGH,
  //     vibrationPattern: [300, 500],
  //   });

  //   await notifee.displayNotification({
  //     title: title,
  //     body: body,
  //     android: {
  //       channelId,
  //       importance: AndroidImportance.HIGH,
  //       pressAction: {
  //         id: 'default',
  //       },
  //     },
  //   });
  // };

  // return (
  //   <View
  //     style={{
  //       flex: 1,
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       backgroundColor: 'white',
  //     }}>
  //     <TouchableOpacity
  //       onPress={() => {
  //         navigation.navigate('NotificationScreen');
  //       }}>
  //       <Text style={{color: 'black'}}>HomeScreen</Text>
  //     </TouchableOpacity>

      

  //   </View>
  // );
// };

// export default HomeScreen;

import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import messaging from '@react-native-firebase/messaging';
import notifee, {AndroidImportance,AndroidStyle , EventType} from '@notifee/react-native';
import SignIn from './SignIn';
import NotificationScreen from './NotificationScreen';
import NumCounter from './NumCounter';

  
const HomeScreen = () => {

const navigation = useNavigation();

  const getFcmToken = async () =>{
    const token = await messaging().getToken();
    console.log('myToken: '+token);
  }

  useEffect(()=>{
    getFcmToken();
  },[]);

 useEffect(()=>{
  const unsubscribe = messaging().onMessage(async remoteMessage =>{
    const {title ,body} = remoteMessage.notification;
    console.log("message received:"+title)
    displayingNotification(title,body);
  })
  return unsubscribe;
 },[])
  
  const displayingNotification = async (title,body) =>{
    await notifee.requestPermission(title,body);
    const channalId = await notifee.createChannel({
      id: 'messages',
      name: 'Private Messages',
      badge: false, // disable in badges
    });
    await notifee.displayNotification({
      title:'<p style="background-color:#4caf50color: #4caf50;"><b>Zoomato</span></p></b></p> &#128576; ',
      body: '30% discount',
      subtitle: '&#129395;',
      android: {
        channelId: channalId,
        importance: AndroidImportance.HIGH,
        style: { type: AndroidStyle.BIGPICTURE, picture: 'https://w7.pngwing.com/pngs/692/99/png-transparent-hamburger-street-food-seafood-fast-food-delicious-food-salmon-with-vegetables-salad-in-plate-leaf-vegetable-food-recipe-thumbnail.png' },
        // smallIcon: 'name-of-a-small-icon',
        pressAction: {
          id: 'default',
        },
      },
    })
  }
 
  // const displayingNotification = async (title,body) =>{
  //   await notifee.requestPermission(title,body);
  //   const channalId = await notifee.createChannel({
  //     id: 'default',
  //     name: 'Default Channel',
  //     vibration: true,
  //     importance: AndroidImportance.HIGH,
  //     vibrationPattern: [300, 500],
  //   });
  //   await notifee.displayNotification({
  //     title: 'Sarah Lane',
  //     body: 'Great thanks, food later?',
  //     android: {
  //       channelId:channalId,
  //       style: {
  //         type: AndroidStyle.MESSAGING,
  //         person: {
  //           name: 'John Doe',
  //           icon: 'https://static.vecteezy.com/system/resources/previews/024/226/462/non_2x/happy-anime-boy-logo-vector.jpg',
  //         },
  //         messages: [
  //           {
  //             text: 'Hey, how are you?',
  //             timestamp: Date.now() - 600000, // 10 minutes ago
  //           },
  //           {
  //             text: 'Great thanks, food later?',
  //             timestamp: Date.now(), // Now
  //             person: {
  //               name: 'Sarah Lane',
  //               icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg0mu9o7Zj_jche2kSZboVmrL3A9DEdiQTJA&s',
  //             },
  //           },
  //         ],
  //       },
  //     },
  //   });
  // }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
     <TouchableOpacity
        onPress={() => 
         navigation.navigate('NumCounter')
        }
        style={{ padding: 20, backgroundColor: '#ddd', borderRadius: 5 }}
      >
        <Text style={{ color: 'black' }}>Go to Notification Screen</Text>
      </TouchableOpacity>

      

    </View>
  );
}

export default HomeScreen;
// EE775033474IN
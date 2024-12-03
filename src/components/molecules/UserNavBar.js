import React from 'react';
import {View, Text, Image} from 'react-native';
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Coins from 'react-native-vector-icons/FontAwesome6';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectCartCount} from '../../redux/featurs/cartSlice/CartSliceProduct';
import BackIcon from 'react-native-vector-icons/Ionicons';
import { DrawerActions } from '@react-navigation/native';
const UserNavBar = ({ showUserInfo = true,goBack=false, mgBottom=0}) => {
  const navigation = useNavigation();
  const cartCount = useSelector(selectCartCount);

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 70,
        borderBottomEndRadius: 25,
        borderBottomLeftRadius: 25,
        backgroundColor: 'lightpink',
        marginBottom: mgBottom,
      }}>
        
      {showUserInfo && (
        <View
        //  user name part 
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}>
            <View style={{marginRight:10,}}>
          <TouchableOpacity  onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
           <Icon name="menu" size={30} />
          </TouchableOpacity>
        </View>
          <Image
            source={{
              uri: 'https://i.pinimg.com/736x/f8/95/68/f895680161de0db0a97b631b1f72cd95.jpg',
            }}
            style={{width: 40, height: 40 ,borderRadius:50}}
          />
          <View style={{marginLeft: 10, alignContent: 'flex-start'}}>
            <Text style={{fontSize: 10}}>Hello, Welcome</Text>
            <Text style={{fontSize: 20, fontWeight: '600'}}>Prince</Text>
          </View>
      </View>
      )}
      {goBack && (
        <TouchableOpacity
          style={{
            // backgroundColor: '#fff',
            // paddingHorizontal: 3,
            // paddingVertical: 6,
            // borderRadius: 50,
            // marginHorizontal: 5,
          }}
          onPress={() => navigation.goBack()}>
          <BackIcon name="arrow-back-circle" size={35} style={{marginHorizontal: 20}} />
 
        </TouchableOpacity>
      )}
      <View style={{flexDirection: 'row', marginRight: 20}}>
        <View>
          <GestureHandlerRootView style={{flexDirection: 'row'}}>
            {/* <TouchableOpacity
              style={{
                backgroundColor: '#fff',
                paddingHorizontal: 3,
                paddingVertical: 6,
                borderRadius: 50,
                marginHorizontal: 5,
              }}>
              <Coins name="coins" size={25} style={{marginHorizontal: 5}} />
            </TouchableOpacity> */}
            <TouchableOpacity
              onPress={() => navigation.navigate('SearchResultsScreen')}
              style={{
                backgroundColor: '#fff',
                paddingHorizontal: 3,
                paddingVertical: 6,
                borderRadius: 50,
                marginHorizontal: 5,
              }}>
              <Icon name="search" style={{marginHorizontal: 5}} size={25} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('Cart')}
              style={{
                backgroundColor: '#fff',
                paddingHorizontal: 3,
                paddingVertical: 6,
                borderRadius: 50,
                marginHorizontal: 5,
              }}>
              <View style={{position: 'relative'}}>
                <Icon
                  name="shopping-cart"
                  size={25}
                  style={{marginHorizontal: 5}}
                />
              </View>
              {cartCount > 0 && (
                <View
                  style={{
                    position: 'absolute',
                    backgroundColor: 'lightblue',
                    borderRadius: 10,
                    padding:3,
                    top: -10,
                    right: 3,
                    minWidth: 20,
                    alignItems: 'center',
                  }}>
                  <Text style={{color: '#000', fontSize: 12,fontWeight:'800'}}>{cartCount}</Text>
                </View>
              )}
            </TouchableOpacity>
          </GestureHandlerRootView>
        </View>
      </View>
    </View>
  );
};

export default UserNavBar;

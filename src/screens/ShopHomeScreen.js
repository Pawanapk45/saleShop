import React from 'react';
import {View, Text, Image, TextInput, Alert, TouchableOpacity} from 'react-native';
import {Provider} from 'react-redux';
import store from '../redux/Store';
import TopNavBar from '../components/molecules/TopNavBar';
import UserNavBar from '../components/molecules/UserNavBar';
import SearchBar from '..//components/molecules/SearchBar';
import CategoriesList from '..//components/molecules/CategoriesList';
import SlideShowCate from '../components/molecules/SlideShowCate';
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';
import SaleOffer from '../components/molecules/SaleOffer';
import UserAddress from '../components/molecules/UserAddress';
import Icon from 'react-native-vector-icons/Entypo';
import CustomComponent from '../components/modals/Component';

const ShomeHomeScreen = ({keyPress= console.log('btn press')}) => {
  return (
    <Provider store={store}>
      <>
        {/* <TopNavBar /> */}
        {/* <UserAddress/> */}
        <UserNavBar />
        {/* <CustomComponent textContent="my name is khan"/> */}
        {/* <SearchBar/>? */}
        <GestureHandlerRootView style={{flex: 1, marginTop: 20}}>
          <ScrollView>
            <SlideShowCate />
            <CategoriesList />
            <SaleOffer />
          </ScrollView>
        </GestureHandlerRootView>
      </>
    </Provider>
  );
};

export default ShomeHomeScreen;

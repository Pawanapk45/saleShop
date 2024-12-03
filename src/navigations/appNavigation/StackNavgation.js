import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ShomeHomeScreen from '../../screens/ShopHomeScreen';
import CategoriesPart from '../../screens/CategoriePart';
import AddProduct from '../../screens/AddProuct';
import CatScreen from '../../screens/CartScreen';
import ProductScreen from '../../screens/ProductScreen';
import ProductDetails from '../../screens/ProductDetails';
import BuyItemScreen from '../../screens/BuyItemScreen';
import UserScreen from '../../screens/UserScreen';
import SearchResultsScreen from '../../screens/SearchResultsScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomTab from './BottomNavigation';
import ResetPassword from '../../screens/ResetPassword';
import CustomerServices from '../../screens/CustomerServices';


const Stack = createNativeStackNavigator();

function StackNavigation() {
    return (
      <Stack.Navigator initialRouteName="Home"
        screenOptions={{
        headerShown: true,
        tabBarStyle: { display: 'flex' }  
      }}>
        <Stack.Screen
          name="BottomTabs"
          component={BottomTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="AddProduct" component={AddProduct} options={{ headerShown: false }} />
        <Stack.Screen name="ProductScreen" component={ProductScreen} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name="BuyItemScreen" component={BuyItemScreen} />
        <Stack.Screen name="CategoriesPart" component={CategoriesPart} options={{ headerShown: false }} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ headerShown: false }} />
        <Stack.Screen name="CustomerServices" component={CustomerServices} options={{ headerShown: false }} />
        <Stack.Screen
          name="SearchResultsScreen"
          component={SearchResultsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }
  export default StackNavigation;
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ShomeHomeScreen from '../../screens/ShopHomeScreen';
import CategoriesPart from '../../screens/CategoriePart';
import AddProduct from '../../screens/AddProuct';
import CatScreen from '../../screens/CartScreen';
import ProductScreen from '../../screens/ProductScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProductDetails from '../../screens/ProductDetails';
import BuyItemScreen from '../../screens/BuyItemScreen';
import UserScreen from '../../screens/UserScreen';
import SearchResultsScreen from '../../screens/SearchResultsScreen';

// Drawer Navigator
const Drawer = createDrawerNavigator();

// Stack Navigator
const Stack = createStackNavigator();

// Bottom Tab Navigator
const Tab = createBottomTabNavigator();

// Bottom Tabs (for example: Home and Profile)
function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ShomeHomeScreen" component={ShomeHomeScreen} />
      <Tab.Screen name="CategoriesPart" component={CategoriesPart} />
      <Tab.Screen name="CartScreen" component={CatScreen}/>
      <Tab.Screen name="UserScreen" component={UserScreen} />
    </Tab.Navigator>
  );
}

// Stack Navigator with Tabs inside it
function StackNavigation() {
  return (
    <Stack.Navigator initialRouteName="Home">
  <Stack.Screen
    name="ShomeHomeScreen"
    component={ShomeHomeScreen}
    options={{headerShown: false}}
  />
  <Stack.Screen
    name="CategoriesPart"
    component={CategoriesPart}
    options={{headerShown: false}}
  />
  <Stack.Screen
    name="AddProduct"
    component={AddProduct}
    options={{headerShown: false}}
  />
  <Stack.Screen
    name="CartScreen"
    component={CatScreen}
    options={{headerShown: false}}
  />
  <Stack.Screen name="ProductScreen" component={ProductScreen} />
  <Stack.Screen name="ProductDetails" component={ProductDetails} />
  <Stack.Screen name="BuyItemScreen" component={BuyItemScreen} />
  <Stack.Screen name="UserScreen" component={UserScreen} />
 
</Stack.Navigator>

  );
}

// Drawer Navigator wrapping Stack Navigation
export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={StackNavigation} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

//  <Stack.Navigator initialRouteName="Home">
//   <Stack.Screen
//     name="ShomeHomeScreen"
//     component={ShomeHomeScreen}
//     options={{headerShown: false}}
//   />
//   <Stack.Screen
//     name="CategoriesPart"
//     component={CategoriesPart}
//     options={{headerShown: false}}
//   />
//   <Stack.Screen
//     name="AddProduct"
//     component={AddProduct}
//     options={{headerShown: false}}
//   />
//   <Stack.Screen
//     name="CartScreen"
//     component={CatScreen}
//     options={{headerShown: false}}
//   />
//   <Stack.Screen name="ProductScreen" component={ProductScreen} />
//   <Stack.Screen name="ProductDetails" component={ProductDetails} />
//   <Stack.Screen name="BuyItemScreen" component={BuyItemScreen} />
//   <Stack.Screen name="UserScreen" component={UserScreen} />
//   <Stack.Screen
//     name="SearchResultsScreen"
//     component={SearchResultsScreen}
//     options={{headerShown: false}}
//   />
// </Stack.Navigator>

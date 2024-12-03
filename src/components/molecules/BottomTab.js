import React from 'react';
import {View, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ShomeHomeScreen from '../../screens/ShopHomeScreen';
import CategoriesPart from '../../screens/CategoriePart';
import AddProduct from '../../screens/AddProuct';
import CatScreen from '../../screens/CartScreen';

const BottomTab = () => {
  const TabNav = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <TabNav.Navigator>
        <TabScreen.Screen
          name="ShomeHomeScreen"
          component={ShomeHomeScreen}
          options={{headerShown: false}}
        />
        <TabScreen.Screen name="CategoriesPart" component={CategoriesPart} />
        <TabScreen.Screen name="AddProduct" component={AddProduct} />
        <TabScreen.Screen name="CartScreen" component={CatScreen} />
      </TabNav.Navigator>
    </NavigationContainer>
  );
};
export default BottomTab;

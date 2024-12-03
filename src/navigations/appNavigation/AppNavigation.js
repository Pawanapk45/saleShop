// import React from "react";
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import ShomeHomeScreen from "../../screens/ShopHomeScreen";
// import CategoriesPart from "../../screens/CategoriePart";
// import AddProduct from "../../screens/AddProuct";
// import CatScreen from "../../screens/CartScreen";
// import ProductScreen from "../../screens/ProductScreen";
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
// import ProductDetails from "../../screens/ProductDetails";
// import BuyItemScreen from "../../screens/BuyItemScreen";
// import UserScreen from "../../screens/UserScreen";
// import SearchResultsScreen from "../../screens/SearchResultsScreen";

// const AppNavigation =()=>{
//     const BottomTab = createBottomTabNavigator();
//     const Drawer = createDrawerNavigator();

//     return(
        
//         <NavigationContainer>
//             <Stack.Navigator initialRouteName="Home">
//                 <Stack.Screen name="ShomeHomeScreen" component={ShomeHomeScreen} options={{  headerShown: false}} />
//                 <Stack.Screen name="CategoriesPart" component={CategoriesPart} options={{ headerShown: false }}/>
//                 <Stack.Screen name="AddProduct" component={AddProduct} options={{ headerShown: false }}/>
//                 <Stack.Screen name="CartScreen" component={CatScreen}  options={{ headerShown: false }}/>
//                 <Stack.Screen name="ProductScreen" component={ProductScreen}/>
//                 <Stack.Screen name="ProductDetails" component={ProductDetails}/>
//                 <Stack.Screen name="BuyItemScreen" component={BuyItemScreen}/>
//                 <Stack.Screen name="UserScreen" component={UserScreen}/>
//                 <Stack.Screen name="SearchResultsScreen" component={SearchResultsScreen} options={{ headerShown: false }}/>
//             </Stack.Navigator>
//             {/* <Drawer.Navigator>
//                 <Drawer.Screen name="ShomeHomeScreen" component={ShomeHomeScreen}/>
//             </Drawer.Navigator> */}
//         </NavigationContainer>

//     //     <NavigationContainer>
//     //     <BottomTab.Navigator initialRouteName="ShomeHomeScreen">
//     //       <BottomTab.Screen 
//     //         name="Home" 
//     //         component={ShomeHomeScreen} 
//     //         options={{ headerShown: false }} 
//     //       />
//     //       <BottomTab.Screen 
            
//     //         name="Categories" 
//     //         component={CategoriesPart} 
//     //       />
          
//     //       <BottomTab.Screen 
//     //         name="Cart" 
//     //         component={CatScreen} 
//     //       />
//     //     </BottomTab.Navigator>
//     //   </NavigationContainer>
//     )
// }

// const Stack = createNativeStackNavigator();

// export default AppNavigation;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import UserIcon from 'react-native-vector-icons/AntDesign';
import SettingIcon from 'react-native-vector-icons/Feather';
import SignOutIcon from 'react-native-vector-icons/MaterialIcons';
import StackNavigation from './StackNavgation';
import CatScreen from '../../screens/CartScreen';
import UserScreen from '../../screens/UserScreen';

const Drawer = createDrawerNavigator();

// Custom Drawer Content
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      {/* Drawer Header */}
      <View style={styles.drawerHeader}>
        <Image
          source={{ uri: 'https://i.pinimg.com/736x/f8/95/68/f895680161de0db0a97b631b1f72cd95.jpg' }} // Placeholder Profile Image
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.userName}>John Doe</Text>
          <Text style={styles.userEmail}>John@gmail.com</Text>
        </View>
      </View>

      {/* Drawer Items */}
      <DrawerItemList {...props} />

      {/* Drawer Bottom Section */}
      <View style={styles.bottomDrawerSection}>
        <DrawerItem
          label="Settings"
          icon={({ color, size }) => <SettingIcon name="settings" size={size} color={color} />}
          onPress={() => alert('Settings Screen')} // इसे Settings स्क्रीन पर नेविगेट करें
        />
        <DrawerItem
          label="Sign Out"
          icon={({ color, size }) => <SignOutIcon name="logout" size={size} color={color} />}
          onPress={() => alert('Signing Out...')} // Sign Out का लॉजिक यहां जोड़ें
        />
      </View>
    </DrawerContentScrollView>
  );
}

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <CustomDrawerContent {...props} />} // Custom Drawer Content
        screenOptions={{
          headerShown: false,
          drawerStyle: styles.drawerStyle,
          drawerLabelStyle: styles.drawerLabelStyle,
          drawerActiveTintColor: 'white',
          drawerInactiveTintColor: 'gray',
          drawerActiveBackgroundColor: 'lightpink',
          height:'100%',
        }}
      >
        <Drawer.Screen
          name="Home"
          component={StackNavigation}
          options={{
            drawerIcon: ({ color, size }) => <Icon name="home-outline" size={size} color={color} />,
          }}
        />
        <Drawer.Screen
          name="Cart"
          component={CatScreen}
          options={{
            drawerIcon: ({ color, size }) => <Icon name="cart-outline" size={size} color={color} />,
          }}
        />
        <Drawer.Screen
          name="User"
          component={UserScreen}
          options={{
            drawerIcon: ({ color, size }) => <UserIcon name="user" size={size} color={color} />,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// Styles
const styles = {
  drawerHeader: {
    padding: 10,
    backgroundColor: 'lightpink',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: -5,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    elevation: 5,
    height: 80,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 40,
    marginBottom: 10,
    marginLeft: 10,
    borderColor: 'white',
    borderWidth: 2,
    marginTop: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  userEmail: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  drawerStyle: {
    backgroundColor: 'white',
    width: 280,
  },
  drawerLabelStyle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomDrawerSection: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    
  },
};

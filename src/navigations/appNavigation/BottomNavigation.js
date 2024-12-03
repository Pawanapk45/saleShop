// import React, { useState, useEffect } from "react";
// import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 
// import { useNavigation, useRoute } from "@react-navigation/native"; 

// const BottomTab = () => {
//   const [selectedTab, setSelectedTab] = useState("Home");
//   const navigation = useNavigation(); 
//   const route = useRoute(); 

//   useEffect(() => {
//     if (route.name === "ShomeHomeScreen") {
//       setSelectedTab("Home");
//     } else if (route.name === "Categories") {
//       setSelectedTab("Categories");
//     } else if (route.name === "CartScreen") {
//       setSelectedTab("Cart");
//     } else if (route.name === "UserScreen") {
//       setSelectedTab("User");
//     }
//   }, [route]); 

//   return (
//     <View style={styles.container}>
//       {/* Home Tab */}
//       <TouchableOpacity
//         style={[styles.tab, selectedTab === "Home" && styles.selectedTab]}
//         onPress={() => {
//           setSelectedTab("Home"); // Update selected tab to "Home"
//           navigation.navigate('ShomeHomeScreen'); // Navigate to ShomeHomeScreen
//         }}
//       >
//         <Icon name="home" size={30} color={selectedTab === "Home" ? "#000" : "#888"} />
//         <Text style={[styles.tabText, selectedTab === "Home" && styles.selectedTabText]}>Home</Text>
//       </TouchableOpacity>

//       {/* Categories Tab */}
//       <TouchableOpacity
//         style={[styles.tab, selectedTab === "Categories" && styles.selectedTab]}
//         onPress={() => {
//           setSelectedTab("Categories");
//           navigation.navigate('SearchResultsScreen'); // Navigate to Categories
//         }}
//       >
//         <Icon name="view-list" size={30} color={selectedTab === "Categories" ? "#000" : "#888"} />
//         <Text style={[styles.tabText, selectedTab === "Categories" && styles.selectedTabText]}>Categories</Text>
//       </TouchableOpacity>

//       {/* Cart Tab */}
//       <TouchableOpacity
//         style={[styles.tab, selectedTab === "Cart" && styles.selectedTab]}
//         onPress={() => {
//           setSelectedTab("Cart");
//           navigation.navigate('CartScreen'); // Navigate to CartScreen
//         }}
//       >
//         <Icon name="cart" size={30} color={selectedTab === "Cart" ? "#000" : "#888"} />
//         <Text style={[styles.tabText, selectedTab === "Cart" && styles.selectedTabText]}>Cart</Text>
//       </TouchableOpacity>

//       {/* User Tab */}
//       <TouchableOpacity
//         style={[styles.tab, selectedTab === "User" && styles.selectedTab]}
//         onPress={() => {
//           setSelectedTab("User");
//           navigation.navigate('UserScreen'); // Navigate to UserScreen
//         }}
//       >
//         <Icon name="account" size={30} color={selectedTab === "User" ? "#000" : "#888"} />
//         <Text style={[styles.tabText, selectedTab === "User" && styles.selectedTabText]}>User</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     height: 60,
//     alignItems: "center",
//     justifyContent: "space-around",
//     backgroundColor: "#f8f8f8",
//     borderTopWidth: 1,
//     borderColor: "#ddd",
//   },
//   tab: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   tabText: {
//     fontSize: 12,
//     color: "#888",
//     marginTop: 5, // Adds space between icon and text
//   },
//   selectedTab: {
//     borderTopWidth: 3,
//     borderColor: "#000",
//   },
//   selectedTabText: {
//     color: "#000", // Highlight selected tab text
//   },
// });

// export default BottomTab;


// tab Navigation
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // सही import
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

 const Tab = createBottomTabNavigator();


function BottomTabs() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Cart') {
          iconName = focused ? 'cart' : 'cart-outline';
        } else if (route.name === 'User') {
          iconName = focused ? 'person' : 'person-outline';
        }

        // Return the Icon component
        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'lightpink',
      tabBarInactiveTintColor: 'gray',
      headerShown: false, 
      
    })}
  >
    <Tab.Screen name="Home" component={ShomeHomeScreen} />
    <Tab.Screen name="Cart" component={CatScreen} />
    <Tab.Screen name="User" component={UserScreen} />
  </Tab.Navigator>
  );
}

export default BottomTabs 
// import React, { useState, useEffect } from 'react';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import AsyncStorage from '@react-native-async-storage/async-storage'; // AsyncStorage इंपोर्ट करें
// import store, { persistor } from './src/redux/Store';
// import AuthNavigation from './src/navigations/authNavigation/AuthNavigation';
// import AppNavigation from './src/navigations/appNavigation/AppNavigation';

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); 
//   const [loading, setLoading] = useState(true); 
//   useEffect(() => {
//     const checkLoginStatus = async () => {
//       try {
       
//         const status = await AsyncStorage.getItem('isLoggedIn');
//         if (status === 'true') {
//           setIsLoggedIn(true);
//         }
//       } catch (error) {
//         console.error('Error fetching login status:', error);
//       } finally {
//         setLoading(false); 
//       }
//     };

//     checkLoginStatus();
//   }, []);

//   if (loading) {
   
//     return null;
//   }

//   return (
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         {isLoggedIn ? <AppNavigation /> : <AuthNavigation />}
//       </PersistGate>
//     </Provider>
//   );
// };

// export default App;



// // import React from "react";
// // import { AuthProvider } from "./src/navigations/AuthContext ";
// // import RootNavigation from "./src/RootNavigation";

// // const App = () => {
// //   return (
// //     <AuthProvider>
// //       <RootNavigation />
// //     </AuthProvider>
// //   );
// // };

// // export default App;

// import React, { useState, useEffect } from 'react';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import store, { persistor } from './src/redux/Store';
// import AuthNavigation from './src/navigations/authNavigation/AuthNavigation';
// import AppNavigation from './src/navigations/appNavigation/AppNavigation';

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [loading, setLoading] = useState(true);

//   // Check login status on app load
//   useEffect(() => {
//     const checkLoginStatus = async () => {
//       try {
//         const status = await AsyncStorage.getItem('isLoggedIn');
//         if (status === 'true') {
//           setIsLoggedIn(true);
//         }
//       } catch (error) {
//         console.error('Error fetching login status:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     checkLoginStatus();
//   }, []);

//   if (loading) {
//     // Show a loading screen or spinner
//     return null; // Optional: Add a splash screen here
//   }

//   return (
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         {isLoggedIn ? <AppNavigation /> : <AuthNavigation />}
//       </PersistGate>
//     </Provider>
//   );
// };

// export default App;

import React, { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import  store, {persistor } from './src/redux/Store';
import AuthNavigation from './src/navigations/authNavigation/AuthNavigation';
import AppNavigation from './src/navigations/appNavigation/AppNavigation';
import { checkLoginStatus } from './src/redux/featurs/authSlice/AuthSlice';

const MainApp = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(checkLoginStatus());
  }, [dispatch]);

  if (loading) {
    return null; // Optional: Add a splash screen or loading spinner here
  }

  return isLoggedIn ? <AppNavigation /> : <AuthNavigation />;
};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainApp />
      </PersistGate>
    </Provider>
  );
};

export default App;

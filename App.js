import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-async-storage/async-storage'; // AsyncStorage इंपोर्ट करें
import store, { persistor } from './src/redux/Store';
import AuthNavigation from './src/navigations/authNavigation/AuthNavigation';
import AppNavigation from './src/navigations/appNavigation/AppNavigation';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
       
        const status = await AsyncStorage.getItem('isLoggedIn');
        if (status === 'true') {
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error('Error fetching login status:', error);
      } finally {
        setLoading(false); 
      }
    };

    checkLoginStatus();
  }, []);

  if (loading) {
   
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {isLoggedIn ? <AppNavigation /> : <AuthNavigation />}
      </PersistGate>
    </Provider>
  );
};

export default App;



// import React from "react";
// import { AuthProvider } from "./src/navigations/AuthContext ";
// import RootNavigation from "./src/RootNavigation";

// const App = () => {
//   return (
//     <AuthProvider>
//       <RootNavigation />
//     </AuthProvider>
//   );
// };

// export default App;


// import { configureStore } from "@reduxjs/toolkit";
// import TodoReducer from "./featurs/todo/Todoslice";
// import counterReducer from "./featurs/counterSlice/CounterSlice";
// import formReducer from "./featurs/formSlice/FormSlice";
// import cartReducer from "./featurs/cartSlice/CartSlice"

// export const store = configureStore({
//     reducer: {
//         counter: counterReducer,
//         todo: TodoReducer,
//         form: formReducer,
//         cart: cartReducer,
//     }
// })

// export default store;

//22535

// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./featurs/counterSlice/CounterSlice";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//     key: "root",
//     storage,
// };

// const persistedReducer = persistReducer(persistConfig, counterReducer);

// export const store = configureStore({
//     reducer: {
//         counter: persistedReducer,
//     },
// });

// export const persistor = persistStore(store);
// export default store;

// store.js

// import {configureStore} from '@reduxjs/toolkit';
// import categoriesReducer from './featurs/categoriesSlice/CategoriesSlice';
// import slideShowReducer from './featurs/offerSlide/OfferSlics';
// import cartReducer from './featurs/cartSlice/CartSliceProduct';

// const store = configureStore({
//   reducer: {
//     categories: categoriesReducer,
//     slideShow: slideShowReducer,
//     cart: cartReducer,
//   },
// });

// export default store;

///////////////////

import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Correct storage for React Native
import categoriesReducer from './featurs/categoriesSlice/CategoriesSlice';
import slideShowReducer from './featurs/offerSlide/OfferSlics';
import cartReducer from './featurs/cartSlice/CartSliceProduct';
import userReducer from './featurs/userSlice/UserSlice';

// Persist Configuration
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,  // Using AsyncStorage for React Native
  whitelist: ['cart'],    // Only persist the 'cart' slice
};

// Persisted Reducer for Cart
const persistedCartReducer = persistReducer(persistConfig, cartReducer);

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    slideShow: slideShowReducer,
    cart: persistedCartReducer, // Cart slice with persistence
    users: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,  // Disable serializable checks to avoid performance issues
    }),
});

export const persistor = persistStore(store);

export default store;

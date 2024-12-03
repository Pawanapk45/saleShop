// // import React, {useState} from 'react';
// // import {View, Text, FlatList, Image, TouchableOpacity, TextInput} from 'react-native';
// // import {useSelector, useDispatch} from 'react-redux';
// // import {
// //   selectFilteredCategories,
// //   setSearchQuery,
// // } from '../redux/featurs/categoriesSlice/CategoriesSlice';

// // const SearchResultsScreen = () => {
// //   const dispatch = useDispatch();
// //   const filteredCategories = useSelector(selectFilteredCategories); // Get filtered categories from Redux
// //   const [query, setQuery] = useState(''); // Local state for search input

// //   // Function to handle search
// //   const handleSearch = () => {
// //     dispatch(setSearchQuery(query)); // Update Redux state with search query
// //   };

// //   return (
// //     <>
// //       {/* Search Bar */}
// //       <View style={{flexDirection: 'row', margin: 10}}>
// //         <TextInput
// //           placeholder="Search Item"
// //           value={query}
// //           onChangeText={text => setQuery(text)}
// //           style={{
// //             flex: 1,
// //             borderWidth: 1,
// //             borderColor: 'lightgray',
// //             padding: 10,
// //             borderRadius: 5,
// //           }}
// //         />
// //         <TouchableOpacity
// //           onPress={handleSearch}
// //           style={{
// //             backgroundColor: 'lightpink',
// //             justifyContent: 'center',
// //             alignItems: 'center',
// //             paddingHorizontal: 15,
// //             marginLeft: 10,
// //             borderRadius: 5,
// //           }}>
// //           <Text style={{color: 'white'}}>Search</Text>
// //         </TouchableOpacity>
// //       </View>

// //       {/* Search Results */}
// //       <View style={{flex: 1, padding: 20}}>
// //         {filteredCategories.length > 0 ? (
// //           <FlatList
// //             data={filteredCategories}
// //             keyExtractor={(item, index) => index.toString()}
// //             renderItem={({item}) => (
// //               <TouchableOpacity style={{marginBottom: 20}}>
// //                 <Image
// //                   source={{uri: item.image}}
// //                   style={{width: 100, height: 100, borderRadius: 10}}
// //                 />
// //                 <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item.name}</Text>
// //               </TouchableOpacity>
// //             )}
// //           />
// //         ) : (
// //           <Text style={{fontSize: 18, textAlign: 'center'}}>No results found</Text>
// //         )}
// //       </View>
// //     </>
// //   );
// // };

// // export default SearchResultsScreen;


// import React, { useState } from 'react';
// import { View, Text, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';
// import { useSelector, useDispatch } from 'react-redux';
// import { selectFilteredCategories, setSearchQuery } from '../redux/featurs/categoriesSlice/CategoriesSlice';

// const SearchResultsScreen = () => {
//   const dispatch = useDispatch();
//   const [searchInput, setSearchInput] = useState('');
//   const filteredCategories = useSelector(selectFilteredCategories);

//   const handleSearch = () => {
//     dispatch(setSearchQuery(searchInput)); // सर्च क्वेरी को Redux स्टेट में सेट करें
//   };

//   return (
//     <>
//       {/* सर्च बार */}
//       <View style={{ flexDirection: 'row', margin: 10 }}>
//         <TextInput
//           placeholder="Search Item"
//           style={{ width: 200, borderBottomWidth: 1, marginRight: 10 }}
//           value={searchInput}
//           onChangeText={(text) => setSearchInput(text)}
//         />
//         <TouchableOpacity style={{ backgroundColor: 'lightpink', padding: 5 }} onPress={handleSearch}>
//           <Text>Search</Text>
//         </TouchableOpacity>
//       </View>

//       {/* सर्च रिज़ल्ट */}
//       <View style={{ flex: 1, padding: 20 }}>
//         {filteredCategories.length > 0 ? (
//           <FlatList
//             data={filteredCategories}
//             keyExtractor={(item, index) => index.toString()}
//             renderItem={({ item }) => (
//               <TouchableOpacity style={{ marginBottom: 20 }}>
//                 <Image
//                   source={{ uri: item.image }}
//                   style={{ width: 100, height: 100, borderRadius: 10 }}
//                 />
//                 <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
//               </TouchableOpacity>
//             )}
//           />
//         ) : (
//           <Text style={{ fontSize: 18, textAlign: 'center' }}>No results found</Text>
//         )}
//       </View>
//     </>
//   );
// };

// export default SearchResultsScreen;


import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredCategories, setSearchQuery } from '../redux/featurs/categoriesSlice/CategoriesSlice';
// import BottomTab from '../navigations/appNavigation/BottomNavigation';
import UserNavBar from '../components/molecules/UserNavBar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const SearchResultsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const filteredCategories = useSelector(selectFilteredCategories);
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    dispatch(setSearchQuery(query));
  };

  return (
    <GestureHandlerRootView>
      <>
    <UserNavBar showUserInfo={false} flex='flex-end' goBack={true} mgBottom={10} />
    <View style={{ flex: 1, padding: 20 }}>
      {/* Search Bar */}
      <View style={{ flexDirection: 'row', marginBottom: 20 }}>
        <TextInput
          placeholder="Search Categories"
          value={query}
          onChangeText={(text) => setQuery(text)}
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: 'lightgray',
            padding: 10,
            borderRadius: 5,
          }}
        />
        <TouchableOpacity
          onPress={handleSearch}
          style={{
            backgroundColor: 'lightpink',
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 15,
            marginLeft: 10,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: 'white' }}>Search</Text>
        </TouchableOpacity>
      </View>

      {/* Results */}
      {filteredCategories.length > 0 ? (
        <FlatList
          data={filteredCategories}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}
              onPress={() => navigation.navigate('CategoryDetails', { category: item })}
            >
              <Image
                source={{ uri: item.image }}
                style={{ width: 60, height: 60, marginRight: 15, borderRadius: 5 }}
              />
              <Text style={{ fontSize: 16 }}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text>No categories found</Text>
      )}
      
    </View>
   <View>
    <BottomTab/>
   </View>
   </>
    </GestureHandlerRootView>
  );
};

export default SearchResultsScreen;

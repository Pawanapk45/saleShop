// import React from 'react';
// import {View, Text, Image, TextInput} from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';


// const SearchBar = ({bgColor= '#ffb6c1b5',brRadious=20}) => {
//   return (
//     <View
//       style={{
//         width: '80%',
//         justifyContent: 'center',
//         marginHorizontal: 'auto',
//         flexDirection: 'row',
//         backgroundColor: bgColor,
//         alignItems: 'center',
//         borderRadius: brRadious,
//       }}>
//       <TextInput
//         placeholder="Search Item"
//         style={{paddingLeft: 10, fontSize: 18, width: '80%'}}
//       />
//       <Icon name="search" style={{marginHorizontal: 20}} size={25} />
//     </View>
//   );
// };

// export default SearchBar;

import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {setSearchQuery} from '../../redux/featurs/categoriesSlice/CategoriesSlice'; 

const SearchBar = ({bgColor = '#ffb6c1b5', brRadious = 20 ,mgTop =10}) => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleSearch = () => {
    if (query.trim()) {
      dispatch(setSearchQuery(query)); 
      console.log(query);
    }
  };

  return (
    <View
      style={{
        width: '80%',
        justifyContent: 'center',
        marginHorizontal: 'auto',
        flexDirection: 'row',
        backgroundColor: bgColor,
        alignItems: 'center',
        borderRadius: brRadious,
        marginTop: mgTop,
      }}>
      <TextInput
        placeholder="Search Item"
        style={{paddingLeft: 10, fontSize: 18, width: '80%'}}
        value={query}
        onChangeText={setQuery}
      />
      <TouchableOpacity onPress={handleSearch}>
        <Icon name="search" style={{marginHorizontal: 20}} size={25} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;


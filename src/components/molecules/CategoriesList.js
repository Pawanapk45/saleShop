import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, Image, FlatList } from 'react-native';
import { selectCategories } from '../../redux/featurs/categoriesSlice/CategoriesSlice';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const CategoriesList = () => {
const navigation = useNavigation()
  const categories = useSelector(selectCategories);

  return (
    <View style={{width:'95%',margin:'auto'}}>
      <View>
        <Text style={{ marginTop: 20, fontSize: 20, marginLeft: 20 }}>Categories</Text>
      </View>
      <FlatList
        horizontal
        data={categories}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ marginTop: 20, paddingHorizontal: 15 }}
        renderItem={({ item }) => (
          <View
            style={{
              width: 80,
              height: 130,
              backgroundColor: 'lightpink',
              marginHorizontal: 10,
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
              shadowColor: 'black',
              shadowOffset: { width: 0, height: 5 },
              shadowOpacity: 0.1,
              shadowRadius: 10,
              elevation: 10,
            }}
          >
            {/* <TouchableOpacity onPress={() => console.log(item.subcategories.image)}> */}
            <TouchableOpacity onPress={() => navigation.navigate('CategoriesPart', { item })}>
            <Image
              source={{ uri: item.image }}
              style={{ width: 60, height: 60, marginTop: 10, alignSelf: 'center' }}
            />
            <Text style={{ textAlign: 'center', color: '#000', marginTop: 5 }}>
              {item.name}
            </Text>
            </TouchableOpacity>
          </View>
        )}
      />
   </View>
  );
};

export default CategoriesList;

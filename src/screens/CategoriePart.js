import React from "react";
import { View, Text , Image } from "react-native";
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";
import UserNavBar from "../components/molecules/UserNavBar";

const CategoriesPart = ({route })=> {
    const { item } = route.params;
    const navigation = useNavigation();

   

    return (
        <GestureHandlerRootView>
          <UserNavBar showUserInfo={false} flex='flex-end' goBack={true} mgBottom={10} />
          <View>
      <View>
        <Text style={{ marginTop: 20, fontSize: 20, marginLeft: 20 }}>Categories</Text>
      </View>
      <FlatList
        
        data={item.subcategories }
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ marginTop: 20, paddingHorizontal: 15 }}
        renderItem={({ item }) => (
          <View
            style={{
              width: 90,
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
              marginTop:20,
              marginBottom:20
            }}
          >
            {/* <TouchableOpacity onPress={() => console.log(item.subcategories.image)}> */}
            <TouchableOpacity onPress={()=> navigation.navigate('AddProduct',{item})}>
            <Image
              source={{ uri: item.image }}
              style={{ width: 70, height: 60, marginTop: 10, alignSelf: 'center' }}
            />
            <Text style={{ textAlign: 'center', color: '#000', marginTop: 5 }}>
              {item.name}
            </Text>
            </TouchableOpacity>
          </View>
        )}
        numColumns={3}
      />
   </View>
        </GestureHandlerRootView>
    )
}

export default CategoriesPart;
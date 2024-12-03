import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';

const ProductScreen = () => {
  const route = useRoute();
  const { searchResults } = route.params; // Get searchResults from route params

  return (
    <View>
      {searchResults && searchResults.length > 0 ? (
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item.id.toString()} // Use a unique identifier like id instead of name
          renderItem={({ item }) => (
            <View style={{ flexDirection: 'row', padding: 10 }}>
              <Image source={{ uri: item.image }} style={{ width: 50, height: 50 }} />
              <Text style={{ marginLeft: 10 }}>{item.name}</Text>
            </View>
          )}
        />
      ) : (
        <Text>No results found</Text>
      )}
    </View>
  );
};

export default ProductScreen;

import React from "react";
import { View,Text,Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const SaleOffer = ()=> {

    return(
        <ScrollView>
        <View style={{flexDirection:'row',flexWrap:'wrap',marginTop:20}}>
        <View style={{width:'45%' ,marginHorizontal:'auto',marginTop:0}}>
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrb-QfWJaGved0YGHW5c7qzMSEqYx-XsUzwA&s' }}
            style={{ width: 'auto', height: 200 }}
            resizeMode="cover" 
          />
        </View>
        <View style={{width:'45%' ,marginHorizontal:'auto',marginTop:10}}>
          <Image
            source={{ uri: 'https://d1csarkz8obe9u.cloudfront.net/themedlandingpages/tlp_hero_retail-sale-posters-362a517f195f1af49f562d3f925c2c12.jpg?ts%20=%201706181157' }}
            style={{ width: 'auto', height: 200 }}
            resizeMode="cover" 
          />
        </View>
        <View style={{width:'45%' ,marginHorizontal:'auto',marginTop:10}}>
          <Image
            source={{ uri: 'https://edit.org/img/blog/z3i-sale-poster-template-free-edit-online.webp' }}
            style={{ width: 'auto', height: 200 }}
            resizeMode="cover" 
          />
        </View>
        <View style={{width:'45%' ,marginHorizontal:'auto',marginTop:10}}>
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTREbu04QYt_hXGUzwk2hTBoVwFIgnKIW5Ptw&s' }}
            style={{ width: 'auto', height: 200 }}
            resizeMode="cover" 
          />
        </View>
        <View style={{width:'45%' ,marginHorizontal:'auto',marginTop:10}}>
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8MBPPEhxgxtwDTiDMFsuVjZkFGeC1uUCqRQ&s' }}
            style={{ width: 'auto', height: 200 }}
            resizeMode="cover" 
          />
        </View>
        <View style={{width:'45%' ,marginHorizontal:'auto',marginTop:10}}>
          <Image
            source={{ uri: 'https://img.freepik.com/free-vector/flat-design-supermarket-poster-template_23-2150330754.jpg' }}
            style={{ width: 'auto', height: 200 }}
            resizeMode="cover" 
          />
        </View>
        </View>
      </ScrollView>
    )
}

export default SaleOffer;
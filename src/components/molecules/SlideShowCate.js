import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Dimensions, Image } from "react-native";
// import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { selectSlideShowData } from "../../redux/featurs/offerSlide/OfferSlics";

const SlideShowCate = () => {
    const data = useSelector(selectSlideShowData);
    const [currentIndex, setCurrentIndex] = useState(0);
    const screenWidth = Dimensions.get("window").width;

    // Track current slide index
    const onScroll = (event) => {
        const slideIndex = Math.round(event.nativeEvent.contentOffset.x / screenWidth);
        setCurrentIndex(slideIndex);
    };
    

    return (
       <View>
           <View>
           <FlatList
                data={data}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={onScroll}
                renderItem={({ item, index }) => (
                    <>
                     <View style={{ alignItems: 'center', marginTop: 20 }}>
                        <TouchableOpacity disabled={true}>
                            <View style={{
                                backgroundColor: 'lightpink',
                                width:320, 
                                borderRadius: 20,
                                height: 200,
                                marginHorizontal: 20,
                              
                            }}>
                                {/* <Text style={{ fontSize: 20, textAlign: 'center', color: 'white' }}>Slide {index + 1}</Text> */}
                                <Image 
                                  source={{ uri: item.url }}
                                  style={{ width: '100%', height: 200 ,borderRadius:20}}
                                  resizeMode="cover" 
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                    </>
                )}
                keyExtractor={(item, index) => index.toString()}
            />

            {/* Indicator */}
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 10,marginTop:15}}>
                {data.map((_, index) => (
                    <View
                        key={index}
                        style={{
                            width: currentIndex === index ? 30 : 10,
                            height: 3,
                            borderRadius: 5,
                            backgroundColor: currentIndex === index ? 'lightpink' : 'lightgray',
                            marginHorizontal: 5,
                        }}
                    />
                ))}
            </View>
           </View>
       
       </View>
    );
};

export default SlideShowCate;

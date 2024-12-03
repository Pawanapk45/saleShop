// import React, { Component } from 'react'
// import { Text, View } from 'react-native'

// export default class Component extends Component {
//   render() {
//     return (
//         <TouchableOpacity>
//         <View
//           style={{flexDirection: 'row', alignItems: 'center', padding: 10 ,height:50,backgroundColor:'lightpink',marginVertical:10}}>
//           <Icon name="user" size={30} />
//           <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 10}}>
//             Hello, User!
//           </Text>
//         </View>
//       </TouchableOpacity>
//     )
//   }
// }

import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const CustomComponent = ({ iconName='user', textContent, onPress,ShowIcon=true }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
          height: 50,
          backgroundColor: 'lightpink',
          marginVertical: 10,
          marginHorizontal:10,
          borderRadius:20,
          elevation:5
        }}
      >
        {ShowIcon && (
            <Icon name={iconName} size={30} style={{marginLeft:20}} />
        )}
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10 }}>
          {textContent}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomComponent;

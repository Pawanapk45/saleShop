// import React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeTodo } from '../redux/featurs/todo/Todoslice';
// import { FlatList } from 'react-native-gesture-handler';

// const Todo = () => {
//   const todos = useSelector(state => state.todo); // Ensure you're selecting from the right state slice
//   const dispatch = useDispatch();

//   return (
//     <>
//       <View>
//         <Text style={{ color: 'black' }}> Todo List</Text>
//       </View>
//       <FlatList
//         data={todos} // List of todos
//         keyExtractor={item => item.id.toString()} // Unique key for each item
//         renderItem={({ item }) => (
//           <View style={{ backgroundColor: 'lightred', margin: 10, padding: 10 }}>
//             <Text style={{ color: 'black' }}>{item.text}</Text>
//             <TouchableOpacity onPress={() => dispatch(removeTodo(item.id))}>
//               <Text style={{ color: 'black' }}> Remove</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       />
//     </>
//   );
// };

// export default Todo;


// TodoList.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../redux/featurs/todo/Todoslice';

const Todo = () => {
  const todos = useSelector(state => state.todo.todos);
  const dispatch = useDispatch();

  return (
    <View>
      <Text style={{color:'B'}}>Todo List</Text>
      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderBottomWidth: 1, flexDirection:'row' ,justifyContent:'space-between'}}>
            <Text style={{color:'black'}}>{item.text}</Text>
            <TouchableOpacity style={{backgroundColor:'red',paddingHorizontal:10,paddingVertical:5}} onPress={() => dispatch(removeTodo(item.id))}>
              <Text style={{ color: 'white' }}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Todo;


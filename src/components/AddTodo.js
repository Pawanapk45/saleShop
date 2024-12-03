// import React, {useState} from 'react';
// import {View, Text, TextInput, Button} from 'react-native';
// import {useDispatch} from 'react-redux';
// import {addTodo} from '../redux/featurs/todo/Todoslice';

// const AddTodo = () => {
//   const [input, setInput] = useState('');
//   const dispatch = useDispatch();

//   const addTodoHandler = (e) => {
//     e.preventDefault();
//     dispatch(addTodo(input));
//     setInput('');
//   };

//   return (
   

//      <>
//         <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//         <Text style={{color:'black'}}>Add Todo</Text>

//         <View>
//           <TextInput
//             placeholder="Enter your todo here"
//             value={input}
//             onChangeText={text => setInput(text)}
//             style={{color:'black',backgroundColor:'lightblue',margin:10,width:200}}
//           />
//           <Button title="Add Todo" onPress={addTodoHandler} />
          
//         </View>
//       </View>
//      </>
    
//   );
// };

// export default AddTodo;


// AddTodo.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/featurs/todo/Todoslice';

const AddTodo = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    } else {
      alert('Please enter a todo');
    }
  };

  return (
    <View>
      {/* <Text style={{color=}}>Add Todo</Text> */}
      <TextInput
        value={input}
        onChangeText={setInput}
        placeholder="Enter your todo"
        style={{ borderColor: 'lightpink', backgroundColor:'lightpink' ,color:'black', borderWidth: 1, margin: 20 }}
      />
      <Button title="Add Todo" onPress={handleAddTodo}  />
    </View>
  );
};

export default AddTodo;

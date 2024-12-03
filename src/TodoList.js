import React from "react";
import {View , Text} from 'react-native';
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const TodoList = ()=> {


    return (
       <>
        <View style={{alignItems:'center'}}>
            <Text style={{color:'black'}}>TodoList</Text>
        </View>
        <AddTodo/>
        <GestureHandlerRootView>
         <Todo />
         </GestureHandlerRootView>
       </>
    )
}

export default TodoList;
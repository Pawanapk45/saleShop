import React from "react";
import { View } from "react-native";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import ItemPrice from "./ItemPrice";

const TodoPart = () =>{
    return (
        <>
            
                <AddTodo />
                <Todo />
                <ItemPrice/>
            
       </>
    
    )

}

export default TodoPart;
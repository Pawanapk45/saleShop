import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import { FlatList, TextInput } from 'react-native-gesture-handler'
import { useDispatch ,useSelector } from 'react-redux'
import { addTodo , removeTodo } from './redux/featurs/todo/Todoslice'

export default function NotificationScreen() {
  const [Input , setInput] = useState('')
  const dispatch = useDispatch()

  const tods = useSelector(state =>state.todos)

  const addTodoHandler =(e)=>{
    e.preventDefault()
    dispatch(addTodo(input))
    setInput('')
  }

  return (
   <>
     <View>
      <Text>NotificationScreen</Text>
      <TextInput
        placeholder='Todo Task Type'
        value=''
      />
      <Button title='Add Todo' onPress={addTodoHandler}/> 
    </View> 
    <View>
      <View >
        {todoSlice.map((todo)=>(
          <View>
             <Text>
                {todo.text}
              </Text>
              <Button title='Delete' onPress={()=> dispatch(removeTodo(todo.id))}/>
          </View>
        ))}
      </View>
    </View>
   </>
  )
}
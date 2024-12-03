// // import { createSlice , nanoid } from "@reduxjs/toolkit";

// // const initialState = {
// //     todo: [{id: 1, text :"hello world"}]
// // }


// // export const todoSlice= createSlice({
// //     name: 'todo',
// //     initialState,
// //     reducers:{
// //         addTodo : (state,action) => {
// //             const todo  ={
// //                 id: nanoid(), 
// //                 text : action.payload
// //             }
// //             state.todo.push(todo)
// //         },
// //         removeTodo: (state,action)=> {
// //            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
// //         },
// //     }
// // })

// // export const { addTodo, removeTodo } = todoSlice.action;

// // export default todoSlice.reducer;


// import { createSlice, nanoid } from "@reduxjs/toolkit";

// const initialState = {
//     todo: [{ id: 1, text: "hello world" }]
// };

// export const todoSlice = createSlice({
//     name: 'todo',
//     initialState,
//     reducers: {
//         addTodo: (state, action) => {
//             const todo = {
//                 id: nanoid(),
//                 text: action.payload
//             };
//             state.todo.push(todo);
//         },
//         removeTodo: (state, action) => {
//             state.todo = state.todo.filter((todo) => todo.id !== action.payload);
//         },
//     }
// });


// export const { addTodo, removeTodo } = todoSlice.actions;

// export default todoSlice.reducer;

// todoSlice.js
import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.todos.push(action.payload);
      },
      prepare: (text) => {
        return {
          payload: {
            id: nanoid(),
            text,
          },
        };
      },
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;

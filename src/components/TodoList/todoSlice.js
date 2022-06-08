// const initState =[
//         { id:1, name:'Learn Python',completed:true,level:'High'},
//         { id:2, name:'Learn Keyloak',completed:false,level:'Low'},
//         { id:3, name:'Learn UnitTest',completed:false,level:'Medium'},
// ]


// const todoListReducer =(state= initState ,action)=>{
//     console.log(state,action);
//     switch(action.type){
//         case 'todoList/addTodo':
//             return[
//                 ...state,
//                 action.payload
//             ]
//         case 'todoList/toggleTodoStatus':
//             return state.map(todo=> todo.id === action.payload ? 
//                 {...todo,completed: !todo.completed} :todo)
//         default:
//             return state
//     }
// }

// export default todoListReducer;

import {createSlice} from '@reduxjs/toolkit';

export default createSlice({
    name: 'todoList',
    initState: [
        { id:1, name:'Learn Python',completed:true,level:'High'},
        { id:2, name:'Learn Keyloak',completed:false,level:'Low'},
        { id:3, name:'Learn UnitTest',completed:false,level:'Medium'}
    ],
    reducers:{
        addTodo: (state,action)=>{
            state.push(action.payload)
        },
        toggleTodoStatus: (state,action)=>{
            const currentTodo = state.filter(todo=>todo.id === action.payload);
            currentTodo.completed = !currentTodo.completed;
        }
    }
})
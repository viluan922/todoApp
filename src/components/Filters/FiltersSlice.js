// const initState ={
//         search:'',
//         status:'All',
//         levels:[]
// }

// const filtersReducer =(state= initState ,action)=>{
//     console.log(state,action);
//     switch(action.type){
        
//         case 'filters/searchFilterChange':
//             return{
//                 ...state,     
//                 search:action.payload
//             }
//         case 'filters/statusFilterChange':
//             return{
//                 ...state, 
//                 status:action.payload
//             }
//         case 'filters/levelsFilterChange':
//             return{
//                 ...state, 
//                 levels:action.payload
//             }
//         default:
//             return state
//     }
// }
// export default filtersReducer;

import {createSlice} from '@reduxjs/toolkit'; 

export default createSlice({
    name: 'filters',
    initState: {
        search:'',
        status:'All',
        levels:[],
    },
    reducers: {
        searchFilterChange: (state,action)=>{
            state.search = action.payload;
        },
        statusFilterChange: (state,action)=>{
            state.status = action.payload;
        },
        levelsFilterChange: (state,action)=>{
            state.levels = action.payload;
        }
    }
})
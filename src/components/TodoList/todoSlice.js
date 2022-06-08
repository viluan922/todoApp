const initState =[
        { id:1, name:'Learn Python',completed:true,level:'High'},
        { id:2, name:'Learn Keyloak',completed:false,level:'Low'},
        { id:3, name:'Learn UnitTest',completed:false,level:'Medium'},
]


const todoListReducer =(state= initState ,action)=>{
    console.log(state,action);
    switch(action.type){
        case 'todoList/addTodo':
            return[
                ...state,
                action.payload
            ]
        case 'todoList/toggleTodoStatus':
            return state.map(todo=> todo.id === action.payload ? 
                {...todo,completed: !todo.completed} :todo)
        default:
            return state
    }
}

export default todoListReducer;
// import { createStore } from 'redux';
// import rootReducer from './reducer';
// import { composeWithDevTools} from 'redux-devtools-extension';

// const composedEnhancers = composeWithDevTools()

// const store = createStore(rootReducer,composedEnhancers);

// export default store

import {configureStore} from '@reduxjs/toolkit'
import filtersReducer from '../components/Filters/FiltersSlice';
import todoListReducer from '../components/TodoList/todoSlice';

const store  = configureStore({
    reducer: {
        filters: filtersReducer,
        todoList: todoListReducer,
    }
})

export default store;
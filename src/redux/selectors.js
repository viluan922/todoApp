import {createSelector} from '@reduxjs/toolkit'

export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status
export const filterLevelsSelector = (state) => state.filters.levels
export const todoListSelector = (state) => state.todoList


export const todoRemainingSelector = createSelector(
    todoListSelector, filterStatusSelector,searchTextSelector,filterLevelsSelector,
    (todoList,status, searchText,levels) => {
    return todoList.filter((todo) => {
        if(status === 'All') {
            return levels.length ? todo.name.includes(searchText) 
            && levels.includes(todo.level) : todo.name.includes(searchText);
        }

        return todo.name.includes(searchText) && (
            status ==='Completed'
            ? todo.completed : !todo.completed) && (levels.length ? levels.includes(todo.level) : true )
    })
})
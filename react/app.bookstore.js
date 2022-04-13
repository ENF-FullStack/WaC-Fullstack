import {createStore} from 'redux';

const initial={
    bookSort:'title'
}

function bookReducer(prev,action){
    console.log("REDUCER",prev,action)
    if (!prev) return initial;
    if (action.type=='change_sort'){
        return Object.assign({},prev,{bookSort:action.data})
    }
    return prev;
}

export let bookStore=createStore(bookReducer);

export const BookActions={
    dispatchChangeSort(sort){
        bookStore.dispatch({type:'change_sort',data:sort})
    }
}


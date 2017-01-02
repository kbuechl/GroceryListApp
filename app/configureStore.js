import { createStore, applyMiddleware, combineReducers } from 'redux';
import { GroceryReducer, GroceryListReducer } from './reducers';
import createLogger from 'redux-logger';

import reducers from './reducers/index'
import { mapValues } from 'lodash'

export function configureStore () {
    //todo: get previous state here
    const store = createStore(reducers, applyMiddleware(createLogger()));
    //todo: use store.subscribe to save the state whenever it changes
    return store;
};

export const getList = (state, listId) => {
    if (state) {
        return state.lists[listId];
    }
    return null;
};


export const getItemsForList = (state, listId) => {
    let items = [];
    if (state) {
        mapValues(state.groceries, function (item) {
            if (item.listId == listId) {
                items.push(item);
            }
        });
    }
    return items;
};
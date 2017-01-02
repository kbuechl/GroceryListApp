import * as types from '../actions/actionTypes'
import { cloneDeep } from 'lodash'

export default function GroceryReducer(state = {}, action = {}) {
    let newState = cloneDeep(state);
    switch (action.type) {
        case types.ADD_GROCERY:
            let newItem = createItem(action.id, action.name, action.listId);
            newState[newItem.id] = newItem;
            break;
        case types.TOGGLE_GROCERY:
           newState[action.id].isComplete = !newState[action.id].isComplete;
           break;
        default: return state;
    }
    return newState;
}

const createItem = (id, name, listId) => ({
    id: id,
    name: name,
    isComplete: false,
    listId:listId
});
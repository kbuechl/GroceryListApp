import * as types from '../actions/actionTypes'
import { cloneDeep } from 'lodash'


export default function GroceryListReducer(state = {}, action = {}) {

    let newState = cloneDeep(state);
    switch (action.type) {
        case types.ADD_LIST:
            newState[action.id] = createList(action.id, action.name);
            break;
        case types.DELETE_LIST:
            delete newState[action.id];
            break;
        case types.RENAME_LIST:
            newState[action.id].name = action.name;
            break;
        default:
            return state;
    }
    return newState;

};

const createList = (id, name) => ({
    id: id,
    name: name,
    groceries: {}
});

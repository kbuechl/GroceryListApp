import * as types from './actionTypes'
import { v4 } from 'node-uuid'

export const addGrocery = (name, listId) => ({
        type: types.ADD_GROCERY,
        id: v4(),
        name: name,
        listId:listId
});
export const toggleGrocery = (id) => ({
        type: types.TOGGLE_GROCERY,
        id: id
});
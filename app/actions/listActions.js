import * as types from './actionTypes'
import {v4} from 'node-uuid'

export const addList =(name)=>({
    type: types.ADD_LIST,
    name: name,
    id: v4()
});

export const deleteList =(id) =>({
    type: types.DELETE_LIST,
    id:id
});

export const renameList =(id, newName) =>({
    type: types.RENAME_LIST,
    id:id,
    name:newName
});


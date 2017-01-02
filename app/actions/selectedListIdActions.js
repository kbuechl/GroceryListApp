import * as types from './actionTypes'

export const setSelectedListId = (id) => ({
    type: types.SET_SELECTED_LIST,
    id: id
});
export const clearSelectedListId = () => ({
    type: types.CLEAR_SELECTED_LIST,
    id: null
});

import * as types from '../actions/actionTypes';

export default function SelectedListIdReducer(state = null, action = {}) {
    switch (action.type) {
        case types.CLEAR_SELECTED_LIST:
        case types.SET_SELECTED_LIST:
            return action.id;
        default: return state;
    }
};
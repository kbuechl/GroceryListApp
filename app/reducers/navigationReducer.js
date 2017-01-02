import * as navigationActions from '../actions/navigationActions';
import * as types from '../actions/actionTypes'
import { cloneDeep } from 'lodash';

const initialState = {
    index: 0,
    key: 'root',
    routes: [
        {
            key: 'home',
            title: 'Welcome home',
        },
    ],
};
export default (state = initialState, action ={}) => {
    let newState = cloneDeep(state);
    switch (action.type) {
        case types.PUSH_NAVIGATION:
            newState.routes.push(action.route);
            newState.index += 1;
            break;
        case types.POP_NAVIGATION:
            if (newState.index > 0) {
                newState.routes.pop();
                newState.index -= 1;
            }
            break;
        default:
            return state;
    }
    return newState;
};
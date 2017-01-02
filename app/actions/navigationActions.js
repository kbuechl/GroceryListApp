import * as types from './actionTypes'

export const pushRoute =(route) =>({
    type: types.PUSH_NAVIGATION,
    route:route
});

export const popRoute =() =>({
    type: types.POP_NAVIGATION
});
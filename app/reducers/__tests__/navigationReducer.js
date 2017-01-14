import NavigationReducer from '../navigationReducer';
import * as types from '../../actions/actionTypes';
import * as actions from '../../actions/navigationActions';
import deepfreeze from 'deep-freeze';
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

test('returns initial state', () => {
    expect(NavigationReducer()).toEqual(initialState);
});

test('push adds new route', () => {
    let stateBefore = initialState;
    let action = actions.pushRoute('Test Route');
    let expected = {
        ...initialState,
        routes: [
            ...initialState.routes,
            'Test Route'
        ],
        index: 1
    };
    deepfreeze(stateBefore);
    deepfreeze(action);

    expect(NavigationReducer(stateBefore, action)).toEqual(expected)


});
test('pop removes last route', () => {
    let stateBefore = {
        index: 1,
        key: 'root',
        routes: [
            {
                key: 'home',
                title: 'Welcome home',
            },
            {
                key: 'test',
                title: 'Other Route',
            }
        ],
    };

    let action = actions.popRoute();
    deepfreeze(action);
    deepfreeze(stateBefore);

    expect(NavigationReducer(stateBefore, action)).toEqual(initialState);

});
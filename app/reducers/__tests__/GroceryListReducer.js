import GroceryListReducer from '../GroceryListReducer'
import * as listActions from '../../actions/listActions'
import deepfreeze from 'deep-freeze'

test('returns initial state', () => {
    const expected = {};
    const result = GroceryListReducer();
    expect(result).toEqual(expected);
});

test('adds new list', () => {
    const action = listActions.addList('Test List');
    const stateAfter = { };
    stateAfter[action.id] = { id: action.id, name: action.name, groceries: {} }
    const stateBefore = { };
    deepfreeze(stateBefore);
    deepfreeze(action);
    expect(GroceryListReducer(stateBefore, action)).toEqual(stateAfter);
});
test('removes list', () => {
    const stateAfter = { }
    const stateBefore = {
            1: {
                id: 1,
                name: 'Test List',
                groceries: {}
            }
    };
    const action = listActions.deleteList(1);
    deepfreeze(stateBefore);
    deepfreeze(action);
    expect(GroceryListReducer(stateBefore, action)).toEqual(stateAfter);
});
test('rename list', () => {
    const stateBefore = {
            1: {
                id: 1,
                name: 'Test List',
                groceries: {}
            }
    };
    const stateAfter = {
       1: {
                id: 1,
                name: 'New name',
                groceries: {}
            }
    };
    const action = listActions.renameList(1, 'New name');
    deepfreeze(stateBefore);
    deepfreeze(action);
    expect(GroceryListReducer(stateBefore, action)).toEqual(stateAfter);
});

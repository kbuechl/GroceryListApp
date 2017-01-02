import GroceryReducer from '../GroceryReducer'
import * as groceryActions from '../../actions/groceryActions'
import deepfreeze from 'deep-freeze'

test('returns initial state', () => {
    const expected = { };
    const result = GroceryReducer();
    expect(result).toEqual(expected);
});

test('adds new grocery item', () => {
    const action = groceryActions.addGrocery('Item 1',1)
    let stateAfter ={};
    stateAfter[action.id] =  {"id": action.id, "name": action.name,"isComplete": false, listId:1};

    const stateBefore = { };
    
    deepfreeze(stateBefore);
    deepfreeze(action);
    expect(GroceryReducer(stateBefore, action)).toEqual(stateAfter);
});

test('toggles complete on selected item', () => {
    const action = groceryActions.toggleGrocery(1)
    const stateBefore = { 1: { id: 1, name: 'Item 1',listId:1, isComplete: false } };
    const stateAfter = { 1: { id: 1, name: 'Item 1',listId:1, isComplete: true } };
    deepfreeze(stateBefore);
    deepfreeze(action);
    expect(GroceryReducer(stateBefore, action)).toEqual(stateAfter);
});
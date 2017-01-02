import SelectedListIdReducer from '../SelectedListIdReducer';
import * as actions from '../../actions/selectedListIdActions';
import deepFreeze from 'deep-freeze';

test('Returns default state', () => {
    expect(SelectedListIdReducer()).toEqual(null);
});

test('Clears select List id', () => {
    const stateBefore = 1;
    const action = actions.clearSelectedListId();

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(SelectedListIdReducer(stateBefore, action)).toEqual(null);
});
test('Sets selected List id', () => {
    const action = actions.setSelectedListId(1);

    deepFreeze(action);

    expect(SelectedListIdReducer(null, action)).toEqual(1);
});
import { combineReducers } from 'redux';
import GroceryListReducer from './GroceryListReducer';
import GroceryReducer from './GroceryReducer';
import SelectedListIdReducer from './SelectedListIdReducer';
import NavigationReducer from './navigationReducer';

const reducers = combineReducers({
    lists: GroceryListReducer,
    groceries: GroceryReducer,
    selectedListId: SelectedListIdReducer,
    navigation:NavigationReducer
});
export default reducers;
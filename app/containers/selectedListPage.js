import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import GroceriesView from '../components/groceriesView'
import AddGrocery from '../components/addGrocery'
import * as groceryActions from '../actions/groceryActions';
import { popRoute } from '../actions/navigationActions';
import { getList, getItemsForList } from '../configureStore'
import NavBar from '../components/navbar'

class SelectedListPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {groceries, selectedList, addGrocery, toggleGrocery} = this.props;
    return (
      <View>
        <NavBar back = {this.props.back} title={'Viewing List: ' + selectedList.name }/>
        <AddGrocery addGrocery={addGrocery} listId= {selectedList.id}/>
        <GroceriesView groceries={groceries} toggleGrocery={toggleGrocery} />
      </View>
    );
  }
}
export default connect(state => ({
  selectedList: getList(state, state.selectedListId),
  groceries: getItemsForList(state, state.selectedListId)
}), dispatch => ({
  addGrocery: (text, listid) => dispatch(groceryActions.addGrocery(text, listid)),
  toggleGrocery: (id) => dispatch(groceryActions.toggleGrocery(id))
}))(SelectedListPage);

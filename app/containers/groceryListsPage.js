import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import GroceryListsView from '../components/groceryListsView'
import NewList from '../components/newList'
import * as groceryListActions from '../actions/listActions';
import * as selectedListIdActions from '../actions/selectedListIdActions';

const styles = StyleSheet.create({
  header:{ paddingBottom: 10, fontSize:20, borderBottomColor:'lightgray', borderBottomWidth:1 , textAlign:'center' },
})

class GroceryListsPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { lists, actions } = this.props;
    //TODO: can we change the new list element to be a row in the grocery list view?
    return (
      <View>
        <Text style={styles.header}>Grocery List App</Text>
        <NewList addPressed={actions.addList} />
        <GroceryListsView lists={lists} selectList={actions.selectList} deleteList ={actions.deleteList}/>
      </View>
    );
  }
}

export default connect(state => ({
  lists: state.lists
}),
  (dispatch, ownProps) => {
    //todo: there has to be a way to shorten this with the short syntax
    return {
      actions: {
        addList: (name) => dispatch(groceryListActions.addList(name)),
        selectList: (id) => {
          dispatch(selectedListIdActions.setSelectedListId(id));
          ownProps.gotoSelectedList();
        },
        deleteList:(id) => dispatch(groceryListActions.deleteList(id))
      }
    }
  }
)(GroceryListsPage);

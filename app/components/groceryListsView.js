import React, { Component } from 'react'
import { Text, ListView, View, TouchableWithoutFeedback } from 'react-native'
import { NewList } from './newList'
import GroceryListItem from './groceryListItem'
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

export default class GroceryListsView extends Component {
    componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps)
            this.setState({ dataSource: ds.cloneWithRows(nextProps.lists) })
    }
    constructor(props) {
        super();
        this.state = {
            dataSource: ds.cloneWithRows(props.lists),
        };
    }

    _renderSeparator = (sectionID, rowID, adjacentRowHighlighted) => {
        let myKey = sectionID + '-' + rowID
        return (
            <View
                key={myKey}
                style={{
                    height: adjacentRowHighlighted ? 4 : 1,
                    backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#CCCCCC',
                }}
            />
        );
    };
    render() {
        const {selectList, deleteList} = this.props;
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(thisList) => <GroceryListItem item={thisList} select={selectList} delete={deleteList} />}
                renderSeparator={this._renderSeparator}
               
            />
        );
    }
}


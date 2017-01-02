
import React, { Component } from 'react'
import { ListView, Text, View } from 'react-native'
import Grocery from './grocery'
import AddGrocery from './addGrocery'

 const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
 
export default class GroceriesView extends Component {
    componentWillReceiveProps(nextProps){
        if(this.props !== nextProps)
            this.setState({dataSource: ds.cloneWithRows(nextProps.groceries)})
    }
    constructor(props) {
        super();
       
        this.state = {
            dataSource: ds.cloneWithRows(props.groceries),
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
        
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(thisGrocery) => <Grocery grocery={thisGrocery} toggle ={this.props.toggleGrocery}/>}
                renderSeparator={this._renderSeparator}
                />
        );
    }

}
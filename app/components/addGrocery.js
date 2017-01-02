
import React, { Component } from 'react'
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native'

const styles = StyleSheet.create({
    layoutRow: {
        flexDirection: 'column',
        //justifyContent: 'space-between'
    },
    textInput: {
       
    },
    addButton: {
        
}
});
export default class AddGrocery extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }
    render() {
        const {addGrocery, listId} = this.props;
        return (
            <View style={styles.layoutRow}>
                <TextInput
                    value={this.state.text} style={styles.textInput}
                    onChangeText={(text) => this.setState({ text: text })}
                    placeholderTextColor ='gray'
                    placeholder='Add Item'
                   
                    >
                </TextInput>
                <Button
                    title='Add New Item' disabled={ this.state.text ===''} style={styles.addButton} color='green'
                    onPress={() => {
                        addGrocery(this.state.text, listId);
                        this.setState({ text: '' })
                    }
                 } />
            </View>
        )
    }
}




import React, { Component } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    layoutRow: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    textInput: {

    },
    addButton: {
    }
});
export default class NewList extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }
    render() {
        const {addPressed} = this.props;
        return (
            <View style={styles.layoutRow}>
                <TextInput
                    value={this.state.text} style={styles.textInput}
                    onChangeText={(text) => this.setState({ text: text })}
                >
                </TextInput>
                <Button
                    title='Add New List' disabled={this.state.text === ''} style={styles.addButton} color='green'
                    onPress={() => {
                        addPressed(this.state.text);
                        this.setState({ text: '' })
                    }} />
            </View>
        )
    }
}



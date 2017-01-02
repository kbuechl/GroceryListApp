import React, { Component } from 'react'
import { Text, ListView, View, TouchableWithoutFeedback, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    layout: {
        flexDirection: 'row',
        flex: 1
    },
    padded: {
        padding: 4
    },
    textArea: {
        flex: 2,
        borderRightColor: 'lightgray',
        borderRightWidth: 1
    },
    deleteButton: {
        flex: 1
    },
    deleteButtonText: {
        fontSize: 15,
        color: 'red',
    }
});

export default class GroceryListItem extends Component {
    render() {
        // TODO: add count badge next to list name
        const {item, select} = this.props;
        return (
            <View style={styles.layout}>
                <Text onPress={() => select(item.id)} style={[styles.textArea, styles.padded]} > {item.name}</Text>
                <TouchableWithoutFeedback onPress={() => this.props.delete(item.id)} style={styles.deleteButtonText}>
                    <Text style={[styles.deleteButtonText, styles.padded]} >X</Text>
                </TouchableWithoutFeedback>
            </View>

        );
    };
} 
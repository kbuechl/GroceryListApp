import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
    completed: {
        textDecorationLine: 'line-through'
    },
    notCompleted: {
        textDecorationLine: 'none'
    },
    layout: {
        flexDirection: 'row',
        flex: 1
    },
    padded: {
        padding: 4
    },
});

export default class Grocery extends Component {
    render() {
        const {toggle, grocery} = this.props;
        return (
            <View style ={styles.layout}>
                <Text style={[grocery.isComplete ? styles.completed : styles.notCompleted, styles.padded]} onPress={() => this.props.toggle(grocery.id)}>{grocery.name}</Text>
            </View>
        );
    }
}
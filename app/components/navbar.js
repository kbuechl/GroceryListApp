import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight, Text } from 'react-native';

const styles = StyleSheet.create({
    layout: {
        flexDirection: 'row',
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    backButtonText: {
        fontSize: 20,
    },
    title: {
        flex: 2, fontSize: 20, textAlign:'center'
    }
})
export default class NavBar extends Component {

    render() {
        return (
            <View style={styles.layout}>
                <TouchableHighlight onPress={() => this.props.back()}>
                    <Text style={styles.backButtonText} > &lt;--- </Text>
                </TouchableHighlight>
                <Text style={styles.title}>{this.props.title}</Text>
            </View>
        );
    }
}
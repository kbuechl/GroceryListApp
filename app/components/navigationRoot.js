import React, { Component } from 'react';
import { BackAndroid, NavigationExperimental, Text, View } from 'react-native';
import GroceryListsPage from '../containers/groceryListsPage'
import SelectedListPage from '../containers/selectedListPage'
const {    CardStack: NavigationCardStack, } = NavigationExperimental;

export default class NavigationRoot extends Component {
    constructor(props) {
        super(props);
        this._renderScene = this._renderScene.bind(this);
        this._handleNavigate = this._handleNavigate.bind(this);
        this._handleBackAction = this._handleBackAction.bind(this);
    }
    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', this._handleBackAction);
    }
    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress', this._handleBackAction);
    }
    _renderScene({scene}) {
        const {index, route } = scene;
        const {key } = route;
        const {pushRoute} = this.props;
        const makeKeyUnique = (key) => key + '_' + Date.now();
        const getKeyConstant = (uniqueKey) => {
            let index = uniqueKey.indexOf('_')
            return index > 0 ? uniqueKey.substr(0, index) : uniqueKey;
        }
        const gotoRoute = (key, title = '') => {
            pushRoute({ key: makeKeyUnique(key), title: title });
        };
        const gotoSelectedList = (listName) => {
            gotoRoute('selectedList', listName)
        };
        switch (getKeyConstant(key)) {
            case 'selectedList':
                return <SelectedListPage back={this._handleBackAction}/>
            default:
                return <GroceryListsPage gotoSelectedList={gotoSelectedList} />
        }

    };
    _handleBackAction() {
        if (this.props.navigation.index === 0) {
            return false;
        }
        this.props.popRoute();
        return true;
    };
    _handleNavigate(action) {
        switch (action && action.type) {
            case 'push':
                this.props.pushRoute(action.route);
                return true;
            case 'back':
            case 'pop':
                return this._handleBackAction();
            default:
                return false;
        }
    };
    render() {
        return (
            <NavigationCardStack
                direction='vertical'
                navigationState={this.props.navigation}
                onNavigate={this._handleNavigate}
                renderScene={this._renderScene}
            />
        );
    }
}
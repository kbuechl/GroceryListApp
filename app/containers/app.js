import React, { Component } from 'react';
import { Provider } from 'react-redux';

import NavigationRoot from './navigationContainer';
import {configureStore} from '../configureStore'
const store = configureStore();

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <NavigationRoot />
      </Provider>
    );
  }
}

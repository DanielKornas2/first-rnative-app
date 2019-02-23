import React, { Component } from 'react';
import Main from './Main';
import { Provider } from 'react-redux';
import configureStore from "./src/store/configureStore";
 
const store = configureStore();
 
export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Main />
            </Provider>
        );
    }
}
/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';
// import ScanScreen from './src/A';

// AppRegistry.registerComponent(appName, () => ScanScreen);

/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import React, { Component } from 'react';
// import configureStore  from './src/Redux';
import Navigation from './src/Navigator';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import  configureStore from './src/Redux';

const persistor = persistStore(configureStore)
export default class App extends Component {
    render() {
        return (
            < Provider store={configureStore} >
                {/* <PersistGate loading={null} persistor={persistor}>  */}
                <Navigation></Navigation>
                {/* </PersistGate> */}
            </Provider >
        )
    }
}
AppRegistry.registerComponent(appName, () => App);

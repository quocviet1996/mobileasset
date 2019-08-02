import React, { Component } from 'react';
import { createMaterialTopTabNavigator, createStackNavigator, createSwitchNavigator, createBottomTabNavigator, NavigationEvents } from 'react-navigation';
import Splash from '../Component/SplashScreen';
import ListAsset from '../Component/AssetScreen';
import Login from '../Component/LoginScreen';
import CheckModal from '../Component/Modal/CheckModal/CheckModal';
import AcceptModal from '../Component/Modal/AcceptModal';
import AddAssetModal from '../Component/Modal/AddAssetModal';
import AddAsset from '../Component/AddAssetScreen';
import Scanner from '../Component/Scanner';
import A from '../A';
import Generate from '../Component/GenerateScreen';
import {
    View,
    Text,
} from 'react-native';
import { Icon } from 'native-base';
const Scannera = createStackNavigator({
    Scanner: {
        screen: Scanner
    },
    CheckModal: {
        screen: CheckModal
    },

    AcceptModal: {
        screen: AcceptModal
    },
    // AddAsset:{
    //     screen:AddAsset
    // }

}, {
        headerMode: "none",
    })
const bottom = createBottomTabNavigator({
    ListAsset: {
        screen: ListAsset,
        navigationOptions: {
            tabBarLabel: ({ tintColor }) =>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text style={{ fontSize: 10, color: tintColor }}>List Asset</Text>
                </View>,
            tabBarIcon: ({ tintColor }) =>
                <Icon type="FontAwesome" style={{ fontSize: 24, color: tintColor }} name="list-alt">
                </Icon>
        },
    },
  
    Scanner: {
        screen: Scannera,
        navigationOptions: {
            tabBarLabel: ({ tintColor }) =>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text style={{ fontSize: 10, color: tintColor }}>Scanner</Text>
                </View>,
            tabBarIcon: ({ tintColor }) =>
                <Icon type="FontAwesome" style={{ fontSize: 24, color: tintColor }} name="qrcode">
                </Icon>
        }
    },

},
    {
        swipeEnabled: true,
        // shifting: true,
        tabBarPosition: 'bottom',
        initialRouteName: "Scanner",
        tabBarOptions: {
            activeTintColor: "#e94c49",
            style: {
                backgroundColor: "#fff"

            }
        }
    })
const stack1 = createStackNavigator({
    Login: {
        screen: Login,
    },
    bottom: {
        screen: bottom
    },
    AddAsset: {
        screen: AddAsset
    },
    Generate: {
        screen: Generate
    },
},
    {
        initialRouteName: "Login",
        headerMode: 'none',
    })
const RootNavigator = createSwitchNavigator({
    Splash: {
        screen: Splash
    },
    stack1: {
        screen: stack1
    }
}, {
        initialRouteName: "Splash"
    })

export default RootNavigator;


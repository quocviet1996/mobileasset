import React, { Component } from 'react';
import { createMaterialTopTabNavigator, createStackNavigator, createSwitchNavigator, createBottomTabNavigator, NavigationEvents } from 'react-navigation';
import Splash from '../Component/SplashScreen';
import ListAsset from '../Component/AssetScreen';
import Login from '../Component/LoginScreen';
import Scanner from '../Component/Scanner';
import {
    View,
    Text,
} from 'react-native';
import { Icon } from 'native-base';
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
        screen: Scanner,
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
        // navigationOptions: {
        //     header: () => {
        //         <View
        //             style={{
        //                 height: 45,
        //                 marginTop: 20,
        //                 backgroundColor: 'red',
        //                 justifyContent: 'center',
        //             }}>
        //             <Text
        //                 style={{
        //                     color: 'white',
        //                     textAlign: 'center',
        //                     fontWeight: 'bold',
        //                     fontSize: 18,
        //                 }}>
        //                 This is Custom Header
        //   </Text>
        //         </View>

        //     },
        // }
    },
    bottom: {
        screen: bottom
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


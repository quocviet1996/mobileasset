import React, { Component } from 'react';
import { createAppContainer, createStackNavigator, createSwitchNavigator, createBottomTabNavigator, NavigationEvents } from 'react-navigation';
import Splash from '../Component/SplashScreen';
import ListAsset from '../Component/AssetScreen';
import Login from '../Component/LoginScreen';
import Generate from '../Component/Generate';
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
    Generate: {
        screen: Generate,
        navigationOptions: {
            tabBarLabel: ({ tintColor }) =>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text style={{ fontSize: 10, color: tintColor }}>Generate</Text>
                </View>,
            tabBarIcon: ({ tintColor }) =>
                <Icon type="FontAwesome" style={{ fontSize: 24, color: tintColor }} name="qrcode">
                </Icon>
        }
    },
},
    {
        tabBarOptions: {
            activeTintColor:"#e94c49"
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


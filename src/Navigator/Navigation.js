import React, { Component } from 'react';
import { createAppContainer, createStackNavigator, createSwitchNavigator, createBottomTabNavigator, NavigationEvents } from 'react-navigation';
import Splash from '../Component/SplashScreen';
import ListAsset from '../Component/AssetScreen';
// import Profile from '../Component/ProfileScreen';
import Login from '../Component/LoginScreen';
import {
    View,
    Text,
} from 'react-native';
import {Icon} from 'native-base';
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
            <Icon type="FontAwesome" style={{fontSize:24,color:tintColor}} name="list-alt">
            </Icon>

        }
    },
    // Profile: {
    //     screen: Profile,
    //     navigationOptions: {
    //         tabBarLabel: ({ tintColor }) =>
    //             <View style={{
    //                 justifyContent: 'center',
    //                 alignItems: 'center',
    //             }}>
    //                 <Text style={{ fontSize: 10, color: tintColor }}>Profile</Text>
    //             </View>,
    //         tabBarIcon: ({ tintColor }) =>
    //         <Icon type="FontAwesome" style={{fontSize:24,color:tintColor}} name="users">

    //         </Icon>

    //     }
    // }
}, {
        headerMode: 'none',
    })
const stack1 = createStackNavigator({
    Login: {
        screen: Login
    },
    bottom: {
        screen: bottom
    },
    // Chat:{
    //     screen:Chat
    // }
    // ChatRoom: {
    //     screen: ChatRoom
    // },
    // SignUp: {
    //     screen: SignUp
    // }
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


import React, { Component } from 'react';
import { Text } from 'react-native';
import { StackNavigator } from "react-navigation";
import Home from "./src/Component/RootTab";
import Login from "./src/Component/Other/LoginScreen";
const loginName = ""
const App = StackNavigator({
        Main : {
            screen: Home,
            navigationOptions : ({ navigation }) => ({
                header : null
            })
        },
        Login: {
            screen: Login,
            navigationOptions: ({ navigation }) => ({
                header: null,
                title: '登录'
            })
        }
    },
    {
        initialRouteName: 'Login'
    });

export default App;
import React, { Component } from 'react';
import { Text } from 'react-native';
import { StackNavigator } from "react-navigation";
import Home from "./src/Component/RootTab";
import Login from "./src/Component/Other/LoginScreen";
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
                header: '登录'
            })
        }
    },
    {
        initialRouteName: 'Main'
    });

export default App;
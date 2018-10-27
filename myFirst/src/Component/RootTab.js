import React from "react";
import {
    createBottomTabNavigator
} from "react-navigation";

import MainPage from './Main/MainPage';
import MsgPage from './Msg/MsgPage';
import MyPage from './My/MyPage';

const TabNav = createBottomTabNavigator(
    {
        Main: {
            screen: MainPage
        },
        Msg: {
            screen: MsgPage
        },
        My: {
            screen: MyPage
        }
    },
    {
        tabBarOption: {
            activeTintColor: '#000',
            inactiveTintColor: '#000',
            showIcon: true,
            showLable: true,
            upperCaseLabel: false,
            pressColor: '#788493',
            pressOpcity: 0.8,

            style: {
                backgroundColor: '#fff',
                paddingBottom: 1,
                borderTopWidth: 0.2,
                paddingTop: 1,
                borderTopColor: '#ccc'
            },

            labelStyle: {
                fontSize: 11,
                margin: 1
            },

            indicatorStyle: {
                height: 0
            },
        },
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: true,
        lazy: true,
        backBehavior: 'none'
});
export default TabNav;
import React, { Component } from "react";
import { 
    View,
    Text,
    Image,
    TouchableOpacity
 } from "react-native";


export default class extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <View>
                <Image source={require('../../imgs/home_sel.png')}></Image>
                <Text>哈哈哈</Text>
                <View>
                    <Text>text的解放军将是;大姐夫;近代史;富家大室;九分裤;鲁大师减肥;对数据;发件的司法鉴定所了;荆防颗粒;对数据富家大室;减肥法近段时间辅导老师</Text>
                </View>
                <View>
                    <TouchableOpacity>
                        <Image source={require('../../imgs/home_sel.png')}></Image>
                        <Image source={require('../../imgs/home_sel.png')}></Image>
                        <Image source={require('../../imgs/home_sel.png')}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
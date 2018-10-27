import React, { Component } from "react";
import { 
    View,
    Text,
    Dimensions
 } from "react-native";
import EditView from "../Other/EditView";

 const {width, height} = Dimensions.get('window');

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        <View>
            <EditView name='test' onChangeText={this.onChangeText.bind(this)}></EditView>
        </View>
    }
}
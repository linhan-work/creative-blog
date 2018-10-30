import React, { Component } from "react";
import { 
    View,
    StyleSheet,
    TouchableOpacity
 } from "react-native";

export default class ButtonView extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            btnName: 'Button'
        }
    }
    render() {
        return (
            <View>
                <TouchableOpacity style={[styles.btnDefault]}>
                    <Text>{this.props.btnName}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

 const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginBtn: {
        width: 100
    },
    forgetBtn: {

    },

 });
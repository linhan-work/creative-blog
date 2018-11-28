import React, { Component } from "react";
import { 
    View,
    Text,
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
                <TouchableOpacity style={[styles.btnDefault,this.props.style]} onPress={this.props.onPressCallback}>
                    <Text style={styles.txtDefault}>{this.props.btnName}</Text>
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
    btnDefault: {
        height: 30,
        width: 100,
        backgroundColor: 'black',
        borderColor: 'black',
        opacity: 0.6
    },
    txtDefault: {
        color: '#fff',
        fontSize: 15,
        textAlign: 'center',
        lineHeight: 46
    }
 });
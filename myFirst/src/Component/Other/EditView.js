import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    TextInput
 } from "react-native";

 export default class EditView extends React.Component{
    constructor(props) {
        super(props);
        this.setState({
            text: ''
        })
    }
    render() {
        return(
            <View style={styles.TextInputView}>
                <TextInput style={styles.TextInput}
                placeholder={this.props.name}
                onChangeText={(text) => {
                    this.setState({text});
                    this.props.onChangeText(text);
                }} 
                ></TextInput>
             </View>
         );
     }
 }

 const styles = StyleSheet.create({
    TextInputView: {
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#fff',
        borderColor: 'blue',
        marginTop: 10,
        height: 40,
        borderRadius: 5
    },
    TextInput: {
        height: 35,
        margin: 5,
        backgroundColor: '#fff'
    }
 });
import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    ScrollView,
    KeyboardAvoidingView
 } from "react-native";

 export default class EditView extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    render() {
        return(
            // <KeyboardAvoidingView behavior='padding'>
                <View style={styles.TextInputView}>
                    <TextInput style={styles.TextInput}
                    placeholder={this.props.name} 
                    onChangeText={(text) => {
                        this.setState({text});
                        this.props.onChangeText(text);
                    }} 
                    secureTextEntry={this.props.type}//隐藏输入内容
                    underlineColorAndroid = 'transparent'
                    placeholderTextColor= '#666'
                    selectionColor='#fff'
                    ></TextInput>
                </View>
            // </KeyboardAvoidingView>
        );
     }
 }

 const styles = StyleSheet.create({
    TextInputView: {
        justifyContent: 'center',
        flexDirection: 'column',
        borderColor: '#fff',
        borderBottomWidth: 0.5,
        height: 46,
    },
    TextInput: {
        paddingLeft: 0,
        paddingBottom: 0,
        color: '#fff'
    }
 });
import React, { Component } from "react";
import { 
    StyleSheet,
    View,
    Dimensions,
    ImageBackground
 } from "react-native";
import EditView from "../Other/EditView";
import ButtonView from "../Other/ButtonView";

 const {width, height} = Dimensions.get('window');
 const DEVWIDTH = width;

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    render() {
        return (
            <ImageBackground style={styles.imageBg}
            source={require('../../imgs/login_bg.jpg')}>
                <View style={styles.container}>
                    {/* <EditView name='用户名/手机号/邮箱' onChangeText={() => {(text) => {this.setState({
                        username: text
                    })}}} />
                    <EditView name='password' type={true} onChangeText={(text) => {this.setState({
                        password: text
                    })}} /> */}
                    <ButtonView title='登录' type='loginBtn'></ButtonView>
                    <ButtonView title='忘记密码' type='forgetBtn'></ButtonView>
                </View>
            </ImageBackground>
        );
    }
    _onChangeText(text) {
        if(text) {
            this.setState({
                user: text
            });
        }
    }
}
const styles = StyleSheet.create({
    imageBg: {
        width: '100%',
        height: '100%'
    },
    container: {
        marginTop: '75%',
        paddingLeft: '20%',
        paddingRight: '20%'
    }
});

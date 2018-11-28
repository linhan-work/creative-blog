import React, { Component } from "react";
import { 
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
 } from "react-native";


export default class extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.main}>
                    <View style={styles.iconView}>
                        <Image source={require('../../imgs/home_sel.png')} style={styles.icon}></Image>
                            <View style={styles.nicktime}>
                                <Text>昵称</Text>
                                <Text>2018-10-31</Text>
                            </View>
                    </View>
                    <View style={styles.conView}>
                        <Text style={styles.conTxt}>java sccc</Text>
                    </View>
                    
                </View>
                <View style={styles.iconView}>
                    <TouchableOpacity  style={styles.bottOp}>
                        <Image source={require('../../imgs/home_sel.png')} style={styles.bott}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.bottOp}>
                        <Image source={require('../../imgs/home_sel.png')} style={styles.bott}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.bottOp}>
                        <Image source={require('../../imgs/home_sel.png')} style={styles.bott}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: '5%',
        paddingTop: 10,
        paddingBottom: 10
    },
    main:{
        backgroundColor: '#fff',
        paddingRight: 15,
        paddingLeft: 15,
        paddingTop: 15
    },
    iconView: {
        flexDirection: 'row',
        backgroundColor: '#fff',

    },
    icon: {
        borderRadius: 100,
        width: 40,
        height: 40,
        overlayColor: 'blue'
    },
    bottOp: {
        flex: 1,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bott: {
        width: 20,
        height: 20
    },
    conTxt: {
        lineHeight: 22,
        fontSize: 16,
        letterSpacing: 1,
        borderBottomWidth: 0.5,
        borderBottomColor: '#FFFAF0',
        paddingBottom: 30
    },
    nicktime: {
        paddingLeft: 20
    },
    conView: {
        paddingTop: 15
    }
});
import React, { Component } from "react";
import { 
    Text,
    View,
    Image,
    StyleSheet    
} from "react-native";

export default class MainPage extends Component {
    static navigationOptions = {
        tabBarLabel: '主页',
        tabBarIcon: ({focused}) => {
            if(focused) {
                return (
                    <Image style={styles.tabBarIcon} source={require('../../imgs/my_sel.png')} />
                );
            }
            return <Image style={styles.tabBarIcon} source={require('../../imgs/my_no.png')} />
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>哈哈哈</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabBarIcon: {
        width: 21,
        height: 21,
    }
});
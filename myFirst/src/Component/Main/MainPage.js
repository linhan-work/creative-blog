import React, { Component } from "react";
import { 
    Text,
    TextInput,
    View,
    Image,
    StyleSheet,
         
} from "react-native";


export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
    }
    static navigationOptions = {
        tabBarLabel: '主页',
        tabBarIcon: ({focused}) => {
            if(focused) {
                return (
                    <Image style={styles.tabBarIcon} source={require('../../imgs/home_sel.png')} />
                );
            }
            return <Image style={styles.tabBarIcon} source={require('../../imgs/home_no.png')} />
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.search}>
                    <Image style={styles.img} source={require('../../imgs/back.png')}></Image>    
                    <TextInput underlineColorAndroid="transparent" placeholder="输入" style={styles.txt}
                        onChange={this._onChangeText.bind(this)}
                        value={this.state.inputValue}
                        ref="keyWordsInput"
                        onSubmitEditing={() => {this.refs.keyWordsInput.blur()}}
                    ></TextInput>
                    <Image style={styles.img} source={require('../../imgs/search.png')}></Image>
                </View>   
            </View>

        );
    }
    _onChangeText(text) {
        if(text) {
            this.setState({inputValue: text});
            clearTimeout(this.setTimeId);
            this.setTimeId = setTimeout(() => {
                let jsonData = {
                    
                };
                console.log(jsonData);
             
            }, 1000);
            console.log(this.setTimeId);
            
        } else {
            this.setState({inputValue: ''});
        }
    }
};

const styles = StyleSheet.create({
    container: {
        paddingRight: 15,
        paddingLeft: 15,
        marginTop: 10
    },
    search: {
        height: 40,
        backgroundColor: "#fff",
        borderRadius: 10,
        paddingLeft: 25,
        flexDirection: "row",
        alignItems: 'center'
    },
    img: {
        width: 15,
        height: 15
    },
    txt: {
        marginLeft: 10,
        width: 220
    },
    searchView: {
        marginLeft: 0
    },
    tabBarIcon: {
        width: 21,
        height: 21
    }
});
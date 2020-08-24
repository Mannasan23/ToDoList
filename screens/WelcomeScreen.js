import * as React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {Header} from 'react-native-elements';

export default class WelcomeScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                 <Header style= {{marginBottom: 30}}
                    centerComponent={{text: "To-Do List App", style: {color: 'blue', fontSize:25, fontWeight:"bold", width: 300}}}
                />
                <Image source= {require("../assets/notepad.png")} style= {{width: 200, height: 200}}></Image>
                <TouchableOpacity style= {styles.loginButton} onPress = {()=>{
                this.props.navigation.navigate("TaskScreen")}
                }>
                    <Text style= {styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'cyan'
    },
    loginButton: {
        borderWidth: 1.5,
        alignItems: 'center',
        backgroundColor: 'red',
        borderColor: 'orange',
        width: 100,
        height: 40,
        fontWeight: 4,
        borderRadius: 15,
        marginTop: 20
    },
    buttonText: {
        color: 'white',
        fontSize: 25
    }
})
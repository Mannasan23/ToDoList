import * as React from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import firebase from 'firebase';
import db from '../Config';

export default class TaskScreen extends React.Component{
    render(){
        return(
            <View style= {styles.container}>
                <View style= {styles.buttonContainer}>
                    <TextInput style= {styles.taskBox} placeholder= "Enter task" placeholderTextColor= "black">
                    </TextInput>
                    <TouchableOpacity style= {styles.addButton}>
                        <Text style= {styles.buttonText}>Add</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'pink'
    },
    buttonContainer:{
        flex:1,
        alignItems:'center'
    },
    taskBox:{
        width: 300,
        height: 40,
        borderBottomWidth: 1.5,
        borderColor : '#ff8a65',
        fontSize: 20,
        margin:10,
        paddingLeft:10
    },
    addButton: {
        width: 100,
        height: 40,
        borderWidth: 2,
        borderColor: 'red',
        backgroundColor: 'orange',
        fontSize: 23,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 25
    }
})
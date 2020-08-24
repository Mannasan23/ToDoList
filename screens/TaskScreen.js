import * as React from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import firebase, { database } from 'firebase';
import db from '../Config';
import {Header} from 'react-native-elements';

export default class TaskScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            task: '',
            toDo: []
        }
    }

    addTasks = ()=> {
        var word = this.state.task.toLowerCase()
        db.ref('tasks').push({
            task: word,
            status: 'pending'
        })
        this.setState({task: ''})
    }

    readTasks = ()=> {
        var task = []
        db.ref('tasks/').on("value", (data)=> {
            var list = data.val()
            for(var read in list) {
                if(list[read].status == 'pending') {
                    list[read].key = read
                    task.push(list[read])
                }
            }
            console.log(task)
            this.setState({toDo: task})
            task = []
        })
    }

    componentDidMount() {
        this.readTasks();
    }

    render(){
        return(
            <View style= {styles.container}>
                <Header
                    centerComponent={{text: "To-Do List App", style: {color: 'blue', fontSize:25, fontWeight:"bold", width: 300}}}
                />
                <View style= {styles.buttonContainer}>
                    <TextInput style= {styles.taskBox} placeholder= "Enter task" placeholderTextColor= "black"
                    onChangeText= {(text)=> this.setState({task: text})}>
                    </TextInput>
                    <TouchableOpacity style= {styles.addButton} onPress= {this.addTasks}>
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
        alignItems:'center',
        flexDirection: 'row'
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
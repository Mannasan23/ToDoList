import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import firebase from 'firebase';
import db from '../Config';

export default class TaskScreen extends React.Component{
    render(){
        return(
            <View style= {styles.container}>
                <Text>This is the Task Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
})
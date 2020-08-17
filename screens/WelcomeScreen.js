import * as React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

export default class WelcomeScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress = {()=>{
              this.props.navigation.navigate("TaskScreen")}
              }>
              <Text>Login</Text>
            </TouchableOpacity>
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
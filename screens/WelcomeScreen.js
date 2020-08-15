import {React} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class WelcomeScreen extends React.Component{
    render(){
        return(
            <View>
                <TouchableOpacity onPress = {()=>{
              this.props.navigation.navigate("TaskScreen")}
              }>
              <Text>Login</Text>
            </TouchableOpacity>
            </View>
        );
    }
}
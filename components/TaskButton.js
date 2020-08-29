import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import db from '../Config';

export default class TaskButton extends React.Component {
   constructor(props){
      super(props);
      this.state = {
        pressedButtonIndex: '',
      }
      
    }
 
  resetDb = ()=> {
    db.ref('tasks/' + this.props.key + '/')
  }

  render() {
    return (
      <TouchableOpacity
        style={
          this.props.buttonIndex === this.state.pressButtonIndex
                      ? [styles.chunkButton, { backgroundColor: 'green' }]
                      : [styles.chunkButton, { backgroundColor: 'red' }]
          }
        onPress={() => {
          this.setState({ pressButtonIndex: this.props.buttonIndex });
          this.resetDb();
        }}>
        <Text style={
          this.props.buttonIndex === this.state.pressButtonIndex
                        ? [styles.displayText, { color: 'yellow' }]
                        : [styles.displayText, { color: 'white' }]
        }>{this.props.wordChunk}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  displayText: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white'
  },
  chunkButton:{
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    margin: 5,
    backgroundColor: 'red'
  }
});
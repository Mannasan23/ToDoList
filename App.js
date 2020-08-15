import React from 'react';
import {Text, View} from 'react-native';
import TaskScreen from './screens/TaskScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

export default class App extends React.Component {
  render(){
    return (
      <AppContainer></AppContainer>
    );
  }
}

const SwitchNavigator = createSwitchNavigator({
  WelcomeScreen: {screen: WelcomeScreen},
  TaskScreen: {screen: TaskScreen}
})

const AppContainer = createAppContainer(SwitchNavigator)


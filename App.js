import React, {Component} from 'react';

// Navigation
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './src/components/navigation/MainNavigator';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    );
  }
}

export default App;

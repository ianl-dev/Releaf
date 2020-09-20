import React, {Component} from 'react';

// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {
  DefaultTheme,
  Provider as PaperProvider,
  Drawer,
  Avatar,
  withTheme,
} from 'react-native-paper';
import MainNavigator from './src/components/navigation/MainNavigator';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3D9970',
    accent: '#f1c40f',
  },
};

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </PaperProvider>
    );
  }
}

export default App;

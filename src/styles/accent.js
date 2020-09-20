import React from 'react';

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  image: {
    marginLeft: 35,
  },
  container: {
    // Structure
    flex: 1,
    flexDirection: 'column',

    justifyContent: 'center',
    alignItems: 'center',

    // Color
    backgroundColor: '#ffffff',

    // Text
    fontSize: 28,

    padding: 10,
  },

  title: {
    margin: 10,

    textAlign: 'center',

    fontSize: 48,
  },

  button: {
    height: 50,
  },

  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

import React, {Component} from 'react';

import {View} from 'react-native';

import {Button, Text} from 'react-native-paper';

import style from '../styles/accent';

/**
 * Component which renders a basic home screen
 *
 * The home screen allows the user to go to the Plan or Explore sections.
 */

const HomeScreen = ({navigation}) => (
  <View style={style.container}>
    <Text style={style.title}>Releaf</Text>

    {/* Allow the user to go to the plan and explore sections */}
    <Button
      onPress={() => navigation.navigate('DetectRecycling')}
      style={style.button}>
      Scan
    </Button>
    <Button
      onPress={() => navigation.navigate('ShowInstructibles')}
      style={style.button}>
      Make art
    </Button>
    <Button
      onPress={() => navigation.navigate('VirtualPlant')}
      style={style.button}>
      See your plant
    </Button>
  </View>
);

export default HomeScreen;

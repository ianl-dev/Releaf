import React from 'react';

import {View, Image} from 'react-native';

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

    <Image style={style.image} source={require('../images/logo.png')} />

    {/* Allow the user to go to the plan and explore sections */}
    <Button onPress={() => navigation.navigate('Scan')} style={style.button}>
      Scan
    </Button>

    {/* Fetch all instructables to show when entering the*/}
    <Button
      onPress={() => navigation.navigate('SelectTags')}
      style={style.button}>
      Make art
    </Button>
    <Button
      onPress={() => navigation.navigate('ViewPlant')}
      style={style.button}>
      See your plants
    </Button>
  </View>
);

export default HomeScreen;

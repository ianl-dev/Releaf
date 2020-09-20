import {
  Appbar,
  Avatar,
  Searchbar,
  Button,
  Title,
  Paragraph,
} from 'react-native-paper';

import {SafeAreaView, View} from 'react-native';
import React, {useState, useEffect} from 'react';

// Firebase
import {firebaseApp} from '../../../firebase';

import {styles} from '../../../styles/form-style';
import {ScrollView} from 'react-native-gesture-handler';
import {ShowInstructables} from '../art/ShowInstructables';

export default function ViewPlantScreen({navigation}) {
  // Fetch instructables (async wraps everything into another promise)
  function getInstructables() {
    return firebaseApp
      .database()
      .ref('/websites/')
      .once('value')
      .then(function (snapshot) {
        return snapshot.val();
      });
  }

  return (
    <SafeAreaView style={styles.outer}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.navigate('Home')} />
        <Appbar.Content titleStyle={styles.center_art} title="VIRTUAL HERE" />
      </Appbar.Header>

      <View style={styles.container}></View>
    </SafeAreaView>
  );
}

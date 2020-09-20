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

export default function MakeArtScreen({navigation}) {
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

  // getInstructable returns a promise, which shouldn't be set to a variable
  const [selected, setSelected] = useState([]);

  // Handle side effects
  useEffect(() => {
    getInstructables().then((value) => setSelected(value));
  }, [0]);

  return (
    <SafeAreaView style={styles.outer}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.navigate('Home')} />
        <Appbar.Content
          titleStyle={styles.center_art}
          title="Choose your art"
        />
      </Appbar.Header>

      <View style={styles.container}>
        <ShowInstructables
          navigation={navigation}
          selected={selected}
          setSelected={setSelected}></ShowInstructables>
      </View>
    </SafeAreaView>
  );
}

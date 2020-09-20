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

// {
//   /* <Card>
// <Card.Content>
//   <Title>Solar panel car</Title>
// </Card.Content>
// <Card.Cover
//   source={{
//     uri:
//       'https://cdn.instructables.com/ORIG/F8X/662U/HJ49ZR21/F8X662UHJ49ZR21.jpg?auto=webp&frame=1&fit=bounds&md=2b1ed7d46bbd0f4e538201d2794ed48b',
//   }}
// />
// <Card.Actions>
//   <Button mode="contained" onPress={() => getInstructables()}>
//     Make
//   </Button>
// </Card.Actions>
// </Card>
// <Card>
// <Card.Content>
//   <Title>Stuff 2</Title>
//   <Paragraph>Card content</Paragraph>
// </Card.Content>
// <Card.Cover
//   source={{
//     uri:
//       'https://www.instructables.com/id/Makedo-Parrot-Costume-Wearable-Bird-Wings-and-Par/',
//   }}
// />
// <Card.Actions>
//   <Button mode="contained">Make</Button>
// </Card.Actions>
// </Card> */
// }

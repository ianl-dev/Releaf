import {styles} from '../../../styles/form-style';
import {Text, SafeAreaView, View} from 'react-native';
import {TextInput, Appbar, Avatar, Button} from 'react-native-paper';

import {Card, Chip, Title} from 'react-native-paper';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

export function ShowInstructables({navigation, selected, setSelected}) {
  // Set buffer to hold JSX
  var buffer = [];

  // Loop through each instructable and render them
  for (let i = 0; i < selected.length; i++) {
    // Render however many blocks there are
    buffer.push(
      <Card>
        <Card.Content>
          <Title>{selected[i]['Name']}</Title>
        </Card.Content>
        <View>
          {selected[i]['Tags'].split(', ').map((x) => (
            <Chip>{x}</Chip>
          ))}
        </View>
        <Card.Cover
          source={{
            uri: selected[i]['Image'],
          }}
        />
        <Card.Actions>
          <Button
            mode="contained"
            onPress={() =>
              navigation.navigate('Browser', selected[i]['Website'])
            }>
            Make
          </Button>
        </Card.Actions>
      </Card>,
    );
  }

  return (
    <SafeAreaView style={styles.outer}>
      <View style={styles.container}>
        <ScrollView>{buffer}</ScrollView>
      </View>
    </SafeAreaView>
  );
}

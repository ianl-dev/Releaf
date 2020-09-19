import React from 'react';
import {
  Appbar,
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
} from 'react-native-paper';
import {SafeAreaView, View} from 'react-native';
import WebView from 'react-native-webview';

import {styles} from '../../../styles/form-style';
import {ScrollView} from 'react-native-gesture-handler';

export default function MakeArtScreen({navigation}) {
  async function getInstructibles() {}

  async function fetchWebsite() {}

  return (
    <SafeAreaView style={styles.outer}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.navigate('Home')} />
        <Appbar.Content title="AI" />
      </Appbar.Header>

      <View style={styles.container}>
        <ScrollView>
          <Card>
            <Card.Content>
              <Title>Solar panel car</Title>
              <Paragraph>Card content</Paragraph>
            </Card.Content>
            <Card.Cover
              source={{
                uri:
                  'https://www.instructables.com/id/Makedo-Parrot-Costume-Wearable-Bird-Wings-and-Par/',
              }}
            />
            <Card.Actions>
              <Button
                mode="contained"
                onPress={() => navigation.navigate('Browser')}>
                Make
              </Button>
            </Card.Actions>
          </Card>
          <Card>
            <Card.Content>
              <Title>Stuff 2</Title>
              <Paragraph>Card content</Paragraph>
            </Card.Content>
            <Card.Cover
              source={{
                uri:
                  'https://www.instructables.com/id/Makedo-Parrot-Costume-Wearable-Bird-Wings-and-Par/',
              }}
            />
            <Card.Actions>
              <Button mode="contained">Make</Button>
            </Card.Actions>
          </Card>
        </ScrollView>

        <Button
          onPress={() => navigation.navigate('DetectRecycling')}
          style={styles.button}>
          Click
        </Button>

        {/* <WebView
          source={{uri: 'https://blog.jscrambler.com'}}
          style={{marginTop: 20}}
        /> */}
        <View style={styles.btn}>
          <Button>False</Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

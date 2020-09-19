import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {WebView} from 'react-native-webview';
import {styles} from '../../../styles/form-style';
import {Appbar} from 'react-native-paper';

export default function Browser({navigation}) {
  return (
    <SafeAreaView style={styles.outer}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.navigate('MakeArt')} />
        <Appbar.Content title="AI" />
      </Appbar.Header>
      <WebView source={{uri: 'https://blog.jscrambler.com'}} />
    </SafeAreaView>
  );
}

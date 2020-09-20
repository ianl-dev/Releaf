import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {WebView} from 'react-native-webview';
import {styles} from '../../../styles/form-style';
import {Appbar} from 'react-native-paper';

export default function Browser({route, navigation}) {
  const link = route.params;
  return (
    <SafeAreaView style={styles.outer}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.navigate('MakeArt')} />
        <Appbar.Content titleStyle={styles.center_art} title="Make it!" />
      </Appbar.Header>
      <WebView source={{uri: link}} />
    </SafeAreaView>
  );
}

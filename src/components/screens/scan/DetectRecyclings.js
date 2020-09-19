import React from 'react';
import {Button, Text, Appbar, Avatar} from 'react-native-paper';
import {SafeAreaView, View} from 'react-native';

import {styles} from '../../../styles/form-style';

export default function DetectRecyclings() {
  return (
    <SafeAreaView style={styles.outer}>
      <Appbar.Header>
        <Appbar.Content title="AI" />
      </Appbar.Header>

      <View style={styles.container}>
        <Avatar.Icon size={80} icon="clock" style={styles.avatar} />
        <Text style={styles.center}>IAN SUCKS </Text>

        <View style={styles.btn}>
          <Button>False</Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

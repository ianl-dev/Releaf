import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {
  Appbar,
  Avatar,
  Searchbar,
  Button,
  Title,
  Paragraph,
} from 'react-native-paper';
import {styles} from '../../../styles/form-style';
import {ScrollView} from 'react-native-gesture-handler';

import React, {Component} from 'react';

export default function LoginScreen({navigation}) {

  function asyncLogin() {
    return fetch('https://bq5svnu5pi.execute-api.ap-southeast-1.amazonaws.com/default/releaf-login?service=member&operation=login&username=0981010411&password=12345678')
      .then((response) => navigation.navigate("Login"))
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <SafeAreaView style={styles.outer}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.navigate('Home')} />
        <Appbar.Content
          titleStyle={styles.center_art}
          title="Login"
        />
      </Appbar.Header>

      <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View>
        <TextInput
          mode='outlined'
          label='username'
          style={styles.input}
          placeholder={"Username"}
          secureTextEntry={false}
          autoCorrect={false}
          autoCapitalize={'none'}
          returnKeyType={'done'}
        />
        </View>
        <View>
        <TextInput
          mode='outlined'
          label='password'
          style={styles.input}
          placeholder={"Password"}
          secureTextEntry={true}
          autoCorrect={false}
          autoCapitalize={'none'}
          returnKeyType={'done'}
        />
        </View>
        <View style={styles.calendar_btn}>
        <Button
          style={styles.confirm_btn_shape}
          mode="contained"
          onPress={() => navigation.navigate('MakeArt')}>
          Login
        </Button>
      </View>
      <View>
        <Button
          style={styles.confirm_btn_shape_updated}
          mode="none"
          onPress={() => navigation.navigate('Signup')}>
          Create Account
        </Button>
      </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

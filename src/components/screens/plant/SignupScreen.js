import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  TextInput,
  useState, 
  useEffect
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

export default function SignupScreen({navigation}) {
  // const { register, setValue, handleSubmit, errors } = useForm(); // To do, try watch() w/ default val
  // const onSubmit = (data) => {
  //   // Clean data
  //   data.budget = data.budget || "0";
  //   // Save data
  //   setInfo(data);
  // };
  // function onPressSubmit(mode) {
  //   handleSubmit(onSubmit)();
  //   mode == "next" ? setStep(step + 1) : setStep(step - 1); // Two renders per press GOAL: 1 render by summing hooks
  // }
  // // Handle side effects
  // useEffect(() => {
  //   register({ name: "budget" }, { required: false });
  //   setValue("budget", info.budget, false);
  // }, [register]);

  function asyncSignup() {
    return fetch('https://bq5svnu5pi.execute-api.ap-southeast-1.amazonaws.com/default/releaf-login',
      {
        method: 'POST',
        headers: {
          Accept: 'application/x-www-form-urlencode',
          'Content-Type': 'application/x-www-form-urlencode',
        },
        body: "service=member&operation=register_member&username=0981010411&password=12345678",
      })
      .then((response) => navigation.navigate("Login"))
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <SafeAreaView style={styles.outer}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.navigate('Login')} />
        <Appbar.Content
          titleStyle={styles.center_art}
          title="Create Account"
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
          onChangeText={(text) => setValue("username", text, true)}
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
          onChangeText={(text) => setValue("password", text, true)}
        />
        </View>
        <View style={styles.calendar_btn}>
        <Button
          style={styles.confirm_btn_shape}
          mode="contained"
          onPress={asyncSignup}>
          Register
        </Button>
      </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

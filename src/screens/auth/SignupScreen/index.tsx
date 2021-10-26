import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, TextInput, Button, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';

const SignupScreen = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');

  const onSignupPress = () => {
    if (password !== passwordConfirm) {
      Alert.alert('Passwords do not match');
      return;
    }

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(
        () => {},
        error => {
          Alert.alert(error.message);
        },
      );
  };

  const onBackToLoginPress = () => {
    // var navActions = NavigationActions.reset({
    //   index: 0,
    //   actions: [NavigationActions.navigate({routeName: 'Login'})],
    // });
    // this.props.navigation.dispatch(navActions);
  };

  return (
    <View style={{paddingTop: 50, alignItems: 'center'}}>
      <Text>Signup</Text>

      <TextInput
        style={{width: 200, height: 40, borderWidth: 1}}
        value={email}
        onChangeText={text => {
          setEmail(email);
        }}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <View style={{paddingTop: 10}} />

      <TextInput
        style={{width: 200, height: 40, borderWidth: 1}}
        value={password}
        onChangeText={text => {
          setPassword(password);
        }}
        placeholder="Password"
        secureTextEntry={true}
        autoCapitalize="none"
        autoCorrect={false}
      />

      <View style={{paddingTop: 10}} />

      <TextInput
        style={{width: 200, height: 40, borderWidth: 1}}
        value={passwordConfirm}
        onChangeText={text => {
          setPasswordConfirm(passwordConfirm);
        }}
        placeholder="Password (confirm)"
        secureTextEntry={true}
        autoCapitalize="none"
        autoCorrect={false}
      />

      <Button title="Signup" onPress={onSignupPress} />

      <Button title="Back to Login" onPress={onBackToLoginPress} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SignupScreen;

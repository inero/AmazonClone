
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Image, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const defaultprofile = require('../../../assets/Images/defaultprofile.png');

const LoginScreen = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigation = useNavigation();

    const onLoginPress = () => {
        auth().signInWithEmailAndPassword(email, password)
            .then(() => { }, (error) => { Alert.alert(error.message); });
    }

    const onSignupPress = () => {
        navigation.navigate('SignupScreen');
    }

    const onForgotPasswordPress = () => {
        navigation.navigate('ForgotPasswordScreen');
    }

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={defaultprofile} />
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email"
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>
            <TouchableOpacity onPress={onForgotPasswordPress}>
                <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn} onPress={onLoginPress}>
                <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signupBtn} onPress={onSignupPress}>
                <Text style={styles.text}>SignUp</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  
    logo: {
        height: 120,
        width: 120,
        marginBottom: 40,
    },
  
    inputView: {
      backgroundColor: "#f2f2f2",
      borderRadius: 0,
      width: "80%",
      height: 45,
      marginBottom: 20,
      alignItems: "center",
    },
  
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      alignSelf: 'flex-start'
    },
  
    forgot_button: {
      height: 30,
      marginBottom: 30,
      color: 'blue',
    },
  
    loginBtn: {
      width: "80%",
      borderRadius: 0,
      height: 40,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
      backgroundColor: "green",
    },

    signupBtn: {
        width: "80%",
        borderRadius: 0,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: "blue",
      },

    text: {
        fontSize: 16,
        color: 'white',
    }
  });

export default LoginScreen;
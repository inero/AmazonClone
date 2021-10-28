
import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, TextInput, Image, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const defaultprofile = require('../../../assets/Images/defaultprofile.jpg');

const ForgotPasswordScreen = () => {
    const [email, setEmail] = useState<string>('');
    const navigation = useNavigation();

    useEffect(() => {
        
    }, [email]);

    const onResetPasswordPress = () => {
        auth().sendPasswordResetEmail(email)
            .then(() => { }, (error) => { Alert.alert(error.message); });
    }

    const onBackToLoginPress = () => {
       navigation.navigate('LoginScreen');
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
            <TouchableOpacity style={styles.signupBtn} onPress={onResetPasswordPress}>
                <Text style={styles.text}>Reset Password</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn} onPress={onBackToLoginPress}>
                <Text style={styles.text}>Back to Login</Text>
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
      backgroundColor: "grey",
    },
  
    signupBtn: {
        width: "80%",
        borderRadius: 0,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: "green",
      },
  
    text: {
        fontSize: 16,
        color: 'white',
    }
  });
export default ForgotPasswordScreen;

import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

const LoginScreen = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const onLoginPress = () => {
        auth().signInWithEmailAndPassword(email, password)
            .then(() => { }, (error) => { Alert.alert(error.message); });
    }

    const onCreateAccountPress = () => {
        // var navActions = NavigationActions.reset({
        //     index: 0,
        //     actions: [NavigationActions.navigate({routeName: "Signup"})]
        // });
        // this.props.navigation.dispatch(navActions);
    }

    const onForgotPasswordPress = () => {
        // var navActions = NavigationActions.reset({
        //     index: 0,
        //     actions: [NavigationActions.navigate({routeName: "ForgotPassword"})]
        // });
        // this.props.navigation.dispatch(navActions);
    }

    return (
        <View style={{paddingTop:50, alignItems:"center"}}>

            <Text>Login</Text> 

            <TextInput style={{width: 200, height: 40, borderWidth: 1}}
                value={email}
                onChangeText={(text) => { setEmail(email) }}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />

            <View style={{paddingTop:10}} />

            <TextInput style={{width: 200, height: 40, borderWidth: 1}}
                value={password}
                onChangeText={(text) => { setPassword(password) }}
                placeholder="Password"
                secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
            />

            <Button title="Login" onPress={onLoginPress} />
            <Button title="Create account..." onPress={onCreateAccountPress} />
            <Button title="Forgot Password..." onPress={onForgotPasswordPress} />
        </View>
    );
}

const styles = StyleSheet.create({

});

export default LoginScreen;

import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

const ForgotPasswordScreen = () => {

  const [email, setEmail] = useState<'' | undefined>(undefined);

  useEffect(() => {
    
  }, [email]);

    const onResetPasswordPress = () => {
        // firebase.auth().sendPasswordResetEmail(this.state.email)
        //     .then(() => {
        //         Alert.alert("Password reset email has been sent.");
        //     }, (error) => {
        //         Alert.alert(error.message);
        //     });
    }

    const onBackToLoginPress = () => {
        // var navActions = NavigationActions.reset({
        //     index: 0,
        //     actions: [NavigationActions.navigate({routeName: "Login"})]
        // });
        // this.props.navigation.dispatch(navActions);
    }

    return (
        <View style={{paddingTop:50, alignItems:"center"}}>

            <Text>Forgot Password</Text>

            <TextInput style={{width: 200, height: 40, borderWidth: 1}}
                value={email}
                onChangeText={() => { setEmail(email) }}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />

            <Button title="Reset Password" onPress={onResetPasswordPress} />
            <Button title="Back to Login..." onPress={onBackToLoginPress} />
        </View>
    );
}

const styles = StyleSheet.create({

});

export default ForgotPasswordScreen;
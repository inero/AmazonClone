import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import { SafeAreaView, View, Text } from 'react-native';

const Stack = createStackNavigator();

const HeaderComponent = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#e2e2e2'}}>
      <View
        style={{
          margin: 10,
          padding: 5,
          flexDirection: 'row',
          alignItems: 'center',
          height: 200,
        }}>
        <Text></Text>
      </View> 
    </SafeAreaView>
  );
};

const HomeStack = () => {

  return (
    <Stack.Navigator
      screenOptions={{
        header: () => (
          <HeaderComponent/>
        ),
      }}>
      <Stack.Screen name="HomeScreen" options={{title: 'Home'}}>
        {() => <HomeScreen/>}
      </Stack.Screen>
      <Stack.Screen component={ProductScreen} name="ProductDetails" />
    </Stack.Navigator>
  );
};

export default HomeStack;

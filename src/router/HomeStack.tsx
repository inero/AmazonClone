import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import TransactionScreen from '../screens/TransactionScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={HomeScreen} name="Dashboard" />
      <Stack.Screen component={TransactionScreen} name="TransactionScreen" />
      <Stack.Screen component={ProductScreen} name="TransactionDetails" />
    </Stack.Navigator>
  );
};

export default HomeStack;

import React from 'react';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';
import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionPresets,
} from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import Colors from '../utils/Colors';
import CustomDrawer from './CustomDrawer';

// const IntroStack = createStackNavigator();
// export const IntroStackScreen = () => (
//   <IntroStack.Navigator>
//     <IntroStack.Screen
//       name='IntroScreen'
//       component={IntroScreen}
//       options={{ headerShown: false }}
//     />
//   </IntroStack.Navigator>
// );

// const LoginStack = createStackNavigator();
// export const LoginStackScreen = () => (
//   <LoginStack.Navigator
//     screenOptions={{
//       headerShown: false,
//       gestureEnabled: true,
//       cardOverlayEnabled: true,
//       ...TransitionPresets.ModalPresentationIOS,
//     }}
//     mode='modal'
//   >
//     <LoginStack.Screen name='LoginScreen' component={LoginScreen} />
//     <LoginStack.Screen name='ForgetPwScreen' component={ForgetPwScreen} />
//   </LoginStack.Navigator>
// );

// const AuthStack = createStackNavigator();
// export const AuthStackScreen = () => (
//   <AuthStack.Navigator screenOptions={{ headerShown: false }}>
//     <AuthStack.Screen name='AuthScreen' component={AuthScreen} />
//     <AuthStack.Screen name='LoginScreen' component={LoginStackScreen} />
//     <AuthStack.Screen name='SignupScreen' component={SignupScreen} />
//     <AuthStack.Screen
//       name='FinishResetScreen'
//       component={FinishResetPwScreen}
//     />
//   </AuthStack.Navigator>
// );

// const FavoriteStack = createStackNavigator();
// export const FavoriteStackScreen = () => (
//   <FavoriteStack.Navigator
//     screenOptions={{
//       headerShown: false,
//       cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
//     }}
//   >
//     <FavoriteStack.Screen name='FavoriteScreen' component={FavoriteScreen} />
//     <FavoriteStack.Screen name='Detail' component={DetailScreen} />
//   </FavoriteStack.Navigator>
// );

// const PaymentStack = createStackNavigator();
// export const PaymentStackScreen = () => (
//   <PaymentStack.Navigator
//     screenOptions={{
//       headerShown: false,
//       gestureEnabled: true,
//       cardOverlayEnabled: true,
//       ...TransitionPresets.ModalPresentationIOS,
//     }}
//   >
//     <PaymentStack.Screen name='PaymentScreen' component={PaymentScreen} />
//     <PaymentStack.Screen
//       name='AddCreditCardScreen'
//       component={AddCreditCardScreen}
//     />
//   </PaymentStack.Navigator>
// );

// const CartStack = createStackNavigator();
// export const CartStackScreen = () => (
//   <CartStack.Navigator screenOptions={{ headerShown: false }}>
//     <CartStack.Screen name='CartScreen' component={CartScreen} />

//     <CartStack.Screen name='PreOrderScreen' component={PreOrderScreen} />
//     <CartStack.Screen name='Payment' component={PaymentStackScreen} />
//     <CartStack.Screen
//       name='AddCreditCardScreen'
//       component={AddCreditCardScreen}
//     />
//   </CartStack.Navigator>
// );

// const ProductStack = createStackNavigator();
// export const ProductStackScreen = () => (
//   <ProductStack.Navigator
//     screenOptions={{
//       headerShown: false,
//       cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
//     }}
//   >
//     <ProductStack.Screen name='ProductScreen' component={ProductScreen} />
//     <ProductStack.Screen name='DetailScreen' component={DetailScreen} />
//     <ProductStack.Screen name='CartScreen' component={CartStackScreen} />
//   </ProductStack.Navigator>
// );

// const ProfileStack = createStackNavigator();

// export const ProfileStackScreen = () => (
//   <ProfileStack.Navigator
//     screenOptions={{
//       headerShown: false,
//       gestureEnabled: true,
//       cardOverlayEnabled: true,
//       ...TransitionPresets.ModalPresentationIOS,
//     }}
//     mode='modal'
//   >
//     <ProfileStack.Screen name='Profile' component={ProfileScreen} />
//     <ProfileStack.Screen name='ProfileEdit' component={EditProfileScreen} />
//   </ProfileStack.Navigator>
// );

// const HomeStack = createStackNavigator();
// export const HomeStackScreen = () => (
//   <HomeStack.Navigator
//     screenOptions={{
//       headerShown: false,
//       cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
//     }}
//   >
//     <HomeStack.Screen
//       name='Home'
//       component={HomeScreen}
//       //animationEnabled: false , nằm trong option
//     />
//     <HomeStack.Screen name='Detail' component={DetailScreen} />
//     <HomeStack.Screen name='Cart' component={CartStackScreen} />
//     <HomeStack.Screen name='Product' component={ProductStackScreen} />
//     <HomeStack.Screen name='FinishOrder' component={FinishOrderScreen} />
//     <HomeStack.Screen name='ResetPw' component={ResetPwScreen} />
//   </HomeStack.Navigator>
// );

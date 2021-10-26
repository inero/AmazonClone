import React, { useEffect, useState } from 'react';
import { AsyncStorage, YellowBox } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { navigationRef } from './RootNavigation';
// import { urlRedirect } from '../utils/Tools';
import BottomTabNav from './bottomTabNav';
import { Logout } from '../reducers';

const Root = createStackNavigator();

const Router = () => {
  const [value, setValue] = useState<any>(null);
  const dispatch = useDispatch();
  // const isFirstOpen = useSelector((state: any) => state.store.isFirstOpen);

  useEffect(() => {
    const isFirstTime = async () => {
      const firstOpen = await AsyncStorage.getItem('isFirstTime');
      setValue(firstOpen);
    };
    isFirstTime();
    const autoLogout = async () => {
      const getUser = await AsyncStorage.getItem('user');
      if (getUser) {
        const user = await JSON.parse(getUser);
        if (user.data.expireTime - Date.now() < 0) {
          dispatch(Logout());
        }
      }
      return;
    };
    autoLogout();
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <Root.Navigator screenOptions={{headerShown: false}}>
        <Root.Screen component={BottomTabNav} name="HomeTabs" />
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default Router;

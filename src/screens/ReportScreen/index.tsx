import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

const ReportScreen = () => {
  const [proProducts, setProProducts] = useState(undefined);
  const navigation = useNavigation();

  useEffect(() => {
    if (!proProducts) {
      return;
    }
    setProProducts(proProducts);
  }, [proProducts]);

  const onClickPromotion = async () => {
    if (!proProducts) {
      return;
    }

    navigation.navigate('shoppingCart');
  };

  return (
    <ScrollView style={styles.root}>
      
    </ScrollView>
  );
};

export default ReportScreen;

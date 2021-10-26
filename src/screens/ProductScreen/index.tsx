import React, {useState, useEffect} from 'react';
import {Text, ScrollView, ActivityIndicator} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useRoute, useNavigation, RouteProp} from '@react-navigation/native';

import { AppRouteParamList } from '../../API';
import {CartProduct} from '../../models';

import styles from './styles';
import productsList from '../../data/products';

interface ProductItemProps {
  id: string;
  title: string;
  description: string;
  date: string;
  icon: string;
  amount: number;
  type: string;
  status?: boolean;
}

const ProductScreen = () => {
  const [products, setProducts] = useState<ProductItemProps[]|undefined>(productsList);
  const [transaction, setTransaction] = useState<ProductItemProps|null>(null);

  const navigation = useNavigation();
  const route = useRoute<RouteProp<AppRouteParamList, 'Home'>>();
  
  useEffect(() => {
    setProducts(productsList);
  }, []);

  useEffect(() => {
    if (!route?.params?.id) {
      return;
    }
    const transactionItem = products?.find((product: ProductItemProps) => product.id === route?.params?.id);
    setTransaction(transactionItem as ProductItemProps);
  }, [route?.params?.id]);

  const onAddToCart = async () => {
    if (!transaction) {
      return;
    }

    const newCartProduct = new CartProduct({
      userSub: 'user',
      productID: transaction.id,
    });

    // await DataStore.save(newCartProduct);
    navigation.navigate('shoppingCart');
  };

  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>{transaction?.title}</Text>

      <Text style={styles.price}>
        {transaction?.amount}
      </Text>

      <Text style={styles.description}>{transaction?.description}</Text>

    </ScrollView>
  );
};

export default ProductScreen;

import React, {useState, useEffect} from 'react';
import { View, FlatList } from 'react-native';
import CartProductItem from '../../components/CartProductItem';
import productsList from '../../data/products';

const ShoppingCartScreen = () => {
  const [bills, setBills] = useState(productsList);

  useEffect(() => {
    setBills(productsList);
  }, []);

  return (
    <View style={{padding: 10}}>
      <FlatList
        data={bills}
        renderItem={({item}) => <CartProductItem item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ShoppingCartScreen;

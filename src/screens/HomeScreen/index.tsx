import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import ProductItem from '../../components/ProductItem';
// import {DataStore} from 'aws-amplify';
import { Product } from '../../model';
import productsList from '../../data/products';

const HomeScreen = ({searchValue}: {searchValue: string}) => {
  const [products, setProducts] = useState(productsList);

  useEffect(() => {
    setProducts(productsList);
  }, []);

  return (
    <View style={styles.page}>
      {/* Render Product Componet */}
      <FlatList
        data={products}
        renderItem={({item}) => <ProductItem item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});

export default HomeScreen;

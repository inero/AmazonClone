import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, ScrollView, View} from 'react-native';
import {useRoute, RouteProp} from '@react-navigation/native';
import { useSelector } from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { AppRouteParamList } from '../../API';

interface ProductItemProps {
  id: string;
  title: string;
  description: string;
  date: number;
  amount: number;
  mode: string;
  status?: boolean;
  body: string;
  address: string;
  creator: string;
}

const ProductScreen = () => {
  const [transaction, setTransaction] = useState<ProductItemProps|null>(null);
  const messagesList = useSelector((state: any) => state?.message?.messages);
  const route = useRoute<RouteProp<AppRouteParamList, 'Home'>>();
  
  useEffect(() => {
    if (!route?.params?.id) {
      return;
    }
    const transactionItem = messagesList?.find((message: ProductItemProps) => message.id === route?.params?.id);
    setTransaction(transactionItem as ProductItemProps);
  }, [route?.params?.id]);

  return (
    <ScrollView style={styles.root}>
      <View style={styles.header}>
        <View style={{flexDirection: 'row'}}>
          <MaterialIcons name='check-circle' size={50} color="white"/>
          <Text style={styles.title}>
            {transaction?.title}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{width: '70%', flexDirection: 'column'}}>
            <Text style={styles.description}>
              <FontAwesome name='inr' size={18} color="white"/> {transaction?.amount}
            </Text>
            <Text style={styles.helperText}>
              {`${transaction?.mode === 'INCOME' ? 'Credited ' : 'Debited '} to ${transaction?.description} on ${new Date(transaction?.date as any).getDate()}/${new Date(transaction?.date as any).getMonth()}/${new Date(transaction?.date as any).getFullYear()}`}
            </Text>
          </View>
          <View>
            {transaction?.mode === 'INCOME' ?
              <MaterialIcons name='account-balance-wallet' size={100} color="white"/> :
              <MaterialIcons name='payments' size={100} color="white"/>}
          </View>
        </View>
      </View>
      <View style={{padding: 10}}>
        <Text style={styles.text}>Actual Message</Text>
        <Text style={styles.message}>{transaction?.body}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 0,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#3399ff',
    height: 180,
    padding: 10,
  },
  title: {
    color: 'white',
    fontSize: 22,
    paddingLeft: 5,
    paddingTop: 10,
  },
  description: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 45,
    paddingTop: 10,
  },
  helperText: {
    color: 'white',
    fontWeight: '400',
    fontSize: 14,
    paddingLeft: 45,
    paddingTop: 10,
  },
  text: {
    fontSize: 18,
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2'
  },
  message: {
    padding: 15, 
    fontSize: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    lineHeight: 20,
  },
});


export default ProductScreen;

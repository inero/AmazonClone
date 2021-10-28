import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface TransactionItemProps {
  item: {
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
}

const TransactionItem = ({item}: TransactionItemProps) => {
  const navigation = useNavigation();
  const recordDate = new Date(item.date);
  const transDate = `${recordDate.getDate()}/${recordDate.getMonth()}/${recordDate.getFullYear()}`;
  const onPress = () => {
    navigation.navigate('TransactionDetails', {id: item.id});
  };
  const isIncome = item.mode === 'INCOME';
  return (
    <Pressable onPress={onPress} style={styles.root}>
      <View style={styles.leftContainer}>
        {
          item.mode === 'INCOME' ? 
          <MaterialIcons name='account-balance-wallet' size={40} color="green"/> :
          <MaterialIcons name='payments' size={40} color="red"/>
        }
        
      </View>
      <View style={styles.mainContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.description} numberOfLines={2}>
          {item.description}
        </Text>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.icon}>
          {
            !isIncome ? 
            <Text><MaterialIcons name="do-not-disturb-on" color="red" size={15} /> </Text> : 
            <Text><MaterialIcons name="do-not-disturb-off" color="green" size={15} /> </Text>
          } 
          <Text><FontAwesome name="inr" color="black" size={13} /> {item.amount}</Text>
        </View>
        <View style={styles.amount}>
          <Text>{transDate}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default TransactionItem;

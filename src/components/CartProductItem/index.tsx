import React from 'react';
import { View, Text} from 'react-native';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface CartProductItemProps {
  item: {
    id: string;
    title: string;
    description: string;
    date: string;
    icon: string;
    amount: number;
    type: string;
    status: boolean;
  };
}

const CartProductItem = ({item}: CartProductItemProps) => {
  console.log(item);
  const {title, ...bill} = item;

  return (
    <View style={styles.root}>
      <View style={styles.row}>
        <View style={styles.leftContainer}>
          {
            item.type === 'INCOME' ? 
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
              item.status ? 
              <Text><MaterialIcons name="do-not-disturb-on" size={15} /> </Text> : 
              <Text><MaterialIcons name="do-not-disturb-off" size={15} /> </Text>
            } 
            <Text>{item.amount}</Text>
          </View>
          <View style={styles.amount}>
            <Text>{item.date}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartProductItem;

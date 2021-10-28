import React, {useState, useEffect} from 'react';
import { View, StyleSheet, FlatList, Button, Alert, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TransactionItem from '../../components/TransactionItem';
import HeaderComponent from '../../components/HeaderComponent';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMessages } from '../../reducers';

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [messages, setMessages] = useState([]);
  const [totIncome, setTotIncome] = useState<number|undefined>();
  const [totExpense, setTotExpense] = useState<number|undefined>();
  
  const messagesList = useSelector((state: any) => state?.message?.messages);
  const totalIncome = useSelector((state: any) => state?.message?.totalIncome);
  const totalExpense = useSelector((state: any) => state?.message?.totalExpense);

  useEffect(()=>{
    if(messagesList?.length>0){
      setMessages(messagesList.slice(0,4));
      setTotIncome(totalIncome);
      setTotExpense(totalExpense);
    }
  }, [messagesList]);

  useEffect(() => {
    const fetching = async () => {
      try {
        await dispatch(fetchMessages());
      } catch (err) {
        Alert.alert('Error', '' + err);
      }
    };
    fetching();
  }, []);

  const viewMore = () => {
    navigation.navigate('TransactionScreen');
  };

  return (
    <View style={styles.page}>
      <HeaderComponent income={totIncome} expense={totExpense}/>
      <View style={{
          paddingTop: 5,
          paddingBottom: 10,
          marginTop: 2,
          borderColor: '#e6e6e6',
          backgroundColor: '#fff'
        }}>
        <Text style={{
          fontSize: 18,
          padding: 8,
        }}>Latest Transactions</Text>
        <View style={{padding: 3}}>
          <FlatList
            data={messages}
            renderItem={({item}) => <TransactionItem item={item} />}
            showsVerticalScrollIndicator={false}
          />
          <Button title="View more" onPress={viewMore} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 0,
  },
});

export default HomeScreen;

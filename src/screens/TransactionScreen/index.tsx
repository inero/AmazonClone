import React, {useState, useEffect} from 'react';
import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import TransactionItem from '../../components/TransactionItem';
import { useSelector } from 'react-redux';

const TransactionScreen = () => {
  const [messages, setMessages] = useState();
  const messagesList = useSelector((state: any) => state?.message?.messages);
  
  useEffect(() => {
    setMessages(messagesList);
  }, [messagesList]);

  return (
    <SafeAreaView>
      <View style={styles.page}>
        <FlatList
          data={messages}
          renderItem={({item}) => <TransactionItem item={item} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 0,
  },
});

export default TransactionScreen;
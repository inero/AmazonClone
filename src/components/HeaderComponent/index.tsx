import React from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import { AnimatedGaugeProgress } from 'react-native-simple-gauge';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface HeaderComponentProps {
    income: number|undefined;
    expense: number|undefined;
}

const size = 200;
const width = 15;
const cropDegree = 90;
const textOffset = width;
const textWidth = size - (textOffset*2);
const textHeight = size*(1 - cropDegree/360) - (textOffset*2);

const HeaderComponent = ({income=0, expense=0 }: HeaderComponentProps) => {
  const budget = 20000;
  const percentage = expense / budget * 100;
  const safeToSpend = 20000 - expense;

  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
      <View
        style={{
          padding: 5,
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <AnimatedGaugeProgress
          size={size}
          width={width}
          fill={percentage}
          rotation={90}
          cropDegree={cropDegree}
          tintColor="#4682b4"
          backgroundColor="#b0c4de"
          stroke={[2, 2]}
          strokeCap="circle">
            <View style={styles.textView}>
              <Text style={styles.subText}>
                Safe to spend
              </Text>
              <Text style={styles.budget}>
                <FontAwesome name='inr' size={21} color="black"/> {safeToSpend}
              </Text>
              <View style={styles.subTextView}>
                <View style={{padding: 5}}>
                  <Text style={styles.income}>
                    <FontAwesome name='inr' size={14} color="green"/> {income}
                  </Text>
                </View>
                <View style={{padding: 5}}>
                  <Text style={styles.expense}>
                    <FontAwesome name='inr' size={14} color="red"/> {expense}
                  </Text>
                </View>
              </View>
            </View>
        </AnimatedGaugeProgress>
      </View> 
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textView: {
    position: 'absolute',
    top: textOffset + 20,
    left: textOffset,
    width: textWidth,
    height: textHeight,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  subTextView: {
    top: 20,
    flexDirection: 'row',
  },
  budget: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 16,
  },
  income: {
    fontSize: 16,
    color: 'green',
  },
  expense: {
    fontSize: 16,
    color: 'red',
  },
});
  
export default HeaderComponent;
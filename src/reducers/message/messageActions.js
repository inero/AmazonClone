import SmsAndroid from 'react-native-get-sms-android';

export const MESSAGE_LOADING = 'MESSAGE_LOADING'; 
export const GET_MESSAGES = 'GET_MESSAGES';
export const SET_BUEGET = 'SET_BUEGET';

const filter = {
    box: 'inbox',
};
const rupeesPattern = /[rR][sS]\.?\s[,\d]+\.?\d{0,3}|[iI][nN][rR]\.?\s*[,\d]+\.?\d{0,3}/g;
const transactionTypePattern = /(?:(?:credited|debited|credited by|debited by|Credited|Debited|Credited by|Debited by)\.?)/g;
const merchantPattern = /(?:(?:-)\.?\s?)([A-Za-z]*\s?-?\s[A-Za-z]*\s?-?\s[A-Za-z]*\s?-?[A-Za-z]*\s?-?)/g;
const accountNumberPatter = /[0-9]*[XxNn\*]*[0-9]*[XxNn\*]+[0-9]{3,}/g;
// const datePattern = /(\d+\s*(\-|\/)\s*(\w+|\d+)\s*(\-|\/)\s*(\d+)\s*(\d*\:\d+\:\d+)*)/g;


export const setMessageList = (messages) => {
    return {
        type: SET_BUEGET,
        messages,
    };
}

export const fetchMessages = () => {
    return async (dispatch) => {
      dispatch({
        type: MESSAGE_LOADING,
      });
      try {
        SmsAndroid.list(JSON.stringify(filter), (fail) => fail, (count, smsList) => {
            const messageList = JSON.parse(smsList);
            const uniqueList = removeDuplicates(messageList);
            const msgList = formatMessage(uniqueList);
            const totalIncome = getTotalIncome(msgList);
            const totalExpense = getTotalExpense(msgList);
            dispatch({
                type: GET_MESSAGES,
                messages: msgList,
                totalIncome,
                totalExpense,
            });
        });
      } catch (err) {
        throw err;
      }
    };
};

const removeDuplicates = (messages) => {
    let newArray = [];
    let uniqueObject = {};
    for (const i in messages) {
        const objTitle = messages[i]['body'];
        uniqueObject[objTitle] = messages[i];
    }
    for (const i in uniqueObject) {
        newArray.push(uniqueObject[i]);
    }
    return newArray;
}

const formatMessage = (messages) => {
  return messages.filter((msg) => {
    const isRupee = rupeesPattern.test(msg.body);
    if(isRupee){
      return msg;
    }
  }).map((msg, index) => {
    try {
      const [rupees] = msg.body.match(rupeesPattern);
      const transMode = msg.body.match(transactionTypePattern);
      const [paymentMode] = transMode.map((item) => item.toUpperCase()==='CREDITED' || item.toUpperCase()==='CREDITED BY')
      const titleText = msg.body.match(merchantPattern);
      const [description, from] = msg.body.match(accountNumberPatter);
      let transAmount = rupees.replace('INR', '');
      transAmount = transAmount.replace('Rs', '').split(' ');
      const amount = transAmount.length > 1 ? transAmount[1] : transAmount[0];
      const title = (titleText && titleText.length > 0) ? titleText[0].replace('-', '').trim() : (from ? from : 'Unknown Transfer');
      const message = {
        id: index + 1,
        title,
        description,
        date: msg.date,
        amount,
        mode: paymentMode ? 'INCOME' : 'EXPENSE',
        status: true,
        body: msg.body,
        address: msg.address,
        creator: msg.creator,
      }
      return message;
    } catch(ex){
      return {
        ...msg, ...{
          id: index + 1,
          title: 'Unknown Transaction',
          description: 'xxxxxxxxxxxx',
          date: new Date(),
          amount: '',
          mode: 'UNKNOWN',
          status: false,
        }
      }
    }
  });
};

const getTotalIncome = (messages) => {
  return messages.filter((msg) => {
    if(msg.mode==='INCOME'){
      return msg;
    }
  }).reduce((total, msg) => {
    const amt = msg.amount.replace(',', '').trim();
    return total + (!isNaN(amt) ? parseInt(amt) : 0);
  }, 0);
}

const getTotalExpense = (messages) => {
  return messages.filter((msg) => {
    if(msg.mode==='EXPENSE'){
      return msg;
    }
  }).reduce((total, msg) => {
    const amt = msg.amount.replace(',', '').trim();
    return total + (!isNaN(amt) ? parseInt(amt) : 0);
  }, 0);
}
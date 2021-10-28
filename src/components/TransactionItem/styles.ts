import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    borderRadius: 1,
    backgroundColor: '#fff',
    marginVertical: 1,
    padding: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },
  leftContainer: {
    padding: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 50,
  },
  mainContainer: {
    padding: 10,
    flex: 5,
    alignItems: 'flex-start',
  },
  rightContainer: {
    padding: 10,
    alignItems: 'flex-end',
    flex: 3,
    marginRight: 0,
    flexDirection: 'column',
  },
  amount: {
    paddingTop: 1,
    flexDirection: 'row',
  },
  icon: {
    paddingTop: 1,
    flexDirection: 'row',
    backgroundColor: '#fff4',
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 12,
  },
  status: {
    fontSize: 12,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
  },
});

export default styles;

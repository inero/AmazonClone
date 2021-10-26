import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginVertical: 5,
  },
  row: {
    flexDirection: 'row',
  },
  image: {
    flex: 2,
    height: 150,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  oldPrice: {
    fontSize: 12,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
  },
  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  star: {
    margin: 2,
  },
  quantityContainer: {
    margin: 5,
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
    fontSize: 18,
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

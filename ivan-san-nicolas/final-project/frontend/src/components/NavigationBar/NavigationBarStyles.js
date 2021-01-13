import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: '2%',
    backgroundColor: 'brown',
  },
  button: {
    marginLeft: 10,
    marginRight: 10,
  },
  navigationIcon: {
    width: 40,
    height: 40,
  },
});

export default styles;

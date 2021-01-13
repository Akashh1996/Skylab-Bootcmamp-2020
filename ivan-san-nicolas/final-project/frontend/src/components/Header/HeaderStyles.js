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
    alignItems: 'flex-end',
    width: '100%',
    padding: '2%',
    paddingTop: '8%',
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
  userIcon: {
    width: 30,
    height: 30,
    marginBottom: 5,
  },
  absalom__title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 5,
    marginLeft: 15,
  },
});

export default styles;

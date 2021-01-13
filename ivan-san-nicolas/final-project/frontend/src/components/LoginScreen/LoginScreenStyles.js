import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  loginScreen: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  login__title__block: {
    marginTop: 50,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  login__title__headline: {
    color: 'white',
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.60,
    shadowRadius: 2.65,

  },
  login__title__bar: {
    width: '75%',
    height: 4,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.60,
    shadowRadius: 4.65,
  },
  login__title: {
    width: '100%',
    color: 'white',
    fontSize: 40,
    letterSpacing: 2,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 6,
    },
    shadowOpacity: 0.50,
    shadowRadius: 4.65,
  },
  absalomLogo: {
    width: 300,
    height: 300,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 6,
    },
    shadowOpacity: 0.60,
    shadowRadius: 4.65,
  },
  login__button__container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 275,
    marginBottom: 20,
    padding: 10,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.60,
    shadowRadius: 4.65,

    elevation: 8,
  },
  login__button__text: {
    color: '#224864',
    fontSize: 22,
    fontWeight: 'bold',
  },
  login__button__logo: {
    width: 40,
    height: 40,
  },
});

export default styles;

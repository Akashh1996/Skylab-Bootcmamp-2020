import { StyleSheet } from 'react-native'

const loginUserStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  backimage: {
    opacity: 0.8,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  shadow: {
    width: '100%',
    height: '100%',
    opacity: 1,
    backgroundColor: '#000'
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 150
  },
  image: {
    width: 320,
    height: 100
  },
  textLoadingContainer: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textSlogan: {
    flex: 2.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textAction: {
    flex: 0.75,
    alignItems: 'center'
  },
  text: {
    width: 280,
    fontFamily: 'CabinBold',
    alignItems: 'center',
    fontSize: 20,
    lineHeight: 30,
    textAlign: 'center',
    color: '#fff'
  },
  textLoading: {
    width: 250,
    fontFamily: 'CabinBold',
    alignItems: 'center',
    fontSize: 20,
    lineHeight: 30,
    textAlign: 'center',
    marginBottom: 10,
    color: '#fff'
  },
  user: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  buttonUser: {
    width: 260,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#92000A',
    justifyContent: 'center',
    borderRadius: 50,
    elevation: 4
  },
  googleIcon: {
    width: 22,
    height: 22,
    marginRight: 10
  },
  textUser: {
    fontSize: 14,
    fontFamily: 'CabinBold',
    lineHeight: 22,
    textAlign: 'center',
    color: '#fff'
  }
})

export default loginUserStyles

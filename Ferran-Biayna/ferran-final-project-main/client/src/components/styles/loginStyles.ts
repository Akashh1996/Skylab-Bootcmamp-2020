import { StyleSheet } from 'react-native'

const loginStyles = StyleSheet.create({
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
  textSlogan: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textAction: {
    flex: 1,
    alignItems: 'center'
  },
  text: {
    width: 250,
    fontFamily: 'CabinBold',
    alignItems: 'center',
    fontSize: 20,
    lineHeight: 30,
    textAlign: 'center',
    color: '#fff'
  },
  textSearch: {
    flex: 1,
    fontFamily: 'CabinBold',
    fontSize: 25,
    lineHeight: 30,
    textAlign: 'center',
    color: '#fff'
  },
  user: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  buttonUser: {
    width: 260,
    height: 60,
    backgroundColor: '#92000A',
    justifyContent: 'center',
    borderRadius: 50,
    elevation: 4
  },
  textUser: {
    fontSize: 14,
    fontFamily: 'CabinBold',
    lineHeight: 22,
    textAlign: 'center',
    color: '#fff'
  },
  admin: {
    flex: 2,
    alignItems: 'center'
  },
  buttonAdmin: {
    flexDirection: 'row',
    width: 260,
    height: 60,
    backgroundColor: '#1565C0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    elevation: 4
  },
  textAdmin: {
    fontSize: 14,
    paddingRight: 5,
    paddingLeft: 5,
    fontFamily: 'CabinBold',
    lineHeight: 22,
    textAlign: 'center',
    color: '#fff'
  },
  construction: {
    fontSize: 20,
    color: '#fff'
  }
})

export default loginStyles

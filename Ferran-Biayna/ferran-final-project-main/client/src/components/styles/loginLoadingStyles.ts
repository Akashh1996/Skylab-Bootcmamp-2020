import { StyleSheet } from 'react-native'

const loginLoadingStyles = StyleSheet.create({
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 320,
    height: 100
  }
})

export default loginLoadingStyles

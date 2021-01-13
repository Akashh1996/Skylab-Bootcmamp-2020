import { StyleSheet } from 'react-native'

const mapMenuStyles = StyleSheet.create({
  menuContainer: {
    alignItems: 'center',
    position: 'absolute',
    top: 100,
    right: 15
  },
  menu: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 10,
    width: 45,
    height: 150,
    marginTop: 15,
    marginBottom: 15,
    elevation: 10
  },
  restaurant: {
    color: 'blue',
    fontSize: 20
  },
  localBar: {
    color: 'gold',
    fontSize: 20
  },
  localOffer: {
    color: 'violet',
    fontSize: 20
  },
  localActivity: {
    color: 'orange',
    fontSize: 20
  }
})

export default mapMenuStyles

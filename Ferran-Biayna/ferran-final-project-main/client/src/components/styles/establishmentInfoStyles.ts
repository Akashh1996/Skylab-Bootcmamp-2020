import { StyleSheet } from 'react-native'

const establishmentInfoStyles = StyleSheet.create({
  descriptionContainer: {
    height: 45,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    marginBottom: 15
  },
  infoPromo: {
    fontFamily: 'CabinBold',
    fontSize: 13,
    marginBottom: 5
  },
  infoContainer: {
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 15,
    elevation: 3,
    marginBottom: 5
  },
  descriptionTitle: {
    color: '#000',
    fontFamily: 'CabinBold',
    marginBottom: 5,
    paddingLeft: 20
  },
  descriptionContainerText: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    color: '#9E9E9E',
    fontSize: 13,
    paddingLeft: 20,
    marginRight: -15
  },
  description: {
    color: '#9E9E9E',
    fontFamily: 'CabinBold',
    paddingRight: 20,
    paddingLeft: 20
  },
  ubiContainer: {
    alignItems: 'center',
    marginBottom: 5
  },
  ubicationContainer: {
    height: 300,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    marginBottom: 10
  },
  map: {
    width: '100%',
    height: '100%'
  },
  ubication: {
    color: '#9E9E9E',
    fontFamily: 'CabinBold',
    marginLeft: 5
  }
})

export default establishmentInfoStyles

import { StyleSheet } from 'react-native'

const mapPromotionStyles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    width: '100%',
    height: '100%'
  },
  headerTop: {
    backgroundColor: '#92000A',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5
  },
  ubication: {
    marginTop: 20,
    width: 300,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center'
  },
  town: {
    flexDirection: 'row'
  },
  ubicationText: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'CabinBold'
  },
  nearIcon: {
    fontSize: 18,
    color: '#fff'
  },
  nearYouText: {
    color: '#fff',
    fontFamily: 'CabinRegular'
  },
  map: {
    width: '100%',
    height: '100%'
  },
  promotionContainer: {
    alignItems: 'center'
  },
  promotion: {
    borderRadius: 10,
    backgroundColor: '#fff'
  },
  infoContainer: {
    flex: 1
  },
  titleContainer: {
    alignItems: 'center',
    flex: 2,
    marginLeft: 15,
    marginRight: 15
  },
  title: {
    fontFamily: 'CabinBold',
    fontSize: 17,
    marginTop: 4,
    marginBottom: 3
  },
  establishment: {
    fontFamily: 'CabinBold',
    fontSize: 13,
    color: '#7C7C7C',
    marginBottom: 8
  },
  otherInfoContainer: {
    marginLeft: 15,
    marginRight: 15,
    flexDirection: 'column',
    alignItems: 'center'
  },
  otherInfo: {
    color: '#9E9E9E',
    fontSize: 12,
    fontFamily: 'CabinBold'
  },
  calloutContainer: {
    borderRadius: 10,
    elevation: 10
  },
  markerIcons: {
    width: 50,
    height: 50
  }
})

export default mapPromotionStyles

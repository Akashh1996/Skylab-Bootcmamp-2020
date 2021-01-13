import { StyleSheet } from 'react-native'

const detailEstablishmentStyles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    width: '100%',
    height: '100%'
  },
  imageContainer: {
    height: 125,
    marginBottom: 10,
    elevation: 10
  },
  establishmentImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  shadow: {
    width: '100%',
    height: '100%',
    opacity: 0.7,
    backgroundColor: '#000'
  },
  infoContainer: {
    zIndex: 2,
    position: 'absolute',
    top: 65,
    right: 75,
    left: 75,
    height: 60,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#92000A'
  },
  infoContainerSquare: {
    zIndex: 1,
    position: 'absolute',
    top: 95,
    right: 0,
    left: 0,
    height: 30,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#92000A'
  },
  titleContainer: {
    justifyContent: 'center'
  },
  title: {
    fontFamily: 'CabinBold',
    color: '#fff',
    fontSize: 15,
    marginBottom: 4
  },
  schedule: {
    color: '#9E9E9E'
  },
  ubicationIcon: {
    color: '#9E9E9E'
  },
  ubication: {
    color: '#9E9E9E',
    fontFamily: 'CabinBold',
    marginLeft: 5
  },
  descriptionContainer: {
    height: 125,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    marginBottom: 10
  },
  infoPromo: {
    fontFamily: 'CabinBold',
    fontSize: 13,
    marginBottom: 5
  },
  description: {
    color: '#9E9E9E',
    fontFamily: 'CabinBold',
    paddingRight: 20,
    paddingLeft: 20
  },
  valorationsContainer: {
    height: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    elevation: 5,
    marginBottom: 10
  },
  infoValoration: {
    marginLeft: 15,
    fontFamily: 'CabinBold',
    fontSize: 13,
    marginBottom: 5
  },
  numbersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  valContainer: {
    flex: 1.1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  numbersValoration: {
    fontFamily: 'CabinBold',
    color: '#000',
    fontSize: 15
  },
  textValoration: {
    flex: 2,
    color: '#9E9E9E',
    fontFamily: 'CabinBold'
  },
  opinionContainer: {
    height: 85,
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    elevation: 5
  },
  opinionTextContainer: {
    flex: 1.25,
    marginLeft: 15
  },
  opinionStarContainer: {
    flex: 1.5,
    flexDirection: 'row'
  },
  opinionText: {
    color: '#9E9E9E',
    fontFamily: 'CabinBold'
  },
  opinionStar: {
    color: '#C4C4C4'
  },
  ubiContainer: {
    alignItems: 'center',
    marginBottom: 5
  },
  backButton: {
    position: 'absolute',
    zIndex: 2,
    left: 0,
    top: 0,
    right: 0,
    marginLeft: 15,
    marginTop: 35
  },
  backContainer: {
    height: 50,
    width: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  goBack: {
    color: '#fff'
  },
  ubicationContainer: {
    height: 250,
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
  menuContainer: {
    alignItems: 'center'
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFD7DB',
    borderRadius: 10,
    width: 300,
    height: 55,
    marginTop: 5,
    marginBottom: 15,
    elevation: 10
  },
  noActive: {
    color: '#7C7C7C',
    fontSize: 28
  },
  active: {
    color: '#000',
    fontSize: 28
  }
})

export default detailEstablishmentStyles

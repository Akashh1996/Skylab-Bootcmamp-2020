import { StyleSheet } from 'react-native'

const detailPromotionStyles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    width: '100%',
    height: '100%'
  },
  imageContainer: {
    height: 200
  },
  promotionImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  priceContainer: {
    width: 70,
    height: 38,
    backgroundColor: '#660007',
    borderRadius: 10,
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  price: {
    color: '#fff',
    fontFamily: 'CabinBold'
  },
  infoContainer: {
    height: 75,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderBottomColor: '#F1F1F1',
    borderBottomWidth: 1
  },
  titleContainer: {
    justifyContent: 'center',
    marginLeft: 15,
    marginRight: 15
  },
  title: {
    fontFamily: 'CabinBold',
    fontSize: 20,
    marginBottom: 4
  },
  establishment: {
    fontFamily: 'CabinBold',
    fontSize: 15,
    color: '#7C7C7C',
    marginBottom: 8
  },
  star: {
    color: '#E9ED2B'
  },
  otherInfoContainer: {
    height: 75,
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    elevation: 5,
    marginBottom: 10
  },
  otherContainer: {
    justifyContent: 'center',
    marginLeft: 15,
    marginRight: 15
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5
  },
  schedule: {
    color: '#9E9E9E'
  },
  date: {
    color: '#9E9E9E',
    fontFamily: 'CabinBold',
    marginLeft: 5
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
    height: 80,
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
  addButton: {
    marginRight: 25
  },
  backButton: {
    position: 'absolute',
    zIndex: 1,
    left: 0,
    top: 0,
    right: 0,
    marginLeft: 25,
    marginTop: 40
  },
  addContainer: {
    height: 50,
    width: 50,
    borderRadius: 50,
    borderColor: '#F1F1F1',
    backgroundColor: '#fff',
    borderWidth: 3,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backContainer: {
    height: 50,
    width: 50,
    borderRadius: 50,
    borderColor: '#F1F1F1',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderWidth: 3,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  goBack: {
    color: '#fff'
  }
})

export default detailPromotionStyles

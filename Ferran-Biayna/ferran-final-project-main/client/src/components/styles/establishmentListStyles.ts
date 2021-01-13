import { StyleSheet } from 'react-native'

const establishmentListStyles = StyleSheet.create({
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
  promotionsContainer: {
    flexGrow: 1,
    flex: 1,
    height: '100%'
  },
  promotionContainer: {
    alignItems: 'center',
    marginBottom: 15
  },
  promotion: {
    borderRadius: 10,
    backgroundColor: '#fff',
    width: '85%',
    height: 150,
    elevation: 10
  },
  imageContainer: {
    flex: 1
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
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  price: {
    color: '#fff',
    fontFamily: 'CabinBold'
  },
  infoContainer: {
    flex: 0.75
  },
  titleContainer: {
    flex: 1.40,
    justifyContent: 'center',
    marginLeft: 15,
    marginRight: 15
  },
  title: {
    fontFamily: 'CabinBold',
    fontSize: 17,
    marginTop: 4,
    marginBottom: 3
  },
  otherInfoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginRight: 15
  },
  otherInfo: {
    color: '#9E9E9E',
    fontSize: 12,
    fontFamily: 'CabinBold'
  },
  establishment: {
    fontFamily: 'CabinBold',
    fontSize: 15,
    textAlign: 'center',
    color: '#000',
    marginBottom: 8
  },
  noFavorite: {
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoBoard: {
    width: 100,
    height: 100
  }
})

export default establishmentListStyles

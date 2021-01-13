import { StyleSheet } from 'react-native'

const favoritesStyles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    width: '100%',
    height: '100%'
  },
  listContainer: {
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
    width: 110,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ubicationText: {
    color: '#fff',
    fontFamily: 'CabinBold',
    fontSize: 15
  },
  menuContainer: {
    alignItems: 'center'
  },
  favoritesContainer: {
    flexGrow: 1,
    flex: 1,
    height: '100%'
  },
  favoritesList: {
    marginTop: 10
  },
  favoriteContainer: {
    alignItems: 'center',
    marginBottom: 9,
    marginTop: 6
  },
  favorite: {
    borderRadius: 10,
    backgroundColor: '#fff',
    width: '85%',
    height: 125,
    elevation: 5
  },
  imageContainer: {
    flex: 1
  },
  favoriteImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-end'
  },
  infoContainer: {
    flex: 0.60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  establishment: {
    fontFamily: 'CabinBold',
    fontSize: 15,
    color: '#000',
    marginBottom: 8
  },
  deleteButton: {
    marginTop: -5,
    marginRight: -5
  },
  deleteContainer: {
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
  deleteX: {
    fontFamily: 'CabinBold',
    color: '#E00000',
    fontSize: 25
  },
  noFavorite: {
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoBoard: {
    width: 100,
    height: 100
  }
})

export default favoritesStyles

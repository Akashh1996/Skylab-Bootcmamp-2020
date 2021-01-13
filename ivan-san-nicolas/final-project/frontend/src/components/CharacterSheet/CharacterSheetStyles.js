import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: '10%',
  },
  characterSheet: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: '10%',
    marginBottom: '5%',
  },
  characterList__title: {
    width: '100%',
    color: 'white',
    fontSize: 32,
    textAlign: 'center',
    fontWeight: 'bold',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 6,
    },
    shadowOpacity: 0.50,
    shadowRadius: 4.65,
  },
  title__bar: {
    width: '75%',
    height: 4,
    marginTop: 8,
    marginBottom: 8,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.60,
    shadowRadius: 4.65,
  },
  characterSheet__image__container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 70,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.70,
    shadowRadius: 4.65,
    elevation: 8,
  },
  characterSheet__image: {
    width: 380,
    height: 537.43,
    borderRadius: 10,
  },
  imageModal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    borderRadius: 10,
    shadowColor: 'rgba(255, 255, 255, 0)',
  },
  addIcon__block: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    marginBottom: 80,
    position: 'absolute',
    right: 0,
    bottom: 0,
    zIndex: 99,
  },
  addIcon: {
    width: 45,
    height: 45,
  },
  characterSheet__no_images: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    marginTop: 100,
    padding: 10,
    paddingBottom: 40,
    paddingTop: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
  characterSheet__no_images__text: {
    width: '100%',
    color: '#224864',
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  editModal: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '80%',
    height: '20%',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: 'rgba(255, 255, 255, 0)',
  },
  editModal__block: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  editModal__text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#224864',
  },
  editModal__options: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  editModal__editButton: {
    width: 140,
    backgroundColor: '#3D7BA8',
    borderRadius: 10,
  },
  editModal__deleteButton: {
    width: 140,
    backgroundColor: '#D13C3C',
    borderRadius: 10,
  },
});

export default styles;

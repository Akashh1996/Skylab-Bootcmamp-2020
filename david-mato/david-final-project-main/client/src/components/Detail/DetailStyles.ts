import { StatusBar, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    zIndex: 1,
    marginTop: StatusBar.currentHeight,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: 'rgb(230, 84, 84)',
    paddingHorizontal: 15,
  },
  linearGradientBox: {
    position: 'absolute',
    backgroundColor: ' rgba(250, 250, 250, 0.4)',
    width: '100%',
    height: 240,
    alignItems: 'center',
    padding: 10,
  },
  recipeName: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: 'rgba(250, 250, 250, 0.4)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: 15,
  },
  ingredientContainer: {
    height: 100,
    width: 100,
    backgroundColor: 'rgb(23, 153, 158)',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepContainer: {
    shadowColor: '#000',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  stepCard: {
    alignSelf: 'center',
    height: 180,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#FFF',
    elevation: 10,
    justifyContent: 'center',
    padding: 15,
  },
});

export default styles;

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    zIndex: 1,
    width: '100%',
    height: 50,
    backgroundColor: 'rgb(230, 84, 84)',
    paddingHorizontal: 10,
    justifyContent: 'center',
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
});

export default styles;

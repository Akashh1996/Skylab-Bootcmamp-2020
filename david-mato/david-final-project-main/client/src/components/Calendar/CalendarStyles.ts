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
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 29,
    color: 'black',
    textShadowColor: 'white',
    textShadowOffset: { width: 2, height: 2 },
    marginHorizontal: 50,
    borderBottomWidth: 0.7,
    borderBottomColor: 'black',
    marginBottom: 25,
    paddingTop: 10,
    textAlign: 'center',
    paddingBottom: 1,
  },
  menuCard: {
    borderRadius: 5,
    backgroundColor: 'rgb(242, 242, 242)',
    elevation: 5,
    marginHorizontal: 10,
    marginBottom: 15,
  },
});

export default styles;

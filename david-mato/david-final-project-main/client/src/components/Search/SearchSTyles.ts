import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    position: 'relative',
    top: 0,
    zIndex: 1,
    width: '100%',
    backgroundColor: 'rgb(230, 84, 84)',
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  categoriesSectionWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 5,
    marginBottom: 160,
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 13,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: 15,
    color: 'black',
  },
  categoryWrapper: {
    width: '50%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 1,
  },
  categoryContainer: {
    elevation: 10,
    width: 180,
    height: 105,
    marginTop: 13,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryName: {
    fontSize: 20,
    position: 'relative',
    top: 15,
    color: 'rgb(44, 42, 40)',
  },
  categoryImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    resizeMode: 'contain',
    position: 'relative',
    top: 1,
  },
});

export default styles;

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
  headerTitleAndIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 5,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  sectionTitleContainer: {
    marginTop: 17,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: 'rgb(161, 117, 81)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ingredientContainer: {
    marginHorizontal: 20,
    paddingVertical: 12,
    borderBottomWidth: 0.2,
    marginVertical: 1,
    position: 'relative',
  },
});

export default styles;

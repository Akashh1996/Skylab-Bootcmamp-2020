import { StyleSheet } from 'react-native'

const profileStyles = StyleSheet.create({
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
  profile: {
    marginTop: 20,
    width: 110,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center'
  },
  profileText: {
    color: '#fff',
    fontFamily: 'CabinBold',
    fontSize: 15
  },
  photoContainer: {
    height: 90,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 10
  },
  photoPreContainer: {
    height: 70,
    width: 70,
    borderRadius: 50,
    borderColor: '#F1F1F1',
    borderWidth: 3,
    elevation: 5
  },
  photo: {
    width: '100%',
    height: '100%'
  },
  allDescriptionContainer: {
    paddingTop: 10,
    paddingBottom: 10
  },
  descriptionContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 10
  },
  infoProfile: {
    fontFamily: 'CabinBold',
    fontSize: 13,
    marginBottom: 5
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  title: {
    color: '#000',
    fontSize: 12,
    paddingRight: 5
  },
  description: {
    color: '#9E9E9E',
    fontFamily: 'CabinBold'
  },
  adminContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10
  },
  admin: {
    color: '#9E9E9E',
    fontFamily: 'CabinBold'
  },
  skylabContainer: {
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5'
  },
  skylabPreContainer: {
    height: 35,
    width: 35,
    borderRadius: 50,
    borderColor: '#F1F1F1',
    borderWidth: 3
  },
  skylab: {
    width: '100%',
    height: '100%'
  },
  footerText: {
    fontSize: 12
  },
  signOutContainerTotal: {
    height: 75,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 10
  },
  signOutContainer: {
    flex: 0.5,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  signOut: {
    height: 40,
    width: 200,
    backgroundColor: '#1565C0',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  signOutText: {
    color: '#fff',
    fontFamily: 'CabinBold'
  }
})

export default profileStyles

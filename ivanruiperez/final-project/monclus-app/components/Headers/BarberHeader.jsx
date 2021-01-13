import { getStatusBarHeight } from 'react-native-status-bar-height'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, StatusBar, Image, View, Linking } from 'react-native'
import { connect } from 'react-redux'
import * as RootNavigation from '../../RootNavigation'
const iconInstagram = { uri: 'https://trello-attachments.s3.amazonaws.com/5fc76e29bc36da02257e01b6/1067x1067/f11b1e0446bf0b387e5aa74305f0f3fa/icono_insta.png' }
const instagramUrl = 'https://www.instagram.com/p/B-ROA6ri7wB/?hl=es'
function BarberHeader ({ userMongo }) {
  return (
    (userMongo)
      ? (
        <>
          <StatusBar barStyle='dark-content' translucent={true}></StatusBar>
          <View style={ styles.container} >
          <TouchableOpacity style={ styles.userBox} testID='userProfile' onPress={() =>
            RootNavigation.navigate('UserProfile', null)}>
            <Image source={{ uri: userMongo.photo }} style={styles.userPhoto} />
          <Text style={styles.userName}>{`¡Hola ${userMongo.firstname}!`}</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() =>
            Linking.openURL(instagramUrl)}
            >
          <Image source={iconInstagram} style={styles.instagramIcon}/>
          </TouchableOpacity>
          </View>
        </>)
      : (<Text testID='noUser'>Loading...</Text>)
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
    display: 'flex',
    flexDirection: 'row',
    height: 100,
    paddingTop: getStatusBarHeight(),
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    position: 'absolute',
    top: 0,
    width: '100%'
  },
  userName: {
    fontSize: 20,
    marginLeft: 10
  },
  containerBox: {
    display: 'flex',
    flexDirection: 'row'
  },
  userPhoto: {
    borderWidth: 2,
    borderRadius: 50,
    height: '100%',
    width: 50

  },
  userBox: {
    display: 'flex',
    flexDirection: 'row',
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  instagramIcon: {
    width: 40,
    height: 40,
    marginLeft: 80,
    marginRight: 10
  }

})

function mapStateToProps ({ monclusReducer }) {
  return {
    userMongo: monclusReducer.userMongo
  }
}
export default connect(mapStateToProps)(BarberHeader)

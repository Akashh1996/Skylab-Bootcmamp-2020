/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { StyleSheet, View, Image, ImageBackground, TouchableNativeFeedback, Button, Text } from 'react-native'
import { connect } from 'react-redux'
import { loginGoogle, sendUser } from '../../Redux/actions/appActions'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'

const background = { uri: 'https://trello-attachments.s3.amazonaws.com/5fc76e1bc530cd67ea44d949/5fc76e29bc36da02257e01b6/bb0cee9c6a125033c322116ce84e37b2/fondo.jpg' }
const barber = { uri: 'https://trello-attachments.s3.amazonaws.com/5fc76e29bc36da02257e01b6/640x640/e7a2bce7ed913374c1a996f419a8e8ec/barber.jpg' }
const googleIcon = { uri: 'https://trello-attachments.s3.amazonaws.com/5fc76e29bc36da02257e01b6/1067x1067/5b8636b473a064cf8dfb78df25bb1666/icono_google.png' }
const startColor = '#ce2377'
const endColor = '#f8a15e'
function Login ({ dispatch, user, navigation }) {
  function handleLogginClick () {
    dispatch(loginGoogle())
  }
  useEffect(() => {
    if (user) {
      dispatch(sendUser({ id: user.id, firstname: user.givenName, secondname: user.familyName, email: user.email, photo: user.photoUrl }))
      navigation.navigate('MainBarber')
    } else {
      navigation.navigate('Login')
    }
  }, [user])
  return (
            <View style={styles.container}>
                <ImageBackground source={background} style={styles.backgroundimg} />
                <TouchableNativeFeedback style={styles.containerMonclus}>
                    <Image source={barber} style={styles.monclusIcon} />
                </TouchableNativeFeedback>
                <View style={styles.logButtonBox}>
                  <LinearGradient colors={[startColor, endColor]} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} style={{ width: 300, borderRadius: 25 }}>
                <TouchableOpacity style={styles.logButton}
                onPress={() => handleLogginClick()} testID='buttonLoggin'>
                  <Image source={googleIcon} style={styles.googleIcon}/>
                  <Text style={styles.googleText}>Login with Google</Text>
                </TouchableOpacity>
                </LinearGradient>
                </View>
            </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  containerMonclus: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  monclusIcon: {
    width: 250,
    height: 250,
    borderWidth: 2,
    borderRadius: 120,
    zIndex: 1,
    position: 'absolute',
    marginTop: 200

  },
  logButton: {
    display: 'flex',
    flexDirection: 'row',
    width: 300,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25

  },
  logButtonBox: {
    position: 'absolute',
    width: 300,
    marginTop: 500
  },
  googleIcon: {
    width: 35,
    height: 35,
    marginRight: 10
  },
  googleText: {
    color: 'white',
    marginLeft: 10,
    fontSize: 20
  },
  backgroundimg: {
    width: '100%',
    height: '100%'
  }
})
function mapStateToProps ({ monclusReducer }) {
  return {
    user: monclusReducer.user
  }
}
export default connect(mapStateToProps)(Login)

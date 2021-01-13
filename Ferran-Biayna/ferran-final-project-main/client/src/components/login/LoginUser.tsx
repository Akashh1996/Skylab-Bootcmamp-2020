/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react'
import { ImageBackground, Text, View, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import styles from '../styles/loginUserStyles'
import { logoBoardPub, loginBackground, google } from '../../utils/images'
import { connect } from 'react-redux'
import { authReducer } from 'utils/interfaces'
import { checkIfLoggedIn, signInWithGoogleAsync } from '../../actions/authFunctions'

function LoginUser ({ dispatch, logInExists, logInState, navigation }: authReducer) {
  useEffect(() => { dispatch(checkIfLoggedIn()) }, [])

  useEffect(() => {
    if (logInExists) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'application' }]
      })
    } else {
      navigation.navigate('loginUser')
    }
  }, [logInExists])

  return (
    <View style={styles.container} testID="loginUser">
      <ImageBackground source={loginBackground()} style={styles.backimage}>
        <View style={styles.shadow}>
          {logInState
            ? <><View style={styles.logo}>
                  <Image source={logoBoardPub()} style={styles.image} />
                </View>
                <View style={styles.textLoadingContainer}>
                  <Text style={styles.textLoading}>Espera unos segundos, estamos preparando la mesa...</Text>
                  <ActivityIndicator size="large" color="#fff"/>
                </View>
            </>
            : <>
                <View style={styles.logo}>
                  <Image source={logoBoardPub()} style={styles.image} />
                </View>
                <View style={styles.textSlogan}>
                  <Text style={styles.text}>Actualmente tenemos registradas +10.000 promociones de bares, cafeterías y otros locales hosteleros.</Text>
                </View>
                <View style={styles.textAction}>
                  <Text style={styles.text}>¡Descúbrelas con BoardPub!</Text>
                </View>
                <View style={styles.user}>
                  <TouchableOpacity testID={'signIn-button'} style={styles.buttonUser} onPress={() => { dispatch(signInWithGoogleAsync()) }} activeOpacity={0.8}>
                      <Image source={google()} style={styles.googleIcon}/>
                      <Text style={styles.textUser}>CONTINUAR CON GOOGLE</Text>
                  </TouchableOpacity>
                </View>
              </>
          }
        </View>
      </ImageBackground>
    </View>
  )
}

function mapStateToProps ({ authReducer }: any) {
  return {
    logInExists: authReducer.logInExists,
    logInState: authReducer.logInState
  }
}
export default connect(mapStateToProps)(LoginUser)

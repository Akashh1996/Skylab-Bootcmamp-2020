/* eslint-disable no-unused-expressions */
/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react'
import { ImageBackground, View, Image } from 'react-native'
import styles from '../styles/loginLoadingStyles'
import { logoBoardPub, loginBackground } from '../../utils/images'
import { connect } from 'react-redux'
import { checkIfLoggedIn } from '../../actions/authFunctions'
import { authReducer } from 'utils/interfaces'

function Loading ({ dispatch, logInExists, navigation }: authReducer) {
  useEffect(() => {
    setTimeout(function () {
      dispatch(checkIfLoggedIn())
    }, 2500)
  }, [])

  useEffect(() => {
    if (logInExists !== undefined) {
      if (logInExists) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'application' }]
        })
      } else {
        navigation.reset({
          index: 0,
          routes: [{ name: 'login' }]
        })
      }
    }
  }, [logInExists])

  return (
    <View style={styles.container} testID="loading">
      <ImageBackground source={loginBackground()} style={styles.backimage}>
        <View style={styles.shadow}>
          <View style={styles.logo}>
            <Image source={logoBoardPub()} style={styles.image} />
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

function mapStateToProps ({ authReducer }: any) {
  return {
    logInExists: authReducer.logInExists
  }
}
export default connect(mapStateToProps)(Loading)

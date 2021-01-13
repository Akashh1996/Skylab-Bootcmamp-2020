/* eslint-disable no-use-before-define */
import React from 'react'
import { ImageBackground, Text, View, Image, TouchableOpacity } from 'react-native'
import styles from '../styles/loginStyles'
import { logoBoardPub, loginBackground } from '../../utils/images'

export default function Login ({ navigation }:any) {
  return (
    <View style={styles.container} testID="login">
      <ImageBackground source={loginBackground()} style={styles.backimage}>
        <View style={styles.shadow}>
          <View style={styles.logo}>
            <Image source={logoBoardPub()} style={styles.image} />
          </View>
          <View style={styles.textSlogan}>
            <Text style={styles.text}>Las mejores promociones de tus locales hosteleros, en una sola app.</Text>
          </View>
          <View style={styles.textAction}>
            <Text style={styles.text}>¿Qué estás buscando?</Text>
          </View>
          <TouchableOpacity style={styles.user} activeOpacity={0.8} testID='loginUser' onPress={() => navigation.navigate('loginUser')}>
            <View style={styles.buttonUser}>
              <Text style={styles.textUser}>¡HE VENIDO A COMER/BEBER!</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.admin}>
            <View style={styles.buttonAdmin}>
              <Text style={styles.textAdmin}>¡QUIERO PROMOCIONAR MI LOCAL!</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

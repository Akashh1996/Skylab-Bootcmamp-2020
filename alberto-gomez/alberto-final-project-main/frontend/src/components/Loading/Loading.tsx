import React, { useEffect } from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import firebase from 'firebase'

function Loading ({ navigation }) {
  const isFocused = useIsFocused()
  useEffect(() => {
    checkIfLoggedIn()
  }, [isFocused])

  function checkIfLoggedIn () {
    firebase.auth().onAuthStateChanged((firebaseUser) => {
      firebaseUser ? navigation.navigate('Application') : navigation.navigate('Login')
    })
  }

  return (
      <View style={styles.container}>
          <ActivityIndicator
              color="gray"
              size="large"
          />
      </View>
  )
}

export default Loading

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  }
})

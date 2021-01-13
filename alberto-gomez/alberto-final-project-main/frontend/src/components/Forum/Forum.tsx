import React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import BackButton from '../Header/BackButton/BackButton'
import HomeButton from '../Header/HomeButton/HomeButton'

function Forum () {
  return (
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
          <Text>
              Forum works!
          </Text>
          <View style={styles.navButtons}>
              <BackButton />
              <HomeButton />
          </View>
      </ScrollView>
  )
}

const styles = StyleSheet.create({

  navButtons: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  }
})

export default Forum

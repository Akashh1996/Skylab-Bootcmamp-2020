import React from 'react'
import { StyleSheet, View, Image, ImageBackground, TouchableNativeFeedback } from 'react-native'
import * as RootNavigation from '../../RootNavigation'

const background = { uri: 'https://trello-attachments.s3.amazonaws.com/5fc76e1bc530cd67ea44d949/5fc76e29bc36da02257e01b6/32f98acb6ecf12586763af819c73903c/madera.jpg' }
const barber = { uri: 'https://trello-attachments.s3.amazonaws.com/5fc76e29bc36da02257e01b6/640x640/e7a2bce7ed913374c1a996f419a8e8ec/barber.jpg' }

export default function MainPage () {
  return (
        <>
            <View style={styles.container}>
                <ImageBackground source={background} style={styles.backgroundimg} />
                <TouchableNativeFeedback testID='Barber' style={styles.containerMonclus} onPress={() =>
                  RootNavigation.navigate('MainBarber', null)
                }>
                    <Image source={barber} style={styles.monclusIcon} />
                </TouchableNativeFeedback>

            </View>
        </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
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
    position: 'absolute'
  },
  backgroundimg: {
    width: '100%',
    height: '100%'
  }
})

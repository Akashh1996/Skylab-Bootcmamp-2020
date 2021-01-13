/* eslint-disable no-use-before-define */
import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './src/store/configureStore'
import firebase from 'firebase'
import { firebaseConfig } from './src/firebase/config'
import BoardPubNavigation from './src/components/user/navigation/BoardPubNavigation'
import { StatusBar } from 'react-native'
import * as Font from 'expo-font'

const store = configureStore({})

firebase.initializeApp(firebaseConfig)

Font.loadAsync({
  CabinRegular: require('./assets/fonts/Cabin-Regular.ttf'),
  CabinBold: require('./assets/fonts/Cabin-Bold.ttf')
})

export default function App () {
  return (
    <Provider store={store}>
      <StatusBar barStyle='light-content' backgroundColor={'rgba(0,0,0,0)'} translucent={true}/>
      <BoardPubNavigation/>
    </Provider>
  )
}

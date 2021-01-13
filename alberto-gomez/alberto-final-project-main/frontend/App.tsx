import React from 'react'
import HeaderApp from './src/components/Header/Header'
import Loading from './src/components/Loading/Loading'
import LoginWithGoogle from './src/components/LoginWithGoogle/LoginWithGoogle'
import Application from './src/components/Application/Application'
import { Provider as ReduxProvider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import configureStore from './src/redux/configureStore'
import { navigationRef } from './src/components/Application/RootNavigation'

import { firebaseConfig } from './src/config'
import firebase from 'firebase'

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

const store = configureStore({ gameReducer: { gameItem: {}, gameCollection: [] }, userReducer: { user: {} } })
const Stack = createStackNavigator()

function App () {
  return (
      <ReduxProvider store={store}>
          <NavigationContainer ref={navigationRef}>
              <HeaderApp />
              <Stack.Navigator
                  initialRouteName='LoginWithGoogle'
                  screenOptions={{ headerShown: false }}
              >
                  <Stack.Screen
                      component={Loading}
                      name='Loading'
                  />
                  <Stack.Screen
                      component={LoginWithGoogle}
                      name='LoginWithGoogle'
                  />
                  <Stack.Screen
                      component={Application}
                      name='Application'
                  />
              </Stack.Navigator>
          </NavigationContainer>
      </ReduxProvider>
  )
}

export default App

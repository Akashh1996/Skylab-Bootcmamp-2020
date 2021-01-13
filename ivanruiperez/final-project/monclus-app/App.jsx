import * as React from 'react'
import configureStore from './Redux/configureStore'
import { Provider } from 'react-redux'
import MainBarber from './components/Barber/MainBarber'
import BarberHeader from './components/Headers/BarberHeader'
import CalendarBarber from './components/Barber/CalendarBarber'
import Login from './components/Login/Login'
import UserProfile from './components/UserProfile/UserProfile'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import { navigationRef } from './RootNavigation'
import firebase from 'firebase'
import { firebaseConfig } from './firebase'
import { StatusBar } from 'react-native'

firebase.initializeApp(firebaseConfig)
firebase.auth()

const Stack = createStackNavigator()

const store = configureStore({})

export default function App () {
  return (
    <Provider store={store}>
    <StatusBar barStyle='light-content' translucent={true}></StatusBar>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} >
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='UserProfile' component={UserProfile} options={{ headerShown: false }} />
          <Stack.Screen name='MainBarber' component={MainBarber} options={{
            header: () => <BarberHeader />
          }} />
          <Stack.Screen name='CalendarBarber' component={CalendarBarber} options={{
            header: () => <BarberHeader />
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

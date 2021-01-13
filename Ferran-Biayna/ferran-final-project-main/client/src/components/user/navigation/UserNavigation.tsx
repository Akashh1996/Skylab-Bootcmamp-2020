/* eslint-disable no-use-before-define */
import React from 'react'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import Profile from '../Profile'

const { Navigator, Screen } = createStackNavigator()

export default function UserNavigation () {
  return (
    <Navigator headerMode={'none'} screenOptions={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}>
      <Screen name='perfil' component={Profile} />
    </Navigator>
  )
}

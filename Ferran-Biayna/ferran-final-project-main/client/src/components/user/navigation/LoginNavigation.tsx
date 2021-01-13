/* eslint-disable no-use-before-define */
import React from 'react'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import Login from '../../login/Login'
import LoginUser from '../../login/LoginUser'

const { Navigator, Screen } = createStackNavigator()

export default function LoginNavigation () {
  return (
    <Navigator headerMode={'none'} screenOptions={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} >
        <Screen name='loginStart' component={Login} />
        <Screen name='loginUser' component={LoginUser}/>
    </Navigator>
  )
}

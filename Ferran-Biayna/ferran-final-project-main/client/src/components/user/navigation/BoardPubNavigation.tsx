/* eslint-disable no-use-before-define */
import React from 'react'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import ApplicationNavigation from './ApplicationNavigation'
import LoginNavigator from './LoginNavigation'
import Loading from '../../loading/Loading'
import { NavigationContainer } from '@react-navigation/native'

const { Navigator, Screen } = createStackNavigator()

export default function BoardPubNavigation () {
  return (
      <NavigationContainer>
        <Navigator headerMode={'none'} screenOptions={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}>
            <Screen name={'splash'} component={Loading}/>
            <Screen name={'login'} component={LoginNavigator}/>
            <Screen name={'application'} component={ApplicationNavigation}/>
        </Navigator>
      </NavigationContainer>
  )
}

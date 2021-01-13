/* eslint-disable no-use-before-define */
import React from 'react'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import FavoritesMenu from '../FavoritesMenu'
import DetailEstablishment from '../DetailEstablishment'

const { Screen, Navigator } = createStackNavigator()

export default function FavoritesNavigation () {
  return (
    <Navigator headerMode={'none'} initialRouteName={'favoritos'} screenOptions={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}>
      <Screen name='favoritos' component={FavoritesMenu} />
      <Screen name='detail-establishment' component={DetailEstablishment} />
    </Navigator>
  )
}

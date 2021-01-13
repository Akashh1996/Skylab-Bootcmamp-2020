/* eslint-disable no-use-before-define */
import React from 'react'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import MapPromotions from '../MapPromotions'
import DetailPromotion from '../DetailPromotion'

const { Navigator, Screen } = createStackNavigator()

export default function MapsNavigation () {
  return (
    <Navigator headerMode={'none'} initialRouteName={'map'} screenOptions={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}>
      <Screen name='map' component={MapPromotions} />
      <Screen name='detailMap' component={DetailPromotion} />
    </Navigator>
  )
}

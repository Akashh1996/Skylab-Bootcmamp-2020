/* eslint-disable no-use-before-define */
import React from 'react'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import HomePromotionsMenu from '../HomePromotionsMenu'
import DetailPromotion from '../DetailPromotion'

const Stack = createStackNavigator()

export default function HomeNavigation () {
  return (
    <Stack.Navigator headerMode={'none'} initialRouteName={'promotions'} screenOptions={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}>
        <Stack.Screen name='promotions' component={HomePromotionsMenu} />
        <Stack.Screen name='detail' component={DetailPromotion}/>
    </Stack.Navigator>
  )
}

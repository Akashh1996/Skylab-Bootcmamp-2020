/* eslint-disable multiline-ternary */
/* eslint-disable react/display-name */
/* eslint-disable no-use-before-define */
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons'
import HomeNavigation from './HomeNavigation'
import MapsNavigation from './MapsNavigation'
import UserNavigation from './UserNavigation'
import FavoritesNavigation from './FavoritesNavigation'

const { Navigator, Screen } = createBottomTabNavigator()

export default function ApplicationNavigation () {
  return (
    <Navigator backBehavior={'none'} screenOptions={({ route }) => ({
      tabBarIcon: ({ color }:any) => {
        let iconName = null
        route.name === 'Ofertas' ? iconName = 'style'
          : route.name === 'Buscador' ? iconName = 'explore'
            : route.name === 'Favoritos' ? iconName = 'bookmark'
              : iconName = 'person'
        return <Icon name={iconName} size={25} color={color} />
      }
    })}
    tabBarOptions={{
      activeTintColor: '#000',
      inactiveTintColor: '#7C7C7C',
      style: { height: 60, paddingBottom: 5 },
      labelStyle: { fontFamily: 'CabinBold', fontSize: 12 }
    }}
    >
      <Screen name='Ofertas' component={HomeNavigation} />
      <Screen name='Buscador' component={MapsNavigation} />
      <Screen name='Favoritos' component={FavoritesNavigation} />
      <Screen name='Perfil' component={UserNavigation} />
    </Navigator>
  )
}

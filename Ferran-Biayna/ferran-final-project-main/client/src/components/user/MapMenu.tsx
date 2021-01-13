/* eslint-disable no-use-before-define */
import React from 'react'
import style from '../styles/mapMenuStyles'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function MapMenu () {
  return (
    <View style={style.menuContainer}>
        <View style={style.menu}>
          <Icon name="restaurant" style={style.restaurant} />
          <Icon name="local-bar" style={style.localBar} />
          <Icon name="local-offer" style={style.localOffer} />
          <Icon name="local-activity" style={style.localActivity} />
        </View>
      </View>
  )
}

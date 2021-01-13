/* eslint-disable no-use-before-define */
import React from 'react'
import style from '../styles/homePromotionsMenuStyles'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function ListMenu ({ typePromotion }:any) {
  return (
      <View style={style.menuContainer}>
        <View style={style.menu}>
          <Icon name="restaurant" style={typePromotion === 'menu' ? style.active : style.noActive} />
          <Icon name="local-bar" style={typePromotion === 'drink' ? style.active : style.noActive} />
          <Icon name="local-offer" style={typePromotion === 'pack' ? style.active : style.noActive} />
          <Icon name="local-activity" style={typePromotion === 'other' ? style.active : style.noActive} />
        </View>
      </View>
  )
}

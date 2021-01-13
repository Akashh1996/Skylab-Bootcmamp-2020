/* eslint-disable no-use-before-define */
import React from 'react'
import style from '../styles/detailEstablishmentStyles'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function EstablishmentMenu ({ filterPage }:any) {
  return (
        <View style={style.menuContainer}>
            <View style={style.menu}>
              <Icon name='assignment' style={filterPage === 'promotions' ? style.active : style.noActive} />
              <Icon name='info' style={filterPage === 'information' ? style.active : style.noActive} />
              <Icon name='map' style={filterPage === 'map' ? style.active : style.noActive}/>
            </View>
          </View>
  )
}

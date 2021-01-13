/* eslint-disable no-use-before-define */
import React from 'react'
import { View, Image } from 'react-native'
import style from '../styles/loadingStyles'
import { loading } from '../../utils/images'

export default function Loading ():any {
  return (
    <View style={style.loadingImageContainer} testID="loading">
      <Image source={loading()} style={style.loadingImage}/>
    </View>
  )
}

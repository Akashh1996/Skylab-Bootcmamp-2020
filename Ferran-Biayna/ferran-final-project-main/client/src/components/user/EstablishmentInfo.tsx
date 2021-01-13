/* eslint-disable no-use-before-define */
import React from 'react'
import { View, Text, ScrollView, Dimensions, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import style from '../styles/establishmentInfoStyles'
import EstablishmentMenu from './EstablishmentMenu'

const { width } = Dimensions.get('window')

export default function EstablishmentInfo ({ filterPage, establishment }:any) {
  return (
    <View style={listStyle.listContent}>
      <EstablishmentMenu filterPage={filterPage}/>
      <View style={style.descriptionContainer}>
        <Text style={style.infoPromo}>INFORMACIÓN DEL ESTABLECIMIENTO</Text>
      </View>
      <ScrollView>
        <View style={style.infoContainer}>
          <Text style={style.descriptionTitle}>Ubicación</Text>
          <View style={style.descriptionContainerText}>
            <Icon name={'location-on'} style={style.icon}/>
            <Text style={style.description}>{establishment.ubication}</Text>
          </View>
          <View style={style.descriptionContainerText}>
            <Icon name={'home'} style={style.icon}/>
            <Text style={style.description}>{establishment.city}</Text>
          </View>
        </View>
        <View style={style.infoContainer}>
          <Text style={style.descriptionTitle}>Contacto y Horario</Text>
          <View style={style.descriptionContainerText}>
            <Icon name={'phone'} style={style.icon}/>
            <Text style={style.description}>{establishment.phone}</Text>
          </View>
          <View style={style.descriptionContainerText}>
            <Icon name={'schedule'} style={style.icon}/>
            <Text style={style.description}>{establishment.schedule}</Text>
          </View>
        </View>
        <View style={style.infoContainer}>
          <Text style={style.descriptionTitle}>Descripción</Text>
          <Text style={style.description}>{establishment.description}</Text>
        </View>
    </ScrollView>
    </View>
  )
}

const listStyle = StyleSheet.create({
  listContent: {
    flex: 1,
    width: width,
    position: 'relative'
  }
})

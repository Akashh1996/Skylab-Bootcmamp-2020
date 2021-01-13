/* eslint-disable no-use-before-define */
import React from 'react'
import { View, Text, Dimensions, StyleSheet, Linking, TouchableOpacity } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import style from '../styles/establishmentInfoStyles'
import EstablishmentMenu from './EstablishmentMenu'

const { width } = Dimensions.get('window')

export default function EstablishmentMap ({ filterPage, establishment }:any) {
  return (
      <View style={listStyle.listContent}>
        <EstablishmentMenu filterPage={filterPage}/>
        <View style={style.descriptionContainer}>
          <Text style={style.infoPromo}>¿DÓNDE ESTÁ SITUADO?</Text>
        </View>
          <TouchableOpacity testID={'establishmentMap'} style={style.ubicationContainer} onPress={() => Linking.openURL(`geo:0,0?q=${establishment.coords.latitude},${establishment.coords.longitude}`)} activeOpacity={1}>
              <MapView style={style.map} initialRegion={{ latitude: establishment.coords.latitude, longitude: establishment.coords.longitude, latitudeDelta: 0.006, longitudeDelta: 0.006 }}>
                <Marker coordinate={{
                  latitude: establishment.coords.latitude,
                  longitude: establishment.coords.longitude
                }}>
                </Marker>
              </MapView>
          </TouchableOpacity>
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

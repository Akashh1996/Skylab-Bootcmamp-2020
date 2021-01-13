/* eslint-disable no-use-before-define */
import React from 'react'
import { View, Text } from 'react-native'
import style from '../styles/mapPromotionStyles'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { connect } from 'react-redux'
import { distancePoints, colorMarkerType } from '../../utils/functions'
import MapView, { Callout, Circle, Marker } from 'react-native-maps'
import { Promotion } from 'utils/interfaces'
import MapMenu from './MapMenu'

function MapPromotions ({ navigation, promotions, latitude, longitude, city }:any) {
  return (
    <View testID={'map-promotions'} style={style.container}>
        <View style={style.headerTop}>
            <View style={style.ubication}>
            {!latitude
              ? <View style={style.town}>
              <Icon name="near-me" style={style.nearIcon}/>
              <Text style={style.ubicationText}>No hay ubicación</Text>
            </View>
              : <>
                <View style={style.town}>
                  <Icon name="near-me" style={style.nearIcon}/>
                  <Text style={style.ubicationText}>{city}</Text>
                </View>
                <Text style={style.nearYouText}>A 1km de tu posición</Text>
              </>}
            </View>
        </View>
        <MapMenu/>
        {!latitude
          ? <MapView style={style.map} initialRegion={{ latitude: 41.398337, longitude: 2.1997869, latitudeDelta: 0.03, longitudeDelta: 0.03 }}>
            {promotions?.map((promotion:Promotion) => (
              <Marker pinColor={colorMarkerType(promotion.type)} key={promotion._id} coordinate={{
                latitude: promotion.establishment.coords.latitude,
                longitude: promotion.establishment.coords.longitude
              }}
              >
                <Callout testID={'detailMap'} onPress={() => navigation.navigate('detailMap', { id: promotion._id })}>
                  <View style={style.promotionContainer}>
                    <View style={style.titleContainer}>
                      <Text style={style.title}>{promotion.name}</Text>
                      <Text style={style.establishment}>{promotion.establishment.name}</Text>
                    </View>
                    <View style={style.otherInfoContainer}>
                      <Text style={style.otherInfo}>{promotion.date}</Text>
                    </View>
                  </View>
                </Callout>
              </Marker>
            ))}
            </MapView>
          : <MapView style={style.map} initialRegion={{ latitude: latitude, longitude: longitude, latitudeDelta: 0.03, longitudeDelta: 0.03 }}>
              <Marker coordinate={{ latitude: latitude, longitude: longitude }} title={'Tu posición'}/>
              <Circle center={{ latitude: latitude, longitude: longitude }} radius={1000} zIndex={-1} fillColor={'rgba(100, 100, 100, 0.3)'}/>
              {promotions?.filter((promotion: Promotion) => Number(distancePoints(latitude,
                longitude, promotion.establishment.coords.latitude, promotion.establishment.coords.longitude)) < 1)
                .map((promotion:Promotion) => (
                  <Marker pinColor={colorMarkerType(promotion.type)} key={promotion._id} coordinate={{
                    latitude: promotion.establishment.coords.latitude,
                    longitude: promotion.establishment.coords.longitude
                  }}
                  >
                    <Callout testID={'detailMap'} onPress={() => navigation.navigate('detailMap', { id: promotion._id })}>
                      <View style={style.promotionContainer}>
                        <View style={style.titleContainer}>
                          <Text style={style.title}>{promotion.name}</Text>
                          <Text style={style.establishment}>{promotion.establishment.name}</Text>
                        </View>
                        <View style={style.otherInfoContainer}>
                          <Text style={style.otherInfo}>{promotion.date}</Text>
                          <Text style={style.otherInfo}>{distancePoints(latitude, longitude, promotion.establishment.coords.latitude, promotion.establishment.coords.longitude)} km</Text>
                        </View>
                      </View>
                    </Callout>
                  </Marker>
                ))}
          </MapView>
        }
    </View>
  )
}

function mapStateToProps ({ promotionsReducer, locationReducer }: any) {
  return {
    promotions: promotionsReducer.promotions,
    city: locationReducer.city,
    latitude: locationReducer.latitude,
    longitude: locationReducer.longitude
  }
}
export default connect(mapStateToProps)(MapPromotions)

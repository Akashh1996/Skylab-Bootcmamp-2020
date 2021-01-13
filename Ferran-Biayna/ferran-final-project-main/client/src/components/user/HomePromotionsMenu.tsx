/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react'
import style from '../styles/homePromotionsMenuStyles'
import { HomeReducer } from '../../utils/interfaces'
import { View, Text, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { connect } from 'react-redux'
import { requestPromotions } from '../../actions/promotionsFunctions'
import { getPermissionsUbication } from '../../actions/locationFunctions'
import Loading from '../loading/LoadingGif'
import { typesFood } from '../../utils/functions'
import HomePromotions from './HomePromotionsList'

function HomePromotionsMenu ({ promotions, dispatch, navigation, latitude, longitude, city }:HomeReducer) {
  useEffect(() => {
    if (!city) {
      dispatch(getPermissionsUbication())
    }
  }, [city])

  useEffect(() => {
    if (!promotions || !promotions?.length) {
      dispatch(requestPromotions())
    }
  }, [promotions])

  return (
    <View testID={'list-promotions'} style={style.container}>
      <View style={style.headerTop}>
        <View style={style.ubication}>
          {!city
            ? <View style={style.town}>
                <Icon name="near-me" style={style.nearIcon}/>
                <Text style={style.ubicationText}>No hay ubicación</Text>
              </View>
            : <>
                <View style={style.town}>
                  <Icon name="near-me" style={style.nearIcon}/>
                  <Text style={style.ubicationText}>{city}</Text>
                </View>
                <Text style={style.nearYouText}>¿Qué te apetece hoy?</Text>
              </>}
          </View>
      </View>
      {!promotions
        ? <Loading/>
        : promotions.length && <ScrollView horizontal={true} pagingEnabled={true}>
          {typesFood().map((typePromotion:string) =>
          <HomePromotions key={typePromotion} typePromotion={typePromotion} latitude={latitude} longitude={longitude}
          promotions={promotions.filter((promotion) => promotion.type === typePromotion)} navigation={navigation} />
          )}
        </ScrollView>}
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
export default connect(mapStateToProps)(HomePromotionsMenu)

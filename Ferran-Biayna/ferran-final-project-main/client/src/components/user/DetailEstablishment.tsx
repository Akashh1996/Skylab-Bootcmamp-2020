/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react'
import { DetailEstablishmentReducer } from '../../utils/interfaces'
import { View, Text, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import Loading from '../loading/LoadingGif'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { getEstablishment } from '../../actions/promotionsFunctions'
import style from '../styles/detailEstablishmentStyles'
import { typesEstablishmentPages } from '../../utils/functions'
import EstablishmentList from './EstablishmentList'
import EstablishmentInfo from './EstablishmentInfo'
import EstablishmentMap from './EstablishmentMap'

function DetailEstablishment ({ establishment, dispatch, route, navigation }: DetailEstablishmentReducer) {
  const { params: { id } } = route

  useEffect(() => { dispatch(getEstablishment(id)) }, [])

  return (
    <View testID={'detail-establishment'} style={style.container}>
      {!establishment || establishment._id !== id
        ? <Loading />
        : <>
          <View style={style.imageContainer}>
            <ImageBackground source={{ uri: establishment.photo }} style={style.establishmentImage} >
              <TouchableOpacity style={style.backButton} testID="goBackButton" onPress={() => navigation.goBack()} activeOpacity={0.8}>
                <View style={style.backContainer}>
                  <Icon name="arrow-back" size={35} style={style.goBack}/>
                </View>
              </TouchableOpacity>
              <View style={style.infoContainerSquare}></View>
              <View style={style.infoContainer}>
                <View style={style.titleContainer}>
                  <Text style={style.title}>{establishment.name}</Text>
                </View>
              </View>
              <View style={style.shadow}></View>
            </ImageBackground>
          </View>
          <ScrollView horizontal={true} pagingEnabled={true}>
            {typesEstablishmentPages().map((page:string) =>
              page === 'promotions'
                ? <EstablishmentList key={page} filterPage={page} promotions={establishment.promotions}/>
                : page === 'map'
                  ? <EstablishmentMap key={page} filterPage={page} establishment={establishment}/>
                  : <EstablishmentInfo key={page} filterPage={page} establishment={establishment}/>
            )}
          </ScrollView>
        </>
      }
    </View>
  )
}

function mapStateToProps ({ promotionsReducer }: any) {
  return {
    establishment: promotionsReducer.establishment
  }
}
export default connect(mapStateToProps)(DetailEstablishment)

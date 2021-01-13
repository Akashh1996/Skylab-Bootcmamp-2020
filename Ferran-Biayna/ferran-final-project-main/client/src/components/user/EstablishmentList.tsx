/* eslint-disable no-use-before-define */
import React from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Dimensions, ImageBackground, Image } from 'react-native'
import { Promotion } from 'utils/interfaces'
import style from '../styles/establishmentListStyles'
import EstablishmentMenu from './EstablishmentMenu'
import { logoBoard } from '../../utils/images'

const { width } = Dimensions.get('window')

export default function EstablishmentList ({ filterPage, promotions, navigation }:any) {
  return (
    <View testID={'establishmentList'} style={listStyle.listContent}>
        <EstablishmentMenu filterPage={filterPage}/>
        <View style={style.descriptionContainer}>
          <Text style={style.infoPromo}>PROMOCIONES ACTIVAS</Text>
        </View>
        {promotions.length
          ? <>
            <FlatList data={promotions} keyExtractor={(item: Promotion) => item.name}
                renderItem={({ item }) => (<TouchableOpacity testID={'promotion'} key={item.name} style={style.promotionContainer} activeOpacity={0.9}
                onPress={() => navigation.navigate('detail', { id: item._id })}>
                    <View style={style.promotion}>
                        <View style={style.imageContainer}>
                            <ImageBackground source={{ uri: item.photo }} style={style.promotionImage} imageStyle={{ borderRadius: 10 }}>
                                <View style={style.priceContainer}>
                                    <Text style={style.price}>{item.price}</Text>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={style.infoContainer}>
                            <View style={style.titleContainer}>
                                <Text style={style.title}>{item.name}</Text>
                            </View>
                            <View style={style.otherInfoContainer}>
                                <Text style={style.otherInfo}>{item.date}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>)}
            />
            </>
          : <View style={style.noFavorite}>
          <Text style={style.establishment}>{'No hay promociones activas\nactualmente...'}</Text>
          <Image source={logoBoard()} style={style.logoBoard}/>
        </View>}
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

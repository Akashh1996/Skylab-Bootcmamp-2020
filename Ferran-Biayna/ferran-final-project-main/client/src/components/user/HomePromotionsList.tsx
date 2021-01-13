/* eslint-disable no-use-before-define */
import React from 'react'
import style from '../styles/homePromotionsMenuStyles'
import { Promotion, PromotionsMenu } from '../../utils/interfaces'
import { View, Text, ImageBackground, FlatList, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import ListMenu from './ListMenu'
import { distancePoints } from '../../utils/functions'

const { width } = Dimensions.get('window')

export default function HomePromotions ({ typePromotion, latitude, longitude, promotions, navigation }: PromotionsMenu) {
  return (
      <View testID={'homePromotions'} style={listStyle.listContent} >
      <ListMenu typePromotion={typePromotion}/>
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
                <Text style={style.establishment}>{item.establishment.name}</Text>
                </View>
                <View style={style.otherInfoContainer}>
                <Text style={style.otherInfo}>{item.date}</Text>
                {!latitude ? null : <Text style={style.otherInfo}>{distancePoints(latitude, longitude, item.establishment.coords.latitude, item.establishment.coords.longitude)} km</Text>}
                </View>
            </View>
        </View>
    </TouchableOpacity>)} />
    </View>
  )
}

const listStyle = StyleSheet.create({
  listContent: {
    flex: 1,
    width: width - 10,
    marginHorizontal: 5,
    position: 'relative'
  }
})

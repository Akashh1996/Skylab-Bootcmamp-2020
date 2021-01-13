import React, { useEffect, useRef } from 'react'
import { StyleSheet, ScrollView, Text, View, Image, Alert } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import BackButton from '../Header/BackButton/BackButton'
import { connect } from 'react-redux'
import { propsInterface } from '../../interfaces/interfaces'
import HomeButton from '../Header/HomeButton/HomeButton'
import { addGame, updateGame } from '../../redux/actions/gameActions'

const styles = StyleSheet.create({
  navButtons: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },

  gamedetailContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20
  },

  info: {
    backgroundColor: '#dedede',
    width: '90%',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginBottom: 20
  },

  titleBar: {
    backgroundColor: 'black',
    width: '90%',
    height: 2,
    marginBottom: 20
  },

  titleContainer: {
    width: '90%',
    marginTop: 20,
    marginBottom: 20,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold'
  },

  gameinfo: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20
  },

  players: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  time: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  descriptionContainer: {
    width: '90%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },

  description: {

    textAlign: 'left',
    lineHeight: 25
  },

  buttonContainer: {
    marginTop: 20
  },

  addButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  gameAddedContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#16bc00',
    padding: 8,
    borderRadius: 10
  },
  gameAddedText: {
    color: '#16bc00',
    fontWeight: 'bold'
  },
  checkIcon: {
    paddingRight: 10,
    fontSize: 20,
    color: '#16bc00'
  }

})

function GameDetail ({ route: { params: { gameItem } }, userObject, dispatch }: propsInterface) {
  const detailScrollRef = useRef(null)
  const isFocused = useIsFocused()

  const checkFavourites = userObject?.favourites.some(i => i.name.includes(gameItem.name))
  useEffect(() => {
    detailScrollRef.current.scrollTo({ x: 0, y: 0, animated: false })
  }, [isFocused])

  useEffect(() => {
  }, [])

  function GameAdded () {
    Alert.alert(
      'Game Added', `${gameItem?.name} has been added to your favourites`, [{ text: 'OK' }]
    )
  }

  return (
      <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}
          ref={detailScrollRef}
      >
          <View />
          <View style={styles.imageContainer}>
              <Image
                  resizeMode='contain'
                  source={{ uri: gameItem?.images.original }}
                  style={{ width: 300, height: 300 }}
              />
          </View>
          <View style={styles.navButtons}>
              <BackButton />
              <HomeButton />
          </View>
          <View style={styles.info}>
              <View style={styles.titleContainer}>
                  <Text style={styles.title}>
                      {gameItem?.name.toUpperCase()}
                  </Text>

              </View>
              <View style={styles.titleBar} />
              <View style={styles.descriptionContainer}>
                  <Text style={styles.description}>
                      {gameItem?.description_preview}
                  </Text>
                  <View style={styles.gameinfo}>
                      <View style={styles.players}>
                          <FontAwesome5
                              name='users'
                              style={{ fontSize: 20 }}
                          />
                          <Text>
                              {' '}
                              {' '}
                              {' '}
                              {gameItem?.min_players !== gameItem?.max_players ? `${gameItem?.min_players} - ${gameItem?.max_players} players` : `${gameItem?.min_players} players`}
                          </Text>
                      </View>
                      <View style={styles.time}>
                          <FontAwesome5
                              name='clock'
                              style={{ fontSize: 20 }}
                          />
                          <Text>
                              {' '}
                              {' '}
                              {' '}
                              {gameItem?.min_playtime !== gameItem?.max_playtime ? `${gameItem?.min_playtime} - ${gameItem?.max_playtime} min` : `${gameItem.min_players} min`}
                          </Text>
                      </View>
                  </View>
                  <View style={styles.buttonContainer}>
                    {checkFavourites ? (
                      <View style={styles.gameAddedContainer}>
                        <FontAwesome5
                            name='check'
                            style={styles.checkIcon}
                        />
                      <Text style={styles.gameAddedText}>

This game is already added
                      </Text>
                      </View>
                    )
                      : (<Button
                              icon={
                              <Icon
                                  color="white"
                                  name="plus"
                                  size={15}
                              />
  }
                              onPress={() => {
                                dispatch(updateGame(gameItem))
                                dispatch(addGame(userObject, gameItem))
                                GameAdded()
                              }}
                              style={styles.addButton}

                          // eslint-disable-next-line react/jsx-props-no-multi-spaces
                              title="  Add to favourites"
                         />)}
                  </View>
              </View>
          </View>
          <View style={{ width: '100%', height: 100 }} />
      </ScrollView>
  )
}

function mapStateToProps ({ gameReducer, userReducer }: any) {
  console.log('MAPSTATETOPROPS:', gameReducer.gameObject)
  return {
    gameItem: gameReducer.gameObject,
    userObject: userReducer.userObject
  }
}

export default connect(mapStateToProps)(GameDetail)

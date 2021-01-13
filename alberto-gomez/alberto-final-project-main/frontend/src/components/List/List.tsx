import React, { useRef } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import BackButton from '../Header/BackButton/BackButton'
import HomeButton from '../Header/HomeButton/HomeButton'
import { connect } from 'react-redux'
import { propsInterface } from '../../interfaces/interfaces'
import { requestAllGames } from '../../redux/actions/gameActions'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 30,
    fontFamily: 'sans-serif-condensed',
    padding: 10
  },

  navButtons: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  toTopButton: {
    width: 40,
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 20,
    bottom: 100,
    backgroundColor: 'white',
    borderRadius: 20,
    borderColor: 'lightblue',
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  gameList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%'
  },
  gameView: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 10
  },
  gameContainer: {
    padding: 20,
    borderBottomColor: 'black',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  gameInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexShrink: 1,
    width: '80%',
    paddingLeft: 10
  },
  gameTitle: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Roboto'
  },
  gameDescription: {
    flexShrink: 1,
    fontSize: 12,
    color: '#595959'
  },

  gameDetails: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10
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
  playersText: {
    fontSize: 12
  },
  timeText: {
    fontSize: 12
  }
})

function List ({ gameCollection, dispatch, navigation }: propsInterface) {
  if (!gameCollection || gameCollection?.length === 0) {
    dispatch(requestAllGames())
  }

  const scrollRef = useRef<ScrollView>()

  const toTopPress = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true
    })
  }

  return (
    <View>
          { gameCollection
            ? (
              <View>
              <ScrollView
                  contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}
                  ref={scrollRef}
              >
                <View style={styles.gameList}>
                    <View>
                        <Text style={styles.sectionTitle}>
                            Game Ranking
                        </Text>
                    </View>
                    <View>
                        {gameCollection?.map((gameItem) => (
                            <View
                                key={gameItem.id}
                                style={styles.gameView}
                            >
                                <TouchableOpacity
                                    onPress={() => {
                                      navigation.navigate('GameDetail', { gameItem })
                                    }}
                                    style={styles.gameContainer}
                                >
                                    <View>
                                        <Image
                                            resizeMode='contain'
                                            source={{ uri: gameItem?.images.small }}
                                            style={{ width: 100, height: 100 }}
                                        />
                                    </View>
                                    <View style={styles.gameInfo}>
                                        <Text
                                            style={styles.gameTitle}
                                        >
                                            {gameItem.name}
                                        </Text>
                                        <Text
                                            numberOfLines={2}
                                            style={styles.gameDescription}
                                        >
                                            {gameItem.description_preview}
                                        </Text>
                                        <View style={styles.gameDetails}>
                                            <View style={styles.players}>
                                                <FontAwesome5
                                                    name='users'
                                                    style={{ fontSize: 10 }}
                                                />
                                                <Text style={styles.playersText}>
                                                    {' '}
                                                    {' '}
                                                    {' '}
                                                    {gameItem?.min_players !== gameItem?.max_players ? `${gameItem?.min_players} - ${gameItem?.max_players} players` : `${gameItem?.min_players} players`}
                                                </Text>
                                            </View>
                                            <View style={styles.time}>
                                                <FontAwesome5
                                                    name='clock'
                                                    style={{ fontSize: 10 }}
                                                />
                                                <Text style={styles.timeText}>
                                                    {' '}
                                                    {' '}
                                                    {' '}
                                                    {gameItem?.min_playtime !== gameItem?.max_playtime ? `${gameItem?.min_playtime} - ${gameItem?.max_playtime} min` : `${gameItem.min_players} min`}
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                    <View style={styles.navButtons}>
                        <BackButton />
                        <HomeButton />
                    </View>
                </View>
              </ScrollView>
              <View style={styles.toTopButton}>
                <TouchableOpacity
                    hitSlop={{ top: 20, right: 20, bottom: 20, left: 20 }}
                    onPress={toTopPress}
                >
                    <FontAwesome5
                        name="chevron-circle-up"
                        style={{ fontSize: 25 }}
                    />
                </TouchableOpacity>
              </View>
              </View>
              ) : (
                  <View>
                      <LoadingSpinner />
                  </View>
              )}
    </View>
  )
}

function mapStateToProps ({ gameReducer }: any) {
  return {
    gameCollection: gameReducer.gameArray
  }
}

export default connect(mapStateToProps)(List)

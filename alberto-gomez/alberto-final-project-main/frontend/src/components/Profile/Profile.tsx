import React, { useEffect, useState } from 'react'
import { Text, View, Image, StyleSheet, TextInput, Button, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { connect } from 'react-redux'
import { saveUserChanges, loadUser, deleteGame } from '../../redux/actions/userActions'
import { updateGame } from '../../redux/actions/gameActions'
import { propsInterface } from '../../interfaces/interfaces'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { TouchableOpacity } from 'react-native-gesture-handler'

const styles = StyleSheet.create({

  profileContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
    alignItems: 'center',
    width: '100%'
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 10,
    width: '90%',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  personalInfo: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column'
  },
  usernameInput: {
    height: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
    width: '100%'
  },
  name: {
    marginTop: 20,
    fontStyle: 'italic',
    fontSize: 10
  },
  labelResult: {
    fontStyle: 'italic',
    fontSize: 10
  },
  cityContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 10
  },
  cityInput: {
    height: 20,
    fontWeight: 'bold',
    fontSize: 12,
    width: '100%'
  },
  bioContainer: {
    width: '90%',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  favGames: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    width: '90%',
    height: 150,
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  gamesView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    alignSelf: 'center'
  },
  gameViewItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    margin: 0,
    justifyContent: 'center'
  },
  gameNameLabel: {
    fontSize: 10,
    fontWeight: 'bold'
  },
  deleteButton: {
    backgroundColor: 'white',
    padding: 5
  },
  emptyListContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  emptyList: {
    color: 'gray',
    fontStyle: 'italic'
  }
})

function Profile ({ user, userObject, dispatch }: propsInterface) {
  const [valueUsername, onChangeTextUsername] = useState('' || userObject?.username)
  const [valueBio, onChangeTextUserBio] = useState('' || userObject?.bio)
  const [valueCity, onChangeTextCity] = useState('' || userObject?.location)

  useEffect(() => {
    dispatch(loadUser(user.id))
  }, [])

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.profileContainer}>
          <View style={styles.imageContainer}>

              <Image
                  source={{ uri: userObject?.photoUrl }}
                  style={{ width: 150, height: 150 }}
              />
              <View style={styles.personalInfo}>
                  <TextInput
                      onChangeText={text => onChangeTextUsername(text)}
                      placeholder="Type you username!"
                      style={styles.usernameInput}
                      value={valueUsername}
                  />
                  <View>

                      <Text style={styles.name}>
                          Name:
                          {' '}
                      </Text>
                      <Text style={{ fontWeight: 'bold', fontSize: 12 }}>

                          {userObject?.name}
                      </Text>
                  </View>
                  <View style={styles.cityContainer}>
                      <Text style={styles.labelResult}>
                          Location:
                          {' '}
                      </Text>
                      <TextInput
                          onChangeText={text => onChangeTextCity(text)}
                          placeholder="Type your city..."
                          style={styles.cityInput}
                          value={valueCity}
                      />

                  </View>
              </View>
          </View>
          <View style={styles.bioContainer}>
              <Text style={styles.labelResult}>
                  BIO:
              </Text>
              <TextInput
                  multiline
                  numberOfLines={4}
                  onChangeText={text => onChangeTextUserBio(text)}
                  placeholder=" Describe about yourself... in 4 lines!"
                  style={{ height: 80 }}
                  value={valueBio}
              />
          </View>
          <View style={{ marginTop: 20 }}>

              <Button
                  onPress={() => {
                    dispatch(saveUserChanges(userObject?._id, { username: valueUsername, location: valueCity, bio: valueBio }))
                  }}
                  title="Save changes"
              />
          </View>
          <View style={{ width: '90%', height: 1, backgroundColor: 'black', margin: 20 }} />

          <View style={styles.favGames}>
              <Text style={styles.labelResult}>
                  My favourite games:
              </Text>
              {userObject?.favourites.length > 0
                ? (<View style={styles.gamesView}>
                  {userObject?.favourites.map((gameItem: any) => (
                      <View
                          key={gameItem?.id}
                          style={styles.gameViewItem}
                      >
                          <Image
                              resizeMode='contain'
                              source={{ uri: gameItem?.images?.small }}
                              style={{ width: 75, height: 75 }}
                          />

                          <Text style={styles.gameNameLabel}>
                              {gameItem?.name}
                          </Text>
                          <View style={styles.deleteButton}>
                            <TouchableOpacity
                                hitSlop={{ top: 20, right: 20, bottom: 20, left: 20 }}
                                onPress={() => {
                                  dispatch(updateGame(gameItem))
                                  dispatch(deleteGame(userObject, gameItem))
                                  dispatch(loadUser(user.id))
                                }}
                            >
                              <FontAwesome5
                                  name='times-circle'
                                  style={{ fontSize: 20, color: 'red' }}
                              />
                            </TouchableOpacity>
                          </View>
                      </View>
                  ))}
                   </View>) : (
                <View style={styles.emptyListContainer}>
                  <Text style={styles.emptyList}>
There are not any games added to this list yet
                  </Text>
                </View>
                  )}
          </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

function mapStateToProps ({ userReducer }: any) {
  return {
    user: userReducer?.user,
    userObject: userReducer?.userObject
  }
}
export default connect(mapStateToProps)(Profile)

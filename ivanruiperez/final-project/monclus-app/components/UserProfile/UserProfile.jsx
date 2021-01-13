/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { StyleSheet, View, ImageBackground, Text, Image } from 'react-native'
import { connect } from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'
import * as RootNavigation from '../../RootNavigation'
import { requestReservationByUserId, requestServiceByName, requestBarberByName, deleteReservationByUserId } from '../../Redux/actions/appActions'

const startColor = '#ce2377'
const endColor = '#f8a15e'
const background = { uri: 'https://trello-attachments.s3.amazonaws.com/5fc76e1bc530cd67ea44d949/5fc76e29bc36da02257e01b6/bb0cee9c6a125033c322116ce84e37b2/fondo.jpg' }
function UserProfile ({ userMongo, serviceName, barberName, reservationsUser, dispatch }) {
  useEffect(() => {
    dispatch(requestReservationByUserId(userMongo.id))
  }, [reservationsUser?.[0]?._id, userMongo])
  useEffect(() => {
    if (reservationsUser?.length !== 0) {
      dispatch(requestServiceByName(reservationsUser?.[0]?.service))

      dispatch(requestBarberByName(reservationsUser?.[0]?.barber))
    }
  }, [reservationsUser?.[0]?._id, userMongo])
  return (
    (userMongo)
      ? <ImageBackground source={background} style={styles.backgroundimg} >
            <View style={styles.container}>
              <View style={styles.monclusIcon}>
                <Image source={{ uri: userMongo.photo }} style={styles.userPhoto} />
              </View>
              <View style={styles.boxReservations}>
                {reservationsUser?.length
                  ? <View style={styles.appointmentRemainderBox}>
                    <View style={styles.serviceReserved}>
                    <Image source = {{ uri: serviceName?.image }}style={styles.serviceReservedImg}/>
                    </View>
                    <View style={styles.barberReserved}>
                    <Image source = {{ uri: barberName?.photo }} style= {styles.barberReservedImg}/>
                    </View>
                    <View style={styles.dayReserved}>
                      <Text style={styles.weekDaySelected}>
                        {reservationsUser[0].weekDay}
                      </Text>
                      <Text style={styles.daySelected}>
                        {reservationsUser[0].day}
                      </Text>
                    </View>

                  </View>
                  : <View style={styles.noReservations}>
                <Text style={styles.noReservationsText}>No hay ninguna hora reservada</Text>
                </View>}
                {reservationsUser?.length
                  ? <TouchableOpacity style={styles.deleteButton} onPress={() =>
                    dispatch(deleteReservationByUserId(reservationsUser[0]._id))
                    }>
                  <Text style={styles.textDeleteButton}>Borrar reserva</Text>
                </TouchableOpacity>
                  : <View></View>}
              <LinearGradient colors={[startColor, endColor]} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} style={styles.gradientMainBox}>
              <TouchableOpacity style={styles.mainMenuBox} onPress={() => {
                RootNavigation.navigate('MainBarber', null)
              }}>
                <Text style={styles.textGradientBox}>Menu Principal</Text>
              </TouchableOpacity>
                </LinearGradient>
              </View>
            </View>
            </ImageBackground>
      : <Text>Loading...</Text>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  containerMonclus: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  monclusIcon: {
    width: 250,
    height: 250,
    borderWidth: 2,
    borderRadius: 120,
    zIndex: 10,
    marginTop: 160
  },
  userPhoto: {
    width: '100%',
    height: '100%',
    borderRadius: 120
  },
  boxReservations: {
    width: '100%',
    backgroundColor: '#292c30',
    height: '50%',
    marginTop: '10%',
    alignItems: 'center'
  },
  noReservations: {
    marginTop: '20%'
  },
  noReservationsText: {
    color: 'white',
    fontSize: 28
  },
  mainMenuBox: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25
  },
  gradientMainBox: {
    borderRadius: 25,
    marginTop: 20
  },
  textGradientBox: {
    color: 'white',
    fontSize: 20
  },
  appointmentRemainderBox: {
    width: '90%',
    height: 90,
    marginTop: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  serviceReserved: {
    width: 80,
    height: 80,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    margin: '5%'
  },
  serviceReservedImg: {
    height: '80%',
    width: '80%'
  },
  barberReserved: {
    width: 90,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    margin: '5%'

  },
  barberReservedImg: {
    height: '100%',
    width: '100%',
    borderRadius: 50
  },
  dayReserved: {
    height: 80,
    width: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    margin: '5%'

  },
  weekDaySelected: {
    fontSize: 20,
    color: startColor
  },
  daySelected: {
    alignItems: 'center',
    marginTop: '25%',
    fontSize: 22,
    color: startColor
  },
  deleteButton: {
    width: 170,
    height: 45,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%'
  },
  textDeleteButton: {
    color: startColor,
    fontSize: 20
  },
  backgroundimg: {
    width: '100%',
    height: '100%'
  }
})
function mapStateToProps ({ monclusReducer }) {
  return {
    userMongo: monclusReducer.userMongo,
    reservations: monclusReducer.reservations,
    serviceName: monclusReducer.serviceName,
    barberName: monclusReducer.barberName,
    reservationsUser: monclusReducer.reservationsUser

  }
}
export default connect(mapStateToProps)(UserProfile)

/* eslint-disable array-callback-return */
import React, { useEffect } from 'react'
import { View, StyleSheet, ImageBackground, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import { requestUser, requestBarberByName, appointmentHour, appointmentDay, appointmentWeekDay, appointmentMonth, appointmentYear, sendReservation, requestReservations } from '../../Redux/actions/appActions'
import { connect } from 'react-redux'
import moment from 'moment'
import * as RootNavigation from '../../RootNavigation'
import { LinearGradient } from 'expo-linear-gradient'

const background = { uri: 'https://trello-attachments.s3.amazonaws.com/5fc76e1bc530cd67ea44d949/5fc76e29bc36da02257e01b6/bb0cee9c6a125033c322116ce84e37b2/fondo.jpg' }
const block = { uri: 'https://trello-attachments.s3.amazonaws.com/5fc76e29bc36da02257e01b6/1067x1067/8140a06b2703b4d8d99694da39d42ce9/icono-candado_b.png' }
const startColor = '#ce2377'
const endColor = '#f8a15e'
const calendar = []
for (let create = 0; create < 30; create++) {
  const day = (moment().add(create, 'd').format('D').toString())
  const weekDayEng = (moment().add(create, 'd').format('dddd').toString())
  let weekDay
  switch (weekDayEng) {
    case 'Monday':
      weekDay = 'Lun'
      break
    case 'Tuesday':
      weekDay = 'Mar'
      break
    case 'Wednesday':
      weekDay = 'Mié'
      break
    case 'Thursday':
      weekDay = 'Jue'
      break
    case 'Friday':
      weekDay = 'Vie'
      break
    case 'Saturday':
      weekDay = 'Sáb'
      break
    default:
      weekDay = 'Dom'
      break
  }
  const month = (moment().add(create, 'd').format('MMMM').toString())
  const year = (moment().add(create, 'd').format('YYYY').toString())
  calendar.push({ day, weekDay, month, year })
}
const actualMonthEng = (moment().format('MMMM').toString())
const nextMonthEng = (moment().add(1, 'month').format('MMMM').toString())

function CalendarBarber ({ reservationsUser, userMongo, dispatch, selectDay, selectWeekDay, selectHour, selectMonth, selectYear, barberName, reservations, route: { params: { selectBarber, selectService } } }) {
  useEffect(() => {
    if (!userMongo || !userMongo.length) {
      dispatch(requestUser())
    }
    if (!barberName) {
      dispatch(requestBarberByName(selectBarber))
    }
    if (barberName && barberName.name !== selectBarber) {
      dispatch(requestBarberByName(selectBarber))
    }
    if (!reservations) {
      dispatch(requestReservations(reservations))
    }
  }, [reservationsUser?.length])

  return (
    (barberName && userMongo)
      ? (<ImageBackground source={background} style={styles.backgroundimg} >
               <View style={styles.container}>

                  <Text style={styles.monthDisplay}>{`${actualMonthEng}/${nextMonthEng}`}</Text>
                    <View style={styles.containerCalendar}>
                    <ScrollView style={styles.table} horizontal={true} showsHorizontalScrollIndicator={false}>
                        {calendar.map((dayCalendar) => (
                          barberName.workingdays.includes(dayCalendar.weekDay)
                            ? <TouchableOpacity
                                    style={selectDay === dayCalendar.day && selectWeekDay === dayCalendar.weekDay
                                      ? styles.dayBoxSelected
                                      : styles.dayBox}
                                      disabled={barberName.workingdays.includes(dayCalendar.weekDay) === false}
                                    key={Math.random()}
                                    onPress={() => dispatch(appointmentDay(dayCalendar.day)) &&
                                      dispatch(appointmentWeekDay(dayCalendar.weekDay)) &&
                                    dispatch(appointmentMonth(dayCalendar.month)) &&
                                  dispatch(appointmentYear(dayCalendar.year))}
                                >

                                    <View style={styles.weekDayBox}
                                       key={Math.random()}>
                                        <Text style={selectDay === dayCalendar.day && selectWeekDay === dayCalendar.weekDay
                                          ? styles.weekDaySelected
                                          : styles.weekDay} >{dayCalendar.weekDay}</Text>
                                    </View>
                                    <Text style={selectDay === dayCalendar.day && selectWeekDay === dayCalendar.weekDay
                                      ? styles.daySelected
                                      : styles.day}
                                       >{dayCalendar.day}</Text>

                                </TouchableOpacity>
                            : barberName.workingdays.includes(dayCalendar.weekDay) === false
                              ? <LinearGradient colors={[startColor, endColor]} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} style={styles.dayBoxNoWork} key={Math.random()}>
                            <TouchableOpacity
                              disabled={true}
                            key={Math.random()}
                            onPress={() => dispatch(appointmentDay(dayCalendar.day)) &&
                              dispatch(appointmentWeekDay(dayCalendar.weekDay)) &&
                            dispatch(appointmentMonth(dayCalendar.month)) &&
                          dispatch(appointmentYear(dayCalendar.year))}
                        >

                            <View style={styles.sunday}
                               key={Math.random()}>
                                <Text style={styles.weekDayNoWork} key={Math.random()} >{dayCalendar.weekDay}</Text>
                            </View>
                            <Text style={styles.daySunday}
                               key={Math.random()} >{dayCalendar.day}</Text>

                        </TouchableOpacity>
                        </LinearGradient>
                              : <View>Loading...</View>

                        ))}
                    </ScrollView>
                      </View>
                  <View style={styles.hourBox}>
                    <ScrollView showsVerticalScrollIndicator={false} >
                      {selectDay
                        ? barberName.schedule.map((schedule) => (
                            (reservations.some((reservation) => (
                              reservation.barber === barberName.name &&
                        reservation.hour === schedule &&
                        reservation.day === selectDay &&
                        reservation.month === selectMonth &&
                        reservation.year === selectYear
                            )))
                              ? <View style={styles.hourblockBox} key={Math.random()}>
                        <View style={styles.hourblock}>
                          <View style={styles.cellHour}>
                              <Image source={block} style={styles.cellImage}/>
                          </View>
                        </View>
                      </View>
                              : selectHour === schedule

                                ? <TouchableOpacity key={Math.random()}
                              onPress={() => dispatch(appointmentHour(schedule))} style={{ alignItems: 'center' }} >

                                    <LinearGradient colors={[startColor, endColor]} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} style={{ width: '80%', alignItems: 'center', borderRadius: 15 }} key={Math.random()}>
                                <View style={styles.hourblockSelected}>
                                  <Text style={styles.scheduleCell}>{schedule}</Text>
                                </View>
                                  </LinearGradient>
                                </TouchableOpacity>
                                : <TouchableOpacity key={Math.random()}
                      onPress={() => dispatch(appointmentHour(schedule))} style={{ alignItems: 'center' }} >

                        <View style={styles.hourblockEmpty}>
                          <Text >{schedule}</Text>
                        </View>
                      </TouchableOpacity>
                          ))
                        : <Text style={{ textAlign: 'center' }}>Selecciona un día</Text>
                    }
                    </ScrollView>

                  </View>
                </View>
                <View style={styles.buttonsBox}>
                <LinearGradient colors={[startColor, endColor]} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} style={styles.buttons} key={Math.random()}>
                        <TouchableOpacity
                         onPress={() => {
                           RootNavigation.navigate('MainBarber', null)
                           dispatch(appointmentHour(null))
                           dispatch(appointmentDay(null))
                         }}
                          >
                            <View>
                                <Text style={styles.textButtons}>Back</Text>
                            </View>
                        </TouchableOpacity>
                            </LinearGradient>
                      <LinearGradient colors={[startColor, endColor]} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} style={styles.buttons} key={Math.random()}>

                          <TouchableOpacity
                          disabled=
                          {!(selectDay && selectHour)}
                          onPress={async () => {
                            await dispatch(sendReservation({ userId: userMongo.id, barber: barberName.name, service: selectService, month: selectMonth, year: selectYear, day: selectDay, weekDay: selectWeekDay, hour: selectHour }))
                            RootNavigation.navigate('UserProfile', null)
                          }
                          }>
                              <View>
                                <Text style={!(selectDay && selectHour)
                                  ? styles.textButtonDisabled
                                  : styles.textButtons}>Registrar</Text>
                            </View>
                            </TouchableOpacity>
                            </LinearGradient>
                    </View>

            </ImageBackground >
        )
      : (<Text>Loading...</Text>)
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  containerCalendar: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: '40%'

  },
  backgroundimg: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  table: {
    width: '95%',
    maxHeight: '50%',
    flexDirection: 'column',
    flexWrap: 'wrap',
    marginTop: '30%'
  },
  monthDisplay: {
    color: 'white',
    marginTop: '33%',
    position: 'absolute',
    left: 11,
    zIndex: 5,
    height: 20,
    fontSize: 18
  },
  dayBox: {
    display: 'flex',
    alignItems: 'center',
    width: 50,
    height: 80,
    margin: 3,
    marginTop: '12%',
    borderRadius: 15
  },
  dayBoxSelected: {
    display: 'flex',
    alignItems: 'center',
    width: 50,
    height: 80,
    margin: 3,
    backgroundColor: 'white',
    marginTop: '11%',
    borderRadius: 15

  },
  dayBoxNoWork: {
    display: 'flex',
    alignItems: 'center',
    width: 50,
    height: 80,
    margin: 3,
    marginTop: '11%',
    borderRadius: 15,
    justifyContent: 'center'

  },

  weekDayBox: {
    width: '100%',
    height: '25%',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%'
  },
  weekDayBoxSelected: {
    width: '100%',
    height: '25%',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%'
  },
  sunday: {
    width: '100%',
    height: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%'
  },
  weekDay: {
    color: 'white',
    fontSize: 20
  },
  weekDaySelected: {
    fontSize: 20,
    color: startColor
  },
  weekDayNoWork: {
    color: 'gray',
    fontSize: 20,
    marginTop: '-5%'
  },

  day: {
    alignItems: 'center',
    marginTop: '25%',
    fontSize: 22,
    color: 'white'
  },
  daySelected: {
    alignItems: 'center',
    marginTop: '25%',
    fontSize: 22,
    color: startColor
  },
  daySunday: {
    alignItems: 'center',
    textAlign: 'center',
    marginTop: '25%',
    fontSize: 22,
    color: 'gray'
  },
  hourBox: {
    backgroundColor: 'white',
    width: '95%',
    height: '52%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25
  },
  hourblockBox: {
    alignItems: 'center',
    borderRadius: 25
  },
  cellHour: {
    backgroundColor: '#A2A3A4',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 15,
    justifyContent: 'center'
  },
  cellImage: {
    width: '10%',
    height: '80%'
  },
  hourblock: {
    width: '80%',
    height: 50,
    borderBottomWidth: 1,
    justifyContent: 'center'
  },
  hourblockSelected: {
    width: '100%',
    height: 50,
    borderBottomWidth: 1,
    justifyContent: 'center'
  },
  scheduleCell: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20
  },
  hourblockEmpty: {
    width: '80%',
    height: 50,
    borderBottomWidth: 1,
    justifyContent: 'center'
  },
  buttonsBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#292c30',
    height: 300,
    marginTop: -60,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25

  },
  buttons: {
    margin: 20,
    padding: 10,
    width: 120,
    alignItems: 'center',
    borderRadius: 20,
    height: 50,
    justifyContent: 'center'
  },
  textButtons: {
    color: 'white',
    fontSize: 20
  },
  textButtonDisabled: {
    color: 'gray',
    fontSize: 20
  }

})
function mapStateToProps ({ monclusReducer }) {
  return {
    userMongo: monclusReducer.userMongo,
    selectService: monclusReducer.selectService,
    selectBarber: monclusReducer.selectBarber,
    selectDay: monclusReducer.selectDay,
    selectWeekDay: monclusReducer.selectWeekDay,
    barberName: monclusReducer.barberName,
    selectHour: monclusReducer.selectHour,
    selectMonth: monclusReducer.selectMonth,
    selectYear: monclusReducer.selectYear,
    reservations: monclusReducer.reservations,
    reservationUserId: monclusReducer.reservationUserId,
    reservationsUser: monclusReducer.reservationsUser

  }
}
export default connect(mapStateToProps)(CalendarBarber)

/* eslint-disable array-callback-return */
import React, { useEffect } from 'react'
import { View, StyleSheet, ImageBackground, Image, Text, ScrollView, TouchableOpacity } from 'react-native'
import { requestServices, requestBarber, appointmentService, appointmentBarber } from '../../Redux/actions/appActions'
import { connect } from 'react-redux'
import * as RootNavigation from '../../RootNavigation'
import { LinearGradient as Backgradient } from 'expo-linear-gradient'

const background = { uri: 'https://trello-attachments.s3.amazonaws.com/5fc76e1bc530cd67ea44d949/5fc76e29bc36da02257e01b6/bb0cee9c6a125033c322116ce84e37b2/fondo.jpg' }
const barberIMG = { uri: 'https://trello-attachments.s3.amazonaws.com/5fc76e29bc36da02257e01b6/1067x1067/904b86de1f6cebcb701ff17c34c96755/icono_interrogante.png' }
const noPreference = 'No preference'
const startColor = '#ce2377'
const endColor = '#f8a15e'

function MainBarber ({ serviceList, dispatch, selectService, selectBarber, barber }) {
  useEffect(() => {
    if (!serviceList || !serviceList.length) {
      dispatch(requestServices())
    }

    if (!barber || !barber.length) {
      dispatch(requestBarber())
    }
  }, [])
  return (
    (serviceList && serviceList.length && barber && barber.length)
      ? (
      <>
      <ImageBackground source={background} style={styles.backgroundimg} >
                    <Text style={styles.sevicesText}>Servicios</Text>
                  <View style={styles.container}>
                    <ScrollView style={styles.table}
                     horizontal={true}
                     showsHorizontalScrollIndicator={false}
                     contentContainerStyle={{ height: '100%', flexDirection: 'column', flexWrap: 'wrap' }}>
                        {serviceList.map((service) => (

                          selectService === service.name

                            ? <TouchableOpacity
                                testID= 'service'
                                    style={styles.serviceBarberSelected}
                                    key={Math.random()}
                                    onPress={() => dispatch(appointmentService(service.name))}>
                                <Backgradient colors={[startColor, endColor]} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} style={styles.gradientService}>
                                    <Image source={{ uri: service.imageW }} style={styles.iconService} key={Math.random()} />
                                        <Text style={styles.textNameSelected} >{service.name}</Text>
                                </Backgradient>
                                </TouchableOpacity>

                            : <TouchableOpacity
                                testID= 'service'
                                    style={styles.serviceBarber}
                                    key={Math.random()}
                                    onPress={() => dispatch(appointmentService(service.name))}>
                                    <Image source={{ uri: service.image }} style={styles.iconService} key={Math.random()} />
                                        <Text style={styles.textName} >{service.name}</Text>
                                </TouchableOpacity>

                        ))}

                    </ScrollView>
                    <ScrollView style={styles.barbersBox}>
                      <Text style={styles.barbersText}>Barberos</Text>
                      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        {barber.map((admin) => {
                          if (selectBarber === admin.name) {
                            return (
                                    <TouchableOpacity
                                    testID= 'userAdmin'
                                    style={styles.barbersSelected}
                                      key={Math.random()} onPress={() => dispatch(appointmentBarber(admin.name))}>
                                 <Backgradient colors={[startColor, endColor]} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} style={styles.gradientBarber} >

                                        <Image source={{ uri: admin.photo }} style={styles.barbersImg} key={Math.random()} />
                                        <Text style={styles.barberNameContentSelected}
                                        key={Math.random()}>{admin.name}</Text>
                                          </Backgradient>
                                    </TouchableOpacity>
                            )
                          } else {
                            return (
                              <TouchableOpacity
                              testID= 'userAdmin'
                              style={styles.barbers}
                                key={Math.random()} onPress={() => dispatch(appointmentBarber(admin.name))}>

                                  <Image source={{ uri: admin.photo }} style={styles.barbersImg} key={Math.random()} />
                                  <Text style={styles.barberNameContent}
                                  key={Math.random()}>{admin.name}</Text>
                              </TouchableOpacity>
                            )
                          }
                        })}
                        <TouchableOpacity disabled={true} testID={noPreference} style={styles.barbers} onPress={() => dispatch(appointmentBarber(noPreference))}>

                            <Image source={barberIMG} style={styles.barbersImg} />
                            <Text style={selectBarber === noPreference
                              ? styles.barberNameContentSelected
                              : styles.barberNameContent}>Sin preferencia</Text>

                        </TouchableOpacity>
                        </View>

                    <View style={styles.buttonsBox}>
                      <Backgradient colors={[startColor, endColor]} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} style={styles.buttons}>
                        <TouchableOpacity
                         onPress={() =>
                           RootNavigation.navigate('Login', null)}>
                            <View>
                                <Text style={styles.textButtons}>Back</Text>
                            </View>
                        </TouchableOpacity>
                            </Backgradient>
                      <Backgradient colors={[startColor, endColor]} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} style={styles.buttons}>

                          <TouchableOpacity
                          disabled=
                          {!(selectService && selectBarber)}
                          onPress={() =>
                            RootNavigation.navigate('CalendarBarber', { selectBarber, selectService })
                            }>
                              <View>
                                <Text style={!(selectService && selectBarber)
                                  ? styles.textButtonDisabled
                                  : styles.textButtons}>Continue</Text>
                            </View>
                            </TouchableOpacity>
                            </Backgradient>

                    </View>

                    </ScrollView>
                    </View>
            </ImageBackground >
            </>
        )
      : (<Text>Loading...</Text>)
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  backgroundimg: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  sevicesText: {
    color: 'white',
    marginTop: 125,
    marginLeft: 30,
    fontSize: 20
  },
  barbersText: {
    color: 'white',
    marginLeft: 30,
    fontSize: 20,
    marginTop: '3%',
    marginBottom: '5%'
  },
  table: {
    width: '90%',
    maxHeight: 270,
    borderRadius: 20,
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingTop: '1%'
  },
  serviceBarber: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: 110,
    height: 110,
    backgroundColor: 'white',
    marginTop: '3%',
    marginLeft: '1%',
    marginRight: '1%',
    borderRadius: 20
  },
  serviceBarberSelected: {
    display: 'flex',
    alignItems: 'center',
    width: 110,
    height: 110,
    marginTop: '3%',
    marginLeft: '1%',
    marginRight: '1%',
    borderRadius: 20
  },
  gradientService: {
    borderRadius: 25,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  gradientBarber: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    borderRadius: 25
  },
  iconService: {
    width: 60,
    height: 60
  },
  textNameSelected: {
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: '8%',
    fontSize: 15
  },
  textName: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: '8%',
    fontSize: 15
  },

  barbersBox: {
    flex: 1,
    flexWrap: 'nowrap',
    backgroundColor: '#292c30',
    width: '100%',
    height: '100%'
  },
  barbers: {
    width: 110,
    height: 130,
    margin: '3%',
    marginBottom: '1%',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  barbersSelected: {
    width: 110,
    height: 130,
    margin: '3%',
    marginBottom: '1%',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center'

  },
  barbersImg: {
    width: 90,
    height: 90,
    borderRadius: 100,
    marginTop: 10

  },

  barberNameContent: {
    fontSize: 12,
    color: 'white',
    width: '100%',
    textAlign: 'center',
    marginTop: 10
  },
  barberNameContentSelected: {
    fontSize: 15,
    width: '100%',
    textAlign: 'center',
    color: 'white'

  },
  buttonsBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20
  },
  buttons: {
    margin: 20,
    padding: 10,
    width: 120,
    alignItems: 'center',
    borderRadius: 20
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
    serviceList: monclusReducer.serviceList,
    userDetail: monclusReducer.userDetail,
    selectService: monclusReducer.selectService,
    selectBarber: monclusReducer.selectBarber,
    barber: monclusReducer.barber
  }
}
export default connect(mapStateToProps)(MainBarber)

import axios from 'axios'
import actionTypes from './actionTypes'
import signinWithGoogle from '../../firebase'

export function loadUser (user) {
  return {
    type: actionTypes.LOAD_USER,
    user
  }
}
export function loadError (error) {
  return {
    type: actionTypes.LOAD_ERROR,
    error
  }
}

export function requestUser () {
  return async (dispatch) => {
    const backEndpoint = 'http://192.168.0.37:5000/users'
    try {
      const userData = await axios.get(backEndpoint)
      dispatch(loadUser(userData.data))
    } catch (error) {
      dispatch(loadError(error))
    }
  }
}
export function loadBarber (barber) {
  return {
    type: actionTypes.LOAD_BARBER,
    barber
  }
}
export function requestBarber () {
  return async (dispatch) => {
    const backEndpoint = 'http://192.168.0.37:5000/barbers'
    try {
      const barberData = await axios.get(backEndpoint)
      dispatch(loadBarber(barberData.data))
    } catch (error) {
      dispatch(loadError(error))
    }
  }
}
export function loadBarberByName (barberName) {
  return {
    type: actionTypes.LOAD_BARBER_NAME,
    barberName
  }
}

export function requestBarberByName (name) {
  return async (dispatch) => {
    const backEndpoint = `http://192.168.0.37:5000/barbers?name=${name}`
    try {
      const barberDataName = await axios.put(backEndpoint)
      dispatch(loadBarberByName(barberDataName.data))
    } catch (error) {
      dispatch(loadError(error))
    }
  }
}

export function loadServiceByName (serviceName) {
  return {
    type: actionTypes.LOAD_SERVICE_NAME,
    serviceName
  }
}

export function requestServiceByName (name) {
  return async (dispatch) => {
    const backEndpoint = `http://192.168.0.37:5000/services?name=${name}`
    try {
      const serviceDataName = await axios.put(backEndpoint)
      dispatch(loadServiceByName(serviceDataName.data))
    } catch (error) {
      dispatch(loadError(error))
    }
  }
}

export function loadServices (service) {
  return {
    type: actionTypes.LOAD_SERVICES,
    service
  }
}

export function requestServices () {
  return async (dispatch) => {
    const backEndpoint = 'http://192.168.0.37:5000/services'
    try {
      const serviceData = await axios.get(backEndpoint)
      dispatch(loadServices(serviceData.data))
    } catch (error) {
      dispatch(loadError(error))
    }
  }
}
export function appointmentService (selectService) {
  return {
    type: actionTypes.LOAD_APPOINTMENT_SERVICE,
    selectService
  }
}

export function appointmentBarber (selectBarber) {
  return {
    type: actionTypes.LOAD_APPOINTMENT_BARBER,
    selectBarber
  }
}
export function appointmentDay (selectDay) {
  return {
    type: actionTypes.LOAD_APPOINTMENT_DAY,
    selectDay
  }
}
export function appointmentWeekDay (selectWeekDay) {
  return {
    type: actionTypes.LOAD_APPOINTMENT_WEEK_DAY,
    selectWeekDay
  }
}
export function appointmentHour (selectHour) {
  return {
    type: actionTypes.LOAD_APPOINTMENT_HOUR,
    selectHour
  }
}
export function appointmentMonth (selectMonth) {
  return {
    type: actionTypes.LOAD_APPOINTMENT_MONTH,
    selectMonth
  }
}
export function appointmentYear (selectYear) {
  return {
    type: actionTypes.LOAD_APPOINTMENT_YEAR,
    selectYear
  }
}
export function loginGoogleSucces (user) {
  return {
    type: actionTypes.LOGIN_USER_GOOGLE,
    user
  }
}
export function loginMongoSucces (userMongo) {
  return {
    type: actionTypes.LOGIN_USER_MONGO,
    userMongo
  }
}

export function loginGoogle () {
  return async (dispatch) => {
    try {
      const { user } = await signinWithGoogle()
      dispatch(loginGoogleSucces(user))
    } catch (error) {
      dispatch(loadError(error))
    }
  }
}

export function sendUser (userInfo) {
  return async (dispatch) => {
    const backEndpoint = 'http://192.168.0.37:5000/users'
    try {
      const userMongo = await axios.post(backEndpoint, userInfo)
      dispatch(loginMongoSucces(userMongo.data))
    } catch (error) {
      dispatch(loadError(error))
    }
  }
}
export function reservationSucces (reservationDate) {
  return {
    type: actionTypes.RESERVATION_SUCCES,
    reservationDate
  }
}

export function sendReservation (reservationInfo) {
  return async (dispatch) => {
    const backEndpoint = 'http://192.168.0.37:5000/reservations'
    try {
      await axios.post(backEndpoint, reservationInfo)
    } catch (error) {
      dispatch(loadError(error))
    }
  }
}
export function loadReservations (reservations) {
  return {
    type: actionTypes.LOAD_RESERVATIONS,
    reservations
  }
}
export function requestReservations () {
  return async (dispatch) => {
    const backEndpoint = 'http://192.168.0.37:5000/reservations'
    try {
      const reservations = await axios.get(backEndpoint)
      dispatch(loadReservations(reservations.data))
    } catch (error) {
      dispatch(loadError(error))
    }
  }
}
export function loadReservationByUserId (reservationsUser) {
  return {
    type: actionTypes.LOAD_RESERVATION_USER_ID,
    reservationsUser
  }
}

export function requestReservationByUserId (userId) {
  return async (dispatch) => {
    const backEndpoint = `http://192.168.0.37:5000/reservations?userId=${userId}`
    try {
      const reservationUserId = await axios.put(backEndpoint)
      dispatch(loadReservationByUserId(reservationUserId.data))
    } catch (error) {
      dispatch(loadError(error))
    }
  }
}

export function deleteReservationByUserId (userId) {
  return async (dispatch) => {
    const backEndpoint = `http://192.168.0.37:5000/reservations?userId=${userId}`
    try {
      await axios.delete(backEndpoint)
      dispatch(loadReservationByUserId([]))
    } catch (error) {
      dispatch(loadError(error))
    }
  }
}

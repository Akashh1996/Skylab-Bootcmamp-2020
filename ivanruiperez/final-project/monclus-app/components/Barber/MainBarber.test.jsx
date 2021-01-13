import React from 'react'
import thunk from 'redux-thunk'
import MainBarber from './MainBarber'
import { render, fireEvent } from '@testing-library/react-native'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { requestUser, requestServices } from '../../Redux/actions/appActions'

jest.mock('../../Redux/actions/appActions')
jest.mock('@react-navigation/native')
const buildStore = configureStore([thunk])

describe('Main Barber component', () => {
  const wrapperFactory = (wrapperInitialState) => {
    const store = buildStore(wrapperInitialState)
    store.dispatch = jest.fn()

    return ({ children }) => (
            <Provider store={store}>
              {children}
            </Provider>
    )
  }
  test('should not call user profile', () => {
    const initialState = { monclusReducer: { dispatch: jest.fn() } }
    const wrapper = wrapperFactory(initialState)
    const navigation = { navigate: jest.fn() }

    render(<MainBarber navigation={navigation} />, { wrapper })

    expect(requestUser).toHaveBeenCalled()
  })
  test('should call user profile', () => {
    const initialState = { monclusReducer: { serviceList: [{}], userDetail: [{}], selectService: [{}], selectBarber: [{}] } }
    const wrapper = wrapperFactory(initialState)
    const navigation = { navigate: jest.fn() }

    render(<MainBarber navigation={navigation} />, { wrapper })

    expect(requestServices).toHaveBeenCalled()
  })
  test('should select service', () => {
    const initialState = { monclusReducer: { serviceList: [{ name: 'string' }], userDetail: [{}], selectService: 'string', selectBarber: [{}] } }
    const wrapper = wrapperFactory(initialState)
    const navigation = { navigate: jest.fn() }

    const { getByTestId } = render(<MainBarber navigation={navigation} />, { wrapper })
    const button = getByTestId('service')
    fireEvent.press(button)
    expect(button).toBeDefined()
  })
  test('should select user if is admin', () => {
    const initialState = { monclusReducer: { serviceList: [{}], userDetail: [{ admin: true, firstname: 'barber' }], selectService: [{}], selectBarber: 'barber', dispatch: jest.fn() } }
    const wrapper = wrapperFactory(initialState)
    const navigation = { navigate: jest.fn() }

    const { getByTestId } = render(<MainBarber navigation={navigation} />, { wrapper })
    const button = getByTestId('userAdmin')
    fireEvent.press(button)
    expect(button).toBeDefined()
  })
  test('should select no preference barber', () => {
    const initialState = { monclusReducer: { serviceList: [{}], userDetail: [{ admin: true }], selectService: [{}], selectBarber: 'No preference', dispatch: jest.fn() } }
    const wrapper = wrapperFactory(initialState)
    const navigation = { navigate: jest.fn() }

    const { getByTestId } = render(<MainBarber navigation={navigation} />, { wrapper })
    const button = getByTestId('noPreference')
    fireEvent.press(button)
    expect(button).toBeDefined()
  })
  test('should press back button', () => {
    const initialState = { monclusReducer: { serviceList: [{}], userDetail: [{}], selectService: [{}], selectBarber: [{}], dispatch: jest.fn() } }
    const wrapper = wrapperFactory(initialState)
    const navigation = { navigate: jest.fn() }

    const { getByTestId } = render(<MainBarber navigation={navigation} />, { wrapper })
    const button = getByTestId('goBack')
    fireEvent.press(button)
    expect(button).toBeDefined()
  })
  test('should press continue button', () => {
    const initialState = { monclusReducer: { serviceList: [{}], userDetail: [{}], selectService: [{}], selectBarber: [{}], dispatch: jest.fn() } }
    const wrapper = wrapperFactory(initialState)
    const navigation = { navigate: jest.fn() }

    const { getByTestId } = render(<MainBarber navigation={navigation} />, { wrapper })
    const button = getByTestId('continue')
    fireEvent.press(button)
    expect(button).toBeDefined()
  })
})

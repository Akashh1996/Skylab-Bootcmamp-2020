import React from 'react'
import thunk from 'redux-thunk'
import BarberHeader from './BarberHeader'
import { render, fireEvent } from '@testing-library/react-native'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

jest.mock('../../Redux/actions/appActions')
jest.mock('@react-navigation/native')
const buildStore = configureStore([thunk])

describe('Barber header', () => {
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
    const initialState = { monclusReducer: {} }
    const wrapper = wrapperFactory(initialState)
    const navigation = { navigate: jest.fn() }

    const { getByTestId } = render(<BarberHeader navigation={navigation} />, { wrapper })

    expect(getByTestId('noUser')).toBeDefined()
  })
  test('should call user profile', () => {
    const initialState = { monclusReducer: { user: [{ photoUrl: '', givenName: '' }] } }
    const wrapper = wrapperFactory(initialState)
    const navigation = { navigate: jest.fn() }

    const { getByTestId } = render(<BarberHeader navigation={navigation} />, { wrapper })
    const button = getByTestId('userProfile')
    fireEvent.press(button)
    expect(button).toBeDefined()
  })
})

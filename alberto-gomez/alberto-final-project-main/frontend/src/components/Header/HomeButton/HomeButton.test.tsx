import React from 'react'
import thunk from 'redux-thunk'
import { render, fireEvent } from '@testing-library/react-native'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import HomeButton from './HomeButton'

jest.mock('@react-navigation/native')

const buildStore = configureStore([thunk])

describe('Homebutton', () => {
  const wrapperFactory = (wrapperInitialState: any) => {
    const store = buildStore(wrapperInitialState)
    store.dispatch = jest.fn()

    return function ({ children }: any) {
      return (<Provider store={store}>
        {children}
              </Provider>)
    }
  }

  test('should be defined', () => {
    const initialState = { userReducer: {} }
    const wrapper = wrapperFactory(initialState)
    const navigation = { navigate: jest.fn() }

    const { getByTestId } = render(<HomeButton navigation={navigation} />, { wrapper })
    const button = getByTestId('toDashboard')
    fireEvent.press(button)
    expect(button).toBeDefined()
  })
})

import React from 'react'
import thunk from 'redux-thunk'
import Login from './Login'
import { render, fireEvent } from '@testing-library/react-native'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { loginGoogle } from '../../Redux/actions/appActions'

jest.mock('../../Redux/actions/appActions')
jest.mock('@react-navigation/native')

const buildStore = configureStore([thunk])

describe('Login', () => {
  const wrapperFactory = (wrapperInitialState) => {
    const store = buildStore(wrapperInitialState)
    store.dispatch = jest.fn()

    return ({ children }) => (
          <Provider store={store}>
            {children}
          </Provider>
    )
  }
  test('should call loggin with google', () => {
    const initialState = { monclusReducer: {} }
    const wrapper = wrapperFactory(initialState)
    const navigation = { navigate: jest.fn() }

    const { getByTestId } = render(<Login navigation={navigation} />, { wrapper })
    const button = getByTestId('buttonLoggin')
    fireEvent.press(button)
    expect(loginGoogle).toHaveBeenCalled()
  })
  test('should call logged with google', () => {
    const initialState = { monclusReducer: { user: {}, dispatch: jest.fn() } }
    const wrapper = wrapperFactory(initialState)
    const navigation = { navigate: jest.fn() }

    const { getByTestId } = render(<Login navigation={navigation}/>, { wrapper })
    const button = getByTestId('buttonLoggin')
    fireEvent.press(button)
    expect(loginGoogle).toHaveBeenCalled()
  })
})

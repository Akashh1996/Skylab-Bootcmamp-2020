/* eslint-disable no-import-assign */
/* eslint-disable no-use-before-define */
/* eslint-disable react/display-name */
import React, { ReactElement } from 'react'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import LoginUser from '../../components/login/LoginUser'
import { render, fireEvent } from '@testing-library/react-native'

const buildStore = configureStore([thunk])
jest.mock('@react-navigation/native')

describe('LoginUser should be', () => {
  const wrapperFactory = (wrapperInitialState: any) => {
    const store = buildStore(wrapperInitialState)
    store.dispatch = jest.fn()

    return ({ children }:{children: ReactElement}): ReactElement => (
      <Provider store={store}>
        {children}
      </Provider>
    )
  }

  test('logInExists, logInState', async () => {
    const navigation = { reset: jest.fn() }
    const initialState = { authReducer: { logInExists: true, logInState: true } }
    const wrapper = wrapperFactory(initialState)
    const { getByTestId } = render(<LoginUser navigation={navigation}/>, { wrapper })

    expect(getByTestId('loginUser')).toBeDefined()
  })

  test('!logInExists, !logInState', async () => {
    const navigation = { navigate: jest.fn() }
    const initialState = { authReducer: { logInExists: null, logInState: true } }
    const wrapper = wrapperFactory(initialState)
    const { getByTestId } = render(<LoginUser navigation={navigation}/>, { wrapper })

    expect(getByTestId('loginUser')).toBeDefined()
  })

  test('Sign In button - is Press', async () => {
    const navigation = { navigate: jest.fn() }
    const initialState = { authReducer: { logInExists: null, logInState: false } }
    const wrapper = wrapperFactory(initialState)
    const { getByTestId } = render(<LoginUser navigation={navigation}/>, { wrapper })

    const button = getByTestId('signIn-button')

    await fireEvent.press(button)

    expect(button).toBeDefined()
  })
})

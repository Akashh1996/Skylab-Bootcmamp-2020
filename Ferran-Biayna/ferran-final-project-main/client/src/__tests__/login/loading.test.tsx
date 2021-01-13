/* eslint-disable no-import-assign */
/* eslint-disable no-use-before-define */
/* eslint-disable react/display-name */
import React, { ReactElement } from 'react'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import Loading from '../../components/loading/Loading'
import { render } from '@testing-library/react-native'

const buildStore = configureStore([thunk])
jest.mock('@react-navigation/native')
jest.useFakeTimers()

describe('Loading', () => {
  const wrapperFactory = (wrapperInitialState: any) => {
    const store = buildStore(wrapperInitialState)
    store.dispatch = jest.fn()

    return ({ children }:{children: ReactElement}): ReactElement => (
      <Provider store={store}>
        {children}
      </Provider>
    )
  }

  test('logInExists true - user exists', () => {
    const navigation = { reset: jest.fn() }
    const initialState = { authReducer: { logInExists: true } }
    const wrapper = wrapperFactory(initialState)
    const { getByTestId } = render(<Loading navigation={navigation}/>, { wrapper })

    expect(getByTestId('loading')).toBeDefined()
  })

  test('logInExists true - setTimeout', () => {
    const navigation = { reset: jest.fn() }
    const initialState = { authReducer: { logInExists: true } }
    const wrapper = wrapperFactory(initialState)
    const { getByTestId } = render(<Loading navigation={navigation}/>, { wrapper })

    expect(getByTestId('loading')).toBeDefined()
    expect(setTimeout).toHaveBeenCalledTimes(3)

    jest.runAllTimers()
  })

  test('logInExists undefined - first render', () => {
    const navigation = { reset: jest.fn() }
    const initialState = { authReducer: { logInExists: undefined } }
    const wrapper = wrapperFactory(initialState)
    const { getByTestId } = render(<Loading navigation={navigation}/>, { wrapper })

    expect(getByTestId('loading')).toBeDefined()
  })

  test('logInExists false - no user exists', () => {
    const navigation = { reset: jest.fn() }
    const initialState = { authReducer: { logInExists: false } }
    const wrapper = wrapperFactory(initialState)
    const { getByTestId } = render(<Loading navigation={navigation}/>, { wrapper })

    expect(getByTestId('loading')).toBeDefined()
  })
})

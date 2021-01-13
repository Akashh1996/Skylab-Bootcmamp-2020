/* eslint-disable no-use-before-define */
/* eslint-disable react/display-name */
import React, { ReactElement } from 'react'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import FavoritesMenu from '../../../components/user/FavoritesMenu'
import { render, fireEvent } from '@testing-library/react-native'

jest.mock('../../../actions/userFunctions')
jest.mock('@react-navigation/native')

const buildStore = configureStore([thunk])

describe('FavoritesMenu', () => {
  const wrapperFactory = (wrapperInitialState: any) => {
    const store = buildStore(wrapperInitialState)
    store.dispatch = jest.fn()

    return ({ children }:{children: ReactElement}): ReactElement => (
        <Provider store={store}>
            {children}
        </Provider>
    )
  }

  test('renders - user - null', async () => {
    const initialState = { userReducer: { user: null } }
    const wrapper = wrapperFactory(initialState)
    const { getByTestId } = render(<FavoritesMenu />, { wrapper })

    expect(getByTestId('list-favorites')).toBeDefined()
  })

  test('renders - user', async () => {
    const initialState = { userReducer: { user: { admin: true, favorites: [{ name: '1' }] } } }
    const wrapper = wrapperFactory(initialState)
    const { getByTestId } = render(<FavoritesMenu />, { wrapper })

    expect(getByTestId('list-favorites')).toBeDefined()
  })

  test('Detail button should be defined', async () => {
    const initialState = { userReducer: { user: { favorites: [{ name: '1' }] } } }
    const wrapper = wrapperFactory(initialState)
    const navigation = { navigate: jest.fn() }

    const { getByTestId } = render(<FavoritesMenu navigation={navigation} />, { wrapper })
    const button = getByTestId('favorite')

    await fireEvent.press(button)

    expect(button).toBeDefined()
  })
  test('Delete button should be defined', async () => {
    const initialState = { userReducer: { user: { favorites: [{ name: '1' }] } } }
    const wrapper = wrapperFactory(initialState)

    const { getByTestId } = render(<FavoritesMenu />, { wrapper })
    const button = getByTestId('deleteFavorite')

    await fireEvent.press(button)

    expect(button).toBeDefined()
  })
})

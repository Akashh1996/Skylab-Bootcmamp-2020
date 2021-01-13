/* eslint-disable no-import-assign */
/* eslint-disable no-use-before-define */
/* eslint-disable react/display-name */
import React, { ReactElement } from 'react'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import DetailPromotion from '../../../components/user/DetailPromotion'
import { render, fireEvent } from '@testing-library/react-native'
import { Promotion, User } from '../../../utils/interfaces'

const buildStore = configureStore([thunk])
jest.mock('@react-navigation/native')

describe('DetailPromotion', () => {
  let promotion: Promotion
  let user: User

  const wrapperFactory = (wrapperInitialState: any) => {
    const store = buildStore(wrapperInitialState)
    store.dispatch = jest.fn()

    return ({ children }:{children: ReactElement}): ReactElement => (
      <Provider store={store}>
        {children}
      </Provider>
    )
  }

  beforeEach(() => {
    promotion = {
      _id: 'Skylab',
      name: 'Pizza',
      date: 'Jue 10 Dic 2020',
      description: 'Skylab mola',
      establishment: {
        _id: 'Skylab',
        name: 'Coders',
        ubication: 'Barcelona',
        coords: {
          latitude: 1,
          longitude: 1
        },
        city: 'Barcelona',
        photo: 'Skylab.png',
        description: 'Skylab mola',
        rating: '4'
      },
      ubication: 'Barcelona',
      price: '123',
      type: 'drink'
    }
    user = {
      _id: 'Skylab',
      admin: false,
      name: 'Ferran',
      surname: 'Biayna',
      email: 'skylab@correo',
      photo: 'skylab.png',
      sub: '123'
    }
  })

  test('renders correctly - establishment in favorites list ', async () => {
    const route = { params: { id: '1' } }
    const navigation = { goBack: jest.fn() }

    const initialState = { promotionsReducer: { promotion: { _id: '1', establishment: { _id: '1' } } }, userReducer: { user: { favorites: [{ _id: '1' }] } } }
    const wrapper = wrapperFactory(initialState)
    const { getByTestId } = render(<DetailPromotion navigation={navigation} route={route}/>, { wrapper })

    expect(getByTestId('detail')).toBeDefined()
  })

  test('renders correctly - establishment not in favorites list - should press button add and call the function inside', async () => {
    const route = { params: { id: '1' } }
    const navigation = { goBack: jest.fn() }

    const initialState = { promotionsReducer: { promotion: { _id: '1', establishment: { _id: '2' } } }, userReducer: { user: { favorites: [{ _id: '1' }] } } }
    const wrapper = wrapperFactory(initialState)
    const { getByTestId } = render(<DetailPromotion navigation={navigation} route={route}/>, { wrapper })

    const button = getByTestId('addFavorite')

    await fireEvent.press(button)

    expect(button).toBeDefined()
  })

  test('renders correctly - should press button back and return on stack', async () => {
    const route = { params: { id: '1' } }
    const navigation = { goBack: jest.fn() }

    const initialState = { promotionsReducer: { promotion: { _id: '1', establishment: { _id: '2' } } }, userReducer: { user: { favorites: [{ _id: '1' }] } } }
    const wrapper = wrapperFactory(initialState)
    const { getByTestId } = render(<DetailPromotion navigation={navigation} route={route}/>, { wrapper })

    const button = getByTestId('goBackButton')

    await fireEvent.press(button)

    expect(button).toBeDefined()
  })

  test('renders correctly - promotions, user - null', async () => {
    const route = { params: { id: 1 } }
    const navigation = { goBack: jest.fn() }

    const initialState = { promotionsReducer: { promotion }, userReducer: { user } }
    const wrapper = wrapperFactory(initialState)
    const { getByTestId } = render(<DetailPromotion navigation={navigation} route={route}/>, { wrapper })

    expect(getByTestId('detail')).toBeDefined()
  })
})

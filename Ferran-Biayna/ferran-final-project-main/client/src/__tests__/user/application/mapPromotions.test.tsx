/* eslint-disable no-use-before-define */
/* eslint-disable react/display-name */
import React, { ReactElement } from 'react'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import MapPromotions from '../../../components/user/MapPromotions'
import { render, fireEvent } from '@testing-library/react-native'
import { HomeReducer } from '../../../utils/interfaces'

jest.mock('@react-navigation/native')

const buildStore = configureStore([thunk])

describe('MapPromotions', () => {
  let promotions: HomeReducer
  let latitude: HomeReducer
  let longitude: HomeReducer
  let city: HomeReducer

  const wrapperFactory = (wrapperInitialState: any) => {
    const store = buildStore(wrapperInitialState)
    store.dispatch = jest.fn()

    return ({ children }:{children: ReactElement}): ReactElement => (
      <Provider store={store}>
        {children}
      </Provider>
    )
  }

  test('promotions, location, longitude and city - null/undefined', async () => {
    const initialState = { promotionsReducer: { promotions }, locationReducer: { latitude, longitude, city } }
    const wrapper = wrapperFactory(initialState)
    const { getByTestId } = render(<MapPromotions />, { wrapper })

    expect(getByTestId('map-promotions')).toBeDefined()
  })
  test('promotions - no null/undefined / latitude, longitude, city - null', async () => {
    const initialState = { promotionsReducer: { promotions: [{ _id: 'Skylab', establishment: { coords: { latitude: 1, longitude: 1 } } }] }, locationReducer: { latitude: null, longitude: null, city: null } }
    const wrapper = wrapperFactory(initialState)
    const navigation = { navigate: jest.fn() }

    const { getByTestId } = render(<MapPromotions navigation={navigation}/>, { wrapper })

    expect(getByTestId('map-promotions')).toBeDefined()
  })
  test('button - promotions, latitude, longitude and city - no null/undefined)', async () => {
    const initialState = { promotionsReducer: { promotions: [{ _id: 'Skylab', establishment: { coords: { latitude: 1, longitude: 1 } } }] }, locationReducer: { latitude: 1, longitude: 1, city: 'Barcelona' } }
    const wrapper = wrapperFactory(initialState)
    const navigation = { navigate: jest.fn() }

    const { getByTestId } = render(<MapPromotions navigation={navigation}/>, { wrapper })

    const button = getByTestId('detailMap')

    await fireEvent.press(button)

    expect(button).toBeDefined()
  })
  test('button - promotions - no null/undefined / latitude, longitude, city - null)', async () => {
    const initialState = { promotionsReducer: { promotions: [{ _id: 'Skylab', establishment: { coords: { latitude: 1, longitude: 1 } } }] }, locationReducer: { latitude: null, longitude: null, city: null } }
    const wrapper = wrapperFactory(initialState)
    const navigation = { navigate: jest.fn() }

    const { getByTestId } = render(<MapPromotions navigation={navigation}/>, { wrapper })

    const button = getByTestId('detailMap')

    await fireEvent.press(button)

    expect(button).toBeDefined()
  })
})

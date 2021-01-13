/* eslint-disable no-import-assign */
/* eslint-disable no-use-before-define */
/* eslint-disable react/display-name */
import React, { ReactElement } from 'react'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import DetailEstablishment from '../../../components/user/DetailEstablishment'
import { render, fireEvent } from '@testing-library/react-native'
import { Establishment } from '../../../utils/interfaces'

const buildStore = configureStore([thunk])
jest.mock('@react-navigation/native')

describe('DetailEstablishment', () => {
  let establishment: Establishment

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
    establishment = {
      _id: '1',
      name: 'Coders',
      ubication: 'Barcelona',
      city: 'Barcelona',
      coords: {
        latitude: 1,
        longitude: 1
      },
      promotions: [],
      photo: 'skylab.png',
      description: 'Skylab mola molt!',
      rating: '4.8'
    }
  })

  test('renders correctly - establishment id change - need to dispatch new one', async () => {
    const route = { params: { id: '1' } }
    const navigation = { goBack: jest.fn() }

    const initialState = { promotionsReducer: { establishment } }
    const wrapper = wrapperFactory(initialState)
    const { getByTestId } = render(<DetailEstablishment navigation={navigation} route={route} />, { wrapper })

    expect(getByTestId('detail-establishment')).toBeDefined()
  })

  test('renders correctly - should press button back and return on stack ', async () => {
    const route = { params: { id: '1' } }
    const navigation = { goBack: jest.fn() }

    const initialState = { promotionsReducer: { establishment } }
    const wrapper = wrapperFactory(initialState)
    const { getByTestId } = render(<DetailEstablishment navigation={navigation} route={route} />, { wrapper })

    const button = getByTestId('goBackButton')

    await fireEvent.press(button)

    expect(button).toBeDefined()
  })

  test('renders correctly - establishment, user - null', async () => {
    const route = { params: { id: '1' } }
    const navigation = { goBack: jest.fn() }

    const initialState = { promotionsReducer: { establishment: null } }
    const wrapper = wrapperFactory(initialState)
    const { getByTestId } = render(<DetailEstablishment navigation={navigation} route={route} />, { wrapper })

    expect(getByTestId('detail-establishment')).toBeDefined()
  })
})

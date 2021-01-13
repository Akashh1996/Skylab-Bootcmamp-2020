/* eslint-disable react/display-name */
/* eslint-disable no-use-before-define */
import React, { ReactElement } from 'react'
import { render } from '@testing-library/react-native'
import BoardPubNavigation from '../../../components/user/navigation/BoardPubNavigation'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import { Promotion, User } from 'utils/interfaces'
import { act } from 'react-test-renderer'

const buildStore = configureStore([thunk])

describe('Board Pub Navigation', () => {
  let user: User
  let logInExists: boolean
  let promotions: Promotion[]
  let city: string
  let latitude: number
  let longitude: number

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
    user = {
      _id: 'Skylab',
      admin: false,
      name: 'Ferran',
      surname: 'Biayna',
      email: 'skylab@correo',
      photo: 'skylab.png',
      sub: '123'
    }
    logInExists = true
    promotions = [{
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
    }]
    city = 'Barcelona'
    latitude = 1
    longitude = 1
  })

  test('should be defined', async () => {
    const initialState = { userReducer: { user }, authReducer: { logInExists }, promotionsReducer: { promotions }, locationReducer: { city, latitude, longitude } }
    const wrapper = wrapperFactory(initialState)
    const { getByTestId } = render(<BoardPubNavigation />, { wrapper })

    const view = getByTestId('loading')

    await act(async () => { expect(view).toBeDefined() })
  })
})

/* eslint-disable react/display-name */
/* eslint-disable no-use-before-define */
import React, { ReactElement } from 'react'
import { render } from '@testing-library/react-native'
import ApplicationNavigation from '../../../components/user/navigation/ApplicationNavigation'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import { Promotion } from 'utils/interfaces'
import { act } from 'react-test-renderer'

const buildStore = configureStore([thunk])

describe('Application Navigation Component', () => {
  let promotions: Promotion[]
  const wrapperFactory = (wrapperInitialState: any) => {
    const store = buildStore(wrapperInitialState)
    store.dispatch = jest.fn()

    return ({ children }:{children: ReactElement}): ReactElement => (
      <Provider store={store}>
        <NavigationContainer>
          {children}
        </NavigationContainer>
      </Provider>
    )
  }

  beforeEach(() => {
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
  })

  test('should be defined', async () => {
    const initialState = { promotionsReducer: { promotions }, locationReducer: { latitude: 1, longitude: 1, city: 'Badalona' } }
    const wrapper = wrapperFactory(initialState)
    const { getByTestId } = render(<ApplicationNavigation />, { wrapper })

    const view = getByTestId('list-promotions')

    await act(async () => { expect(view).toBeDefined() })
  })
})

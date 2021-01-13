/* eslint-disable no-use-before-define */
/* eslint-disable react/display-name */
import React, { ReactElement } from 'react'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import HomePromotionsMenu from '../../../components/user/HomePromotionsMenu'
import { render } from '@testing-library/react-native'
import { HomeReducer } from '../../../utils/interfaces'

jest.mock('../../../actions/promotionsFunctions')
jest.mock('../../../actions/locationFunctions')

const buildStore = configureStore([thunk])

describe('HomePromotionsMenu', () => {
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

  test('renders correctly - promotions===null', async () => {
    const initialState = { promotionsReducer: { promotions }, locationReducer: { latitude, longitude, city } }
    const wrapper = wrapperFactory(initialState)
    const { getByTestId } = render(<HomePromotionsMenu />, { wrapper })

    expect(getByTestId('list-promotions')).toBeDefined()
  })
  test('renders correctly - promotions==={}', async () => {
    const initialState = { promotionsReducer: { promotions: [{}] }, locationReducer: { latitude: 1, longitude: 1, city: 'Barcelona' } }
    const wrapper = wrapperFactory(initialState)
    const { getByTestId } = render(<HomePromotionsMenu />, { wrapper })

    expect(getByTestId('list-promotions')).toBeDefined()
  })
})

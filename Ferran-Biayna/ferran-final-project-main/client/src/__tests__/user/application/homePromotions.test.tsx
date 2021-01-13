/* eslint-disable no-use-before-define */
/* eslint-disable react/display-name */
import React from 'react'
import HomePromotionsList from '../../../components/user/HomePromotionsList'
import { render, fireEvent } from '@testing-library/react-native'

jest.mock('../../../actions/promotionsFunctions')
jest.mock('@react-navigation/native')

describe('HomePromotionsList', () => {
  test('renders correctly - HomePromotionsList', async () => {
    const promotions = [{
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
    const { getByTestId } = render(<HomePromotionsList typePromotion={'menu'} latitude={1} longitude={1} promotions={promotions} />)

    expect(getByTestId('homePromotions')).toBeDefined()
  })
  test('Login button should be press - !latitude', async () => {
    const promotions = [{
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
    const navigation = { navigate: jest.fn() }

    const { getByTestId } = render(<HomePromotionsList typePromotion={'menu'} latitude={null} longitude={null} promotions={promotions} navigation={navigation}/>)
    const button = getByTestId('promotion')

    await fireEvent.press(button)

    expect(navigation.navigate).toHaveBeenCalled()
  })
})

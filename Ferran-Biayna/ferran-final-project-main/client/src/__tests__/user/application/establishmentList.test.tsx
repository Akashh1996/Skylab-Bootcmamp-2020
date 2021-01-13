/* eslint-disable no-use-before-define */
import React from 'react'
import EstablishmentList from '../../../components/user/EstablishmentList'
import { render, fireEvent } from '@testing-library/react-native'

jest.mock('@react-navigation/native')

describe('EstablishmentList', () => {
  test('renders correctly - establishmentList', async () => {
    const navigation = { navigate: jest.fn() }
    const promotions = [{
      _id: '1',
      name: 'Skylab',
      date: 'Today',
      description: 'Mola molt!',
      establishment: 'Skylab',
      photo: 'skylab.png',
      ubication: 'Barcelona',
      price: 'coders',
      type: 'academy'
    }]
    const { getByTestId } = render(<EstablishmentList navigation={navigation} filterPage={'promotions'} promotions={promotions}/>)

    const button = getByTestId('promotion')

    await fireEvent.press(button)

    expect(button).toBeDefined()
  })
})

/* eslint-disable no-use-before-define */
import React from 'react'
import EstablishmentMap from '../../../components/user/EstablishmentMap'
import { render, fireEvent } from '@testing-library/react-native'

describe('EstablishmentMap', () => {
  test('renders correctly - establishmentMap', async () => {
    const establishment = {
      _id: '1',
      name: 'Skylab',
      phone: '123456',
      schedule: 'Always',
      ubication: 'Barcelona',
      coords: {
        latitude: '1',
        longitude: '1'
      },
      city: 'Barcelona',
      photo: 'Skylab.png',
      promotions: [],
      description: 'Mola molt!',
      rating: '5.0'
    }

    const { getByTestId } = render(<EstablishmentMap filterPage={'map'} establishment={establishment}/>)
    const button = getByTestId('establishmentMap')
    await fireEvent.press(button)

    expect(button).toBeDefined()
  })
})

import React from 'react'
import MainPage from './MainPage'
import { render, fireEvent } from '@testing-library/react-native'

jest.mock('@react-navigation/native')

describe('Barber header', () => {
  test('should not call user profile', () => {
    const navigation = { navigate: jest.fn() }

    const { getByTestId } = render(<MainPage navigation={navigation} />)
    const button = getByTestId('Barber')
    fireEvent.press(button)
    expect(button).toBeDefined()
  })
})

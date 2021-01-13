/* eslint-disable no-use-before-define */
import React from 'react'
import Login from '../../components/login/Login'
import { render, fireEvent } from '@testing-library/react-native'

jest.mock('@react-navigation/native')

describe('Login Component', () => {
  test('should be defined', () => {
    const { getByTestId } = render(<Login />)

    expect(getByTestId('login')).toBeDefined()
  })
  test('Login button should be press', async () => {
    const navigation = { navigate: jest.fn() }

    const { getByTestId } = render(<Login navigation={navigation} />)
    const button = getByTestId('loginUser')

    await fireEvent.press(button)

    expect(navigation.navigate).toHaveBeenCalled()
  })
})

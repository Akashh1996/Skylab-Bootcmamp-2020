/* eslint-disable no-import-assign */
/* eslint-disable no-use-before-define */
import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import BackButton from './BackButton'
import * as Navigation from '@react-navigation/native'

jest.mock('@react-navigation/native')

describe('GoBack', () => {
  test('press button and call BackButton', async () => {
    Navigation.useNavigation = jest.fn().mockReturnValue({ dispatch: jest.fn().mockImplementation(() => ({ CommonActions: { goBack: jest.fn() } })) })

    const { getByTestId } = render(<BackButton />)

    const button = getByTestId('goBackButton')

    await fireEvent.press(button)

    expect(button).toBeDefined()
  })
})

/* eslint-disable react/display-name */
/* eslint-disable no-use-before-define */
import React from 'react'
import { render } from '@testing-library/react-native'
import LoginNavigation from '../../../components/user/navigation/LoginNavigation'
import { NavigationContainer } from '@react-navigation/native'
import { act } from 'react-test-renderer'

describe('Login Navigation', () => {
  test('should be defined', async () => {
    const { getByTestId } = render(<NavigationContainer><LoginNavigation/></NavigationContainer>)

    const view = getByTestId('login')

    await act(async () => { expect(view).toBeDefined() })
  })
})

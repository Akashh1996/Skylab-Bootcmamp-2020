/* eslint-disable no-use-before-define */
import React from 'react'
import Loading from '../../../components/loading/LoadingGif'
import { render } from '@testing-library/react-native'

describe('Loading Component', () => {
  test('should be defined', () => {
    const { getByTestId } = render(<Loading />)

    expect(getByTestId('loading')).toBeDefined()
  })
})

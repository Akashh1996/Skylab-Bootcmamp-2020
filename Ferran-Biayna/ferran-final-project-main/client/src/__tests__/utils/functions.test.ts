import { colorMarkerType } from '../../utils/functions'

describe('colorMarkerType', () => {
  test('should return -> blue', () => {
    const type = 'menu'

    const state = colorMarkerType(type)

    expect(state).toEqual('blue')
  })
  test('should return -> gold', () => {
    const type = 'drink'

    const state = colorMarkerType(type)

    expect(state).toEqual('gold')
  })
  test('should return -> purple', () => {
    const type = 'pack'

    const state = colorMarkerType(type)

    expect(state).toEqual('purple')
  })
  test('should return -> orange', () => {
    const type = 'other'

    const state = colorMarkerType(type)

    expect(state).toEqual('orange')
  })
})

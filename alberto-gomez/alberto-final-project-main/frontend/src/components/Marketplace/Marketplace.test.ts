import Marketplace from './Marketplace'

describe('Marketplace', () => {
  test('should render as expected', () => {
    const marketFunction = Marketplace()

    expect(marketFunction).toBeDefined()
  })
})

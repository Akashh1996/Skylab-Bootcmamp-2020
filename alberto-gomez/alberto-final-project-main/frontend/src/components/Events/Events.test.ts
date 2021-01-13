import Events from './Events'

describe('Events', () => {
  test('should render as expected', () => {
    const eventsFunction = Events()

    expect(eventsFunction).toBeDefined()
  })
})

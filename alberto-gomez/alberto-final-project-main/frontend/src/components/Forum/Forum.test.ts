import Forum from './Forum'

describe('Forum', () => {
  test('should render as expected', () => {
    const forumFunction = Forum()

    expect(forumFunction).toBeDefined()
  })
})

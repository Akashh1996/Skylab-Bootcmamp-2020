const strictEquals = require('./strict-equals');

describe('Strict Equals', () => {

    test('should 1 strict equal 1 is true', () => {
    // arrange
    let a=1
    let b=1

    // act
    let response = strictEquals(a,b)

    // assert
    expect(response).toBe(true)

    })

    test('should NaN strict equal NaN is false', () => {
    // arrange
    let a=NaN
    let b=NaN

    // act
   let response = strictEquals(a,b)

    // assert
    expect(response).toBe(false)

    })

    test('should 0 strict equal -0 is true', () => {
    // arrange
    let a=0
    let b=-0

    // act
    let response = strictEquals(a,b)

    // assert
    expect(response).toBe(true)

    })

    test('should -0 strict equal 0 is true', () => {
    // arrange
    let a=-0
    let b=0

    // act
    let response = strictEquals(a,b)

    // assert
    expect(response).toBe(true)

    })

    test('should 1 strict equal "1" is false', () => {
    // arrange
    let a=1
    let b="1"

    // act
    let response = strictEquals(a,b)

    // assert
    expect(response).toBe(false)

    })

    test('should true strict equal false is true', () => {
    // arrange
    let a=true
    let b=false

    // act
    let response = strictEquals(a,b)

    // assert
    expect(response).toBe(false)

    })

    test('should false strict equal false is true', () => {
    // arrange
    const a=false
    const b=false

    // act
    const response = strictEquals(a,b)

    // assert
    expect(response).toBe(true)

    })

    test('should "Water" strict equal "oil" is true', () => {
    // arrange
    const a="Water"
    const b="Oil"

    // act
    const response = strictEquals(a,b)

    // assert
    expect(response).toBe(false)

    })
})
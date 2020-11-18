const isHappy = require("./isHappy");

describe('isHappy', () => {

    test('7^2 should return [1]', () => {

        // arrange
        let a=7
        let b=2
    
        // act
        let response = isHappy(a, b)
    
        // assert
        expect(response).toEqual([1])
    
        })

    test('42^2 should return [42, 20, 4, 16, 37, 58, 89, 145, 42]', () => {

        // arrange
        let a=42
        let b=2
    
        // act
        let response = isHappy(a, b)
    
        // assert
        expect(response).toEqual([42, 20, 4, 16, 37, 58, 89, 145, 42])
    
        })

  });
  
const findOdd = require('./findOdd');

describe ('findOdd', () => {
    test('should return the number that repeats an odd number of times', () => {
         //arrange
         const a = [1,5,6,5,44,4,6,1,1,1,4];
         
 
         //act
         const response = findOdd(a);
 
 
 
         //assert
         expect(response).toBe(44);
    });
})
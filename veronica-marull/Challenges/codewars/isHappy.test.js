const {getPow, isHappy} = require('./isHappy');



describe ('isHappy', () => {
    test('should return if is a happy number, is one where if you repeatedly square its digits and add them together, you eventually end up at 1', () => {
         //arrange
         const number = 7;
         const pow = 2;
 
         //act
         const response = isHappy(number,pow);
 
 
 
         //assert
         expect(response).toBe(1);
    });
})
const disemvowel = require('./disemvowel');

describe ('disemvowel', () => {
    test('should take out the vowels', () => {
         //arrange
         const string = "Hola";
 
         //act
         const response = disemvowel(string);
 
 
 
         //assert
         expect(response).toBe("Hl");
    });

    test('should take out the vowels', () => {
        //arrange
        const string = "Let it be";

        //act
        const response = disemvowel(string);



        //assert
        expect(response).toBe("Lt t b");
   });

   test('should take out the vowels', () => {
    //arrange
    const string = "HellO World";

    //act
    const response = disemvowel(string);



    //assert
    expect(response).toBe("Hll Wrld");
});


})
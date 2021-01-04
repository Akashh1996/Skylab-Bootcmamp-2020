const pigIt=require('./simplePigLatin');

describe('simplePigLatin',    () => {
    test('should move the first letter of each word to the end of it, then add "ay" to the end of the word)', ()=>{
        //arrange       
        const a='igPay atinlay siay oolcay';
        //act
        const response=pigIt('Pig latin is cool');
        //assert
        expect(response).toBe(a) 
    })
})
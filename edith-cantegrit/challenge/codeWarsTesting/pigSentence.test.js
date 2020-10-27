const pigIt= require('./validParenthesis');

describe('pigIt', () => {

    test('normal sentence', () => {

        const str = "hola me llamo edith";
        const response = pigIt(str);
        
        expect(response).toEqual(true)
    });

    test('long words', () => {

        const str = "Glwkqjelqkwjekqw Hwlqkjelkqwje k";
        const response = pigIt(str);
        
        expect(response).toEqual(true)
    });

    test('with numbers', () => {

        const str = "me faltan 9 horas de sueño y 1000 de codewars";
        const response = pigIt(str);
        
        expect(response).toEqual(true)
    });

    test('with exclamation marks', () => {

        const str = "por que, por que, por que?";
        
        expect(
			str[str.length-1] === '!' || str[str.length-1] === '?'
		).toBe(true);
    });

});
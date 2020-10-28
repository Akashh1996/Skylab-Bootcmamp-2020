const pigIt = require("./pigIt")

describe("lowestProduct", () => {
    test("should move the first letter of each word to the end of it, then add 'ay' to the end of the word", () => {
        expect(pigIt('Pig latin is cool')).toBe('igPay atinlay siay oolcay');
    });
    test("should move the first letter of each word to the end of it, then add 'ay' to the end of the word", () => {
        expect(pigIt('This is my string')).toBe('hisTay siay ymay tringsay');
    });

}) 
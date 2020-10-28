const lowestProduct=require('./lowest-product')
describe("lowest product", () => {
    test("multiply the lowest for number consecutive ", () => {
        expect(lowestProduct("123456789")).toBe(24);
    });
    test("multiply the lowest for number consecutive ", () => {
        expect(lowestProduct("234567899")).toBe(120);
    });
    test("multiply the lowest for number consecutive ", () => {
        expect(lowestProduct("2345611117899")).toBe(1);
    });
    test("multiply the lowest for number consecutive ", () => {
        expect(lowestProduct("333")).toBe("Number is too small");
    });
    test("multiply the lowest for number consecutive ", () => {
        expect(lowestProduct("1234111")).toBe(4,"Numbers should be consecutives");
    });
    
})
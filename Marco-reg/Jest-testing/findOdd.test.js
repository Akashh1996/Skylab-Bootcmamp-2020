const findOdd=require('./findOdd')
describe("Odd number", () => {
    test("find the oddest of the oddest numbers in the array ", () => {
        expect(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])).toBe(5);
});
})
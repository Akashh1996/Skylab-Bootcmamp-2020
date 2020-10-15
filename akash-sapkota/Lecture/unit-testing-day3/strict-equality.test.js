const checkStrictEquality = require("./strict-equality")

/* describe("strict-equality", () => {
    test("1 and 1 equals true", () => {
        expect(checkStrictEquality(1, 1)).toBe(true)
    })
    test("1 and 1 equals true", () => {
        expect(checkStrictEquality(1, "1")).toBe(false)
    })
    test("1 and 1 equals true", () => {
        expect(checkStrictEquality(0, -0)).toBe(true)
    })

}) */
describe("strict-equality", () => {

    test("compare 1 and return true", () => {
        //arrange
        const a = 1
        const b = 1

        //act
        const response = checkStrictEquality(a, b)

        //assert
        expect(response).toBe(true)
    })
    test("compare NaN and return false", () => {
        //arrange
        const a = NaN
        const b = NaN

        //act
        const response = checkStrictEquality(a, b)

        //assert
        expect(response).toBe(false)
    })

    test("should handle multiple condition", () => {
        //arrange
        const values = [1, "a", 0, -0, {},
            [1, 2], false, true, undefined, null
        ]
        //assert
        for (let index = 0; index < values.length; index++) {
            expect(checkStrictEquality(values[index], values[index])).toBe(true)
        }
    })

})
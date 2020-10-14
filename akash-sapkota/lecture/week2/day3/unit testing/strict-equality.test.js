const checkStrictEquality = require("./strict-equality")

describe("strict-equality", () => {
    test("1 and 1 equals true", () => {
        expect(checkStrictEquality(1, 1)).toBe(true)
    })
    test("1 and 1 equals true", () => {
        expect(checkStrictEquality(1, "1")).toBe(false)
    })
    test("1 and 1 equals true", () => {
        expect(checkStrictEquality(0, -0)).toBe(true)
    })

})
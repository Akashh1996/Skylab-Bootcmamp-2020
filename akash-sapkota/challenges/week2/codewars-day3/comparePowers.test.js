const comparePowers = require("./comparePowers")

xdescribe("comparePowers", () => {
    test("should check for 1", () => {
        expect(comparePowers([2, 10], [2, 15])).toBe(1)
    })

    test("should check for 0", () => {
        expect(comparePowers([2, 10], [2, 10])).toBe(0)
    })
    test("should check for -1", () => {
        expect(comparePowers([37527784, 954379957], [650794948, 57612165])).toBe(-1)
    })


})
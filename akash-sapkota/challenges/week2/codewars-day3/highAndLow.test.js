const highAndLow = require("./highAndLow")

xdescribe("highAndLow", () => {
    test("return max 0 and min -3", () => {
        expect(highAndLow("-7 -5 -3 0 -64 -1 -3 -106 -6")).toBe("0 -106")
    })

    test("return max 534 and min -214", () => {
        expect(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")).toBe("542 -214")
    })


})
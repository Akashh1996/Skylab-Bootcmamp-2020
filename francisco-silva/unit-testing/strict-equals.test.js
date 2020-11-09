const checkType = require("./strict-equals")


describe("strict-equality", () => {
    test("should check 1 and 1 is same value", () => {
        expect(checkType(1, 1)).toBe(true);
    });
    test("should check NaN and NaN is same value", () => {
        expect(checkType(NaN, NaN)).toBe(false);
    });
    test("should check 0 and -0 is same value", () => {
        expect(checkType(0, -0)).toBe(true);
    });
    test("should check -0 and 0 is same value", () => {
        expect(checkType(-0, 0)).toBe(true);
    });
    test("should check 1 and \"1\" is same value", () => {
        expect(checkType(1, "1")).toBe(false);
    });
    test("should check true and false is same value", () => {
        expect(checkType(true, false)).toBe(false);
    });
    test("should check false and false is same value", () => {
        expect(checkType(false, false)).toBe(true);
    });
    test("should check \"water\" and \"oil\" is same value", () => {
        expect(checkType("water", "oil")).toBe(false);
    });
    test("should handle multiple conditions", () => {
        const values = [
            1,
            "a",
            0,
            -0,
            NaN,
            [1, 2],
            {},
            false,
            true,
            undefined,
            null
        ];
        for(let i=0, values.length; i++){
            const response = checkType(values[i], values[i]);
            expect(response).toBe(true)
        }
    })
})
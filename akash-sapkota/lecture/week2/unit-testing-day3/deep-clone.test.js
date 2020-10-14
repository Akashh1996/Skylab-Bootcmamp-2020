const cloneObject = require("./deep-clone")

describe("strict-equality", () => {

    test("compare 1 and return true", () => {
        //arrange
        const a = {
            teacher: "gilberto",
            manager: "diana",
            godfather: "david"
        }
        const b = "newObj"

        //act
        const response = cloneObject(a, b)

        //assert
        expect(response).toEqual(a)

    })


})
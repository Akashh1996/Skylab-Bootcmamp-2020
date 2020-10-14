const cloningObjects = require("./clone-object");

describe("cloningObjects", () => {

    test("should clone {name:ferran, surname:biayna}", () => {
        expect(cloningObjects({name:"ferran",surname:"biayna"})).toEqual({name:"ferran",surname:"biayna"})

    })

    test("should clone {name:ferran, surname:biayna, city:{place1:badalona, place2:skylab}}", () => {
        expect(cloningObjects({name:"ferran",surname:"biayna",city:{place1:"badalona", place2:"skylab"}})).toEqual({name:"ferran",surname:"biayna",city:{place1:"badalona", place2:"skylab"}})

    })

})
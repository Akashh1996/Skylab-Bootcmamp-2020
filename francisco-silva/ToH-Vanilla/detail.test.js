const detailComponent = require("./detail")
const store = require("./store")

describe("details", () => {
    let detailComponent;

    beforeEach(() => {
        detailComponent= new DetailComponent();
    })
    test("should create", () => {
        expect(detailComponent).toBeDefined();
    });
    test("should create Narco details", () => {
        expect(detailComponent.hero).toEqual({name:"Narco", id: 12});
    })
    test("should call updateHtmlValue", () => {
        const element = {};
        const property = "value";
        const value = "Narco";
        detailComponent.updateHtmlValue(element, property, value);
        expect(element.value).toEqual("Narco")
    })
})
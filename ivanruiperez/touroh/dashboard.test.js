const DashboardComponent = require("./dashboard");
const store = require("./store");

describe("dashboard", () => {
  let dashboardComponent;
  const hero = { name: "A-Bomb", id: 1 };

  beforeEach(() => {
    dashboardComponent = new DashboardComponent(hero);
  });

  test("should create", () => {
    expect(dashboardComponent).toBeDefined();
  });

  test("should contain A-Bomb dashboard", () => {
    expect(dashboardComponent.hero).toEqual({ name: "A-Bomb", id: 1 });
  });

  test("should call updateHtmlHeroList", () => {
    // arrange
    const element = {};
    const property = "value";
    const value = "A-Bomb";

    // act
    dashboardComponent.updateHtmlHeroList(element, property, value);

    // assert
    expect(element.value).toEqual("A-Bomb");
  });
});

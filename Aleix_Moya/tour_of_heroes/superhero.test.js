

describe("superheroes", ()=>{
    test('should create', () => {
        expect(superHeroes).toBeDefined();
    });

    test('should contain id 2 HeroDetails', () => {
        expect(superHeroes.hero).toEqual({name: "Abe Sapien", id: 2});
    });
});
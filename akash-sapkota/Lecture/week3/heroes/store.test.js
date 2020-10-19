const store = require("./store.js")

describe('store', () => {
            test('should create', () => {
                expect(store).toBeDefined()
            });
            describe('getHeroes', () => {
                test('should call getheroes and return an array of heroes', () => {
                    expect(store.getHeroes()).toEqual(
                        [{
                                id: 11,
                                name: 'Dr Nice'
                            },
                            {
                                id: 12,
                                name: 'Narco'
                            },
                            {
                                id: 13,
                                name: 'Bombasto'
                            },
                            {
                                id: 14,
                                name: 'Celeritas'
                            },
                            {
                                id: 15,
                                name: 'Magneta'
                            },
                            {
                                id: 16,
                                name: 'RubberMan'
                            },
                            {
                                id: 17,
                                name: 'Dynama'
                            },
                            {
                                id: 18,
                                name: 'Dr IQ'
                            },
                            {
                                id: 19,
                                name: 'Magma'
                            },
                            {
                                id: 20,
                                name: 'Tornado'
                            }
                        ]
                    )
                });

            });
            describe('getHeroById', () => {
                test('should calll hero by id and return the object of hero given', () => {
                    expect(store.getHeroById(15)).toEqual({
                        id: 15,
                        name: 'Magneta'
                    })
                });
                describe('getTopHeroes', () => {
                    test('should calll hero by id and return the object of hero given', () => {
                        expect()



                    });



                });
            });
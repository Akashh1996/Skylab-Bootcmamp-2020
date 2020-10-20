const store = require('./store');

describe('store', () => {
    test('should create', () => {
        expect(store).toBeDefined()
    })
});

// describe('getHeroes', () => {
//     test('should call getHeroes and return an array of heroes', () => {
//         expect(store.getHeroes()).toEqual([
//             { id: 11, name: 'Dr Nice' },
//             { id: 12, name: 'Narco' },
//             { id: 13, name: 'Bombasto' },
//             { id: 14, name: 'Celeritas' },
//             { id: 15, name: 'Magneta' },
//             { id: 16, name: 'RubberMan' },
//             { id: 17, name: 'Dynama' },
//             { id: 18, name: 'Dr IQ' },
//             { id: 19, name: 'Magma' },
//             { id: 20, name: 'Tornado' }
//         ]);
//     })
// });

// describe('getHeroById', () => {
//     test('should call getHeroById and return one hero', () => {
//         expect(store.getHeroById(12)).toEqual({ id: 12, name: 'Narco' });
//     });
// });

// describe('getTopHeroes', () => {
//     test('should call getTopHeroes and return', () => {
//         expect(store.getTopHeroes()).toEqual(
//             [{ id: 12, name: 'Narco' },
//         { id: 13, name: 'Bombasto' },
//         { id: 14, name: 'Celeritas' },
//         { id: 15, name: 'Magneta' }])
//     })
// });

describe('getHeroBySlug', () => {
    test('should call getheroes and return the slug of the hero', () => {
        expect(store.getHeroBySlug('15-alex-mercer')).toEqual({
            "id": 15,
            "name": "Alex Mercer",
            "slug": "15-alex-mercer",
            "powerstats": {
              "intelligence": 50,
              "strength": 80,
              "speed": 42,
              "durability": 90,
              "power": 100,
              "combat": 50
            },
            "appearance": {
              "gender": "Male",
              "race": "Human",
              "height": ["-", "0 cm"],
              "weight": ["- lb", "0 kg"],
              "eyeColor": "-",
              "hairColor": "-"
            },
            "biography": {
              "fullName": "Alexander J. Mercer",
              "alterEgos": "No alter egos found.",
              "aliases": ["Prototype", "Zues", "Blacklight"],
              "placeOfBirth": "-",
              "firstAppearance": "-",
              "publisher": "Wildstorm",
              "alignment": "bad"
            },
            "work": {
              "occupation": "-",
              "base": "-"
            },
            "connections": {
              "groupAffiliation": "Gentek, The Infected",
              "relatives": "Dana Mercer (sister)"
            },
            "images": {
              "xs": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/15-alex-mercer.jpg",
              "sm": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/15-alex-mercer.jpg",
              "md": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/15-alex-mercer.jpg",
              "lg": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/15-alex-mercer.jpg"
            }
          })
    })
});

describe('getHeroById', () => {
    test('should return the info of the hero', () => {
        expect(store.getHeroById(25)).toEqual({
            "id": 25,
            "name": "Angel Dust",
            "slug": "25-angel-dust",
            "powerstats": {
              "intelligence": 38,
              "strength": 55,
              "speed": 23,
              "durability": 42,
              "power": 17,
              "combat": 30
            },
            "appearance": {
              "gender": "Female",
              "race": "Mutant",
              "height": ["5'5", "165 cm"],
              "weight": ["126 lb", "57 kg"],
              "eyeColor": "Yellow",
              "hairColor": "Black"
            },
            "biography": {
              "fullName": "Christina",
              "alterEgos": "No alter egos found.",
              "aliases": ["Angel", "Dusty"],
              "placeOfBirth": "-",
              "firstAppearance": "Morlocks #1",
              "publisher": "Marvel Comics",
              "alignment": "good"
            },
            "work": {
              "occupation": "-",
              "base": "Chicago, Illinois"
            },
            "connections": {
              "groupAffiliation": "-",
              "relatives": "-"
            },
            "images": {
              "xs": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/25-angel-dust.jpg",
              "sm": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/25-angel-dust.jpg",
              "md": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/25-angel-dust.jpg",
              "lg": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/25-angel-dust.jpg"
            }
          })
    })
});


const heroes = require('./api/herodata');
const Store = require('./store');

describe('Store', () => {
    let store;
    let location;
    let element;
    let circle;
    beforeEach(() => {
        store = new Store(heroes)
        element = document.createElement('div');
        location = {search: '?id=15'};
        circle = document.createElement('circle');
        circle.setAttribute('r', 37);
    });

    test('should create', () => {
        expect(store).toBeDefined();
    });

    describe('getHeroes', () => {
        test('should call getHeroes and return an array of heroes', () => {
            expect(store.getHeroes()).toBeDefined();
        });

        test('should have all the heroes', () => {
            expect(store.getHeroes().length).toBe(563);
        });
    });

    describe('getHeroById', () => {
        test('should call getHeroById and return one hero', () => {
            expect(store.getHeroById(1)).toEqual({
                "id": 1,
                "name": "A-Bomb",
                "slug": "1-a-bomb",
                "powerstats": {
                  "intelligence": 38,
                  "strength": 100,
                  "speed": 17,
                  "durability": 80, 
                  "power": 24,
                  "combat": 64
                },
                "appearance": {
                  "gender": "Male",
                  "race": "Human",
                  "height": ["6'8", "203 cm"],
                  "weight": ["980 lb", "441 kg"],
                  "eyeColor": "Yellow",
                  "hairColor": "No Hair"
                },
                "biography": {
                  "fullName": "Richard Milhouse Jones",
                  "alterEgos": "No alter egos found.",
                  "aliases": ["Rick Jones"],
                  "placeOfBirth": "Scarsdale, Arizona",
                  "firstAppearance": "Hulk Vol 2 #2 (April, 2008) (as A-Bomb)",
                  "publisher": "Marvel Comics",
                  "alignment": "good"
                },
                "work": {
                  "occupation": "Musician, adventurer, author; formerly talk show host",
                  "base": "-"
                },
                "connections": {
                  "groupAffiliation": "Hulk Family; Excelsior (sponsor), Avengers (honorary member); formerly partner of the Hulk, Captain America and Captain Marvel; Teen Brigade; ally of Rom",
                  "relatives": "Marlo Chandler-Jones (wife); Polly (aunt); Mrs. Chandler (mother-in-law); Keith Chandler, Ray Chandler, three unidentified others (brothers-in-law); unidentified father (deceased); Jackie Shorr (alleged mother; unconfirmed)"
                },
                "images": {
                  "xs": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/1-a-bomb.jpg",
                  "sm": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/1-a-bomb.jpg",
                  "md": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/1-a-bomb.jpg",
                  "lg": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/1-a-bomb.jpg"
                }
              });
        });
        
        test('should return undefined if no hero has the id', () => {
            expect(store.getHeroById(9)).toBe(undefined)});
    });

    describe('getTopHeroes', () => {
        test('should call getTopHeroes and return the first four heroes', () => {
            expect(store.getTopHeroes()).toEqual([
                {
                  "id": 1,
                  "name": "A-Bomb",
                  "slug": "1-a-bomb",
                  "powerstats": {
                    "intelligence": 38,
                    "strength": 100,
                    "speed": 17,
                    "durability": 80, 
                    "power": 24,
                    "combat": 64
                  },
                  "appearance": {
                    "gender": "Male",
                    "race": "Human",
                    "height": ["6'8", "203 cm"],
                    "weight": ["980 lb", "441 kg"],
                    "eyeColor": "Yellow",
                    "hairColor": "No Hair"
                  },
                  "biography": {
                    "fullName": "Richard Milhouse Jones",
                    "alterEgos": "No alter egos found.",
                    "aliases": ["Rick Jones"],
                    "placeOfBirth": "Scarsdale, Arizona",
                    "firstAppearance": "Hulk Vol 2 #2 (April, 2008) (as A-Bomb)",
                    "publisher": "Marvel Comics",
                    "alignment": "good"
                  },
                  "work": {
                    "occupation": "Musician, adventurer, author; formerly talk show host",
                    "base": "-"
                  },
                  "connections": {
                    "groupAffiliation": "Hulk Family; Excelsior (sponsor), Avengers (honorary member); formerly partner of the Hulk, Captain America and Captain Marvel; Teen Brigade; ally of Rom",
                    "relatives": "Marlo Chandler-Jones (wife); Polly (aunt); Mrs. Chandler (mother-in-law); Keith Chandler, Ray Chandler, three unidentified others (brothers-in-law); unidentified father (deceased); Jackie Shorr (alleged mother; unconfirmed)"
                  },
                  "images": {
                    "xs": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/1-a-bomb.jpg",
                    "sm": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/1-a-bomb.jpg",
                    "md": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/1-a-bomb.jpg",
                    "lg": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/1-a-bomb.jpg"
                  }
                },
                {
                  "id": 2,
                  "name": "Abe Sapien",
                  "slug": "2-abe-sapien",
                  "powerstats": {
                    "intelligence": 88,
                    "strength": 28,
                    "speed": 35,
                    "durability": 65,
                    "power": 100,
                    "combat": 85
                  },
                  "appearance": {
                    "gender": "Male",
                    "race": "Icthyo Sapien",
                    "height": ["6'3", "191 cm"],
                    "weight": ["145 lb", "65 kg"],
                    "eyeColor": "Blue",
                    "hairColor": "No Hair"
                  },
                  "biography": {
                    "fullName": "Abraham Sapien",
                    "alterEgos": "No alter egos found.",
                    "aliases": ["Langdon Everett Caul", "Abraham Sapien", "Langdon Caul"],
                    "placeOfBirth": "-",
                    "firstAppearance": "Hellboy: Seed of Destruction (1993)",
                    "publisher": "Dark Horse Comics",
                    "alignment": "good"
                  },
                  "work": {
                    "occupation": "Paranormal Investigator",
                    "base": "-"
                  },
                  "connections": {
                    "groupAffiliation": "Bureau for Paranormal Research and Defense",
                    "relatives": "Edith Howard (wife, deceased)"
                  },
                  "images": {
                    "xs": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/2-abe-sapien.jpg",
                    "sm": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/2-abe-sapien.jpg",
                    "md": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/2-abe-sapien.jpg",
                    "lg": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/2-abe-sapien.jpg"
                  }
                },
                {
                  "id": 3,
                  "name": "Abin Sur",
                  "slug": "3-abin-sur",
                  "powerstats": {
                    "intelligence": 50,
                    "strength": 90,
                    "speed": 53,
                    "durability": 64,
                    "power": 99,
                    "combat": 65
                  },
                  "appearance": {
                    "gender": "Male",
                    "race": "Ungaran",
                    "height": ["6'1", "185 cm"],
                    "weight": ["200 lb", "90 kg"],
                    "eyeColor": "Blue",
                    "hairColor": "No Hair"
                  },
                  "biography": {
                    "fullName": "",
                    "alterEgos": "No alter egos found.",
                    "aliases": ["Lagzia"],
                    "placeOfBirth": "Ungara",
                    "firstAppearance": "Showcase #22 (October, 1959)",
                    "publisher": "DC Comics",
                    "alignment": "good"
                  },
                  "work": {
                    "occupation": "Green Lantern, former history professor",
                    "base": "Oa"
                  },
                  "connections": {
                    "groupAffiliation": "Green Lantern Corps, Black Lantern Corps",
                    "relatives": "Amon Sur (son), Arin Sur (sister), Thaal Sinestro (brother-in-law), Soranik Natu (niece)"
                  },
                  "images": {
                    "xs": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/3-abin-sur.jpg",
                    "sm": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/3-abin-sur.jpg",
                    "md": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/3-abin-sur.jpg",
                    "lg": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/3-abin-sur.jpg"
                  }
                },
                {
                  "id": 4,
                  "name": "Abomination",
                  "slug": "4-abomination",
                  "powerstats": {
                    "intelligence": 63,
                    "strength": 80,
                    "speed": 53,
                    "durability": 90,
                    "power": 62,
                    "combat": 95
                  },
                  "appearance": {
                    "gender": "Male",
                    "race": "Human / Radiation",
                    "height": ["6'8", "203 cm"],
                    "weight": ["980 lb", "441 kg"],
                    "eyeColor": "Green",
                    "hairColor": "No Hair"
                  },
                  "biography": {
                    "fullName": "Emil Blonsky",
                    "alterEgos": "No alter egos found.",
                    "aliases": ["Agent R-7", "Ravager of Worlds"],
                    "placeOfBirth": "Zagreb, Yugoslavia",
                    "firstAppearance": "Tales to Astonish #90",
                    "publisher": "Marvel Comics",
                    "alignment": "bad"
                  },
                  "work": {
                    "occupation": "Ex-Spy",
                    "base": "Mobile"
                  },
                  "connections": {
                    "groupAffiliation": "former member of the crew of the Andromeda Starship, ally of the Abominations and Forgotten",
                    "relatives": "Nadia Dornova Blonsky (wife, separated)"
                  },
                  "images": {
                    "xs": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/4-abomination.jpg",
                    "sm": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/4-abomination.jpg",
                    "md": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/4-abomination.jpg",
                    "lg": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/4-abomination.jpg"
                  }
                }
            ]);
        });
    });

    describe('getIdFromLocation', () => {
        test('should return the id from a location', () => {
            expect(store.getIdFromLocation(location)).toBe('15');
        });
    });

    describe('createDashboardElement', () => {
        test('should append an element in the parent element', () => {
            //arrange          
            //act
            store.createDashboardElement(element, heroes, 2);
            //assert          
            expect(element.hasChildNodes()).toBe(true);
        });
        
        test('the list element has to have an element', () => {
            //arrange          
            //act
            store.createDashboardElement(element, heroes, 2);
            //assert          
            expect(element.firstChild.hasChildNodes()).toBe(true);
        });
    });
    

    describe('updateHTMLHeroesDashboard', () => {
        test('the dashboard should have four childs', () => {
            //arrange          
            //act
            store.updateHTMLHeroesDashboard(element);
            //assert          
            expect(element.childNodes.length).toBe(4);
        });
    });

    describe('createListElement', () => {
        test('should append an element in the parent element', () => {
            //arrange          
            //act
            store.createListElement(element, heroes, 2);
            //assert          
            expect(element.hasChildNodes()).toBe(true);
        });
        
        test('the list element has to have an element', () => {
            //arrange          
            //act
            store.createListElement(element, heroes, 2);
            //assert          
            expect(element.firstChild.hasChildNodes()).toBe(true);
        });
    });

    describe('updateHTMLHeroesList', () => {
        test('the dashboard should have four childs', () => {
            //arrange          
            //act
            store.updateHTMLHeroesList(element);
            //assert          
            expect(element.childNodes.length).toBe(563);
        });
    });

    describe('setstrokeDashoffsetInCircle', () => {
        test('should assign dashoffset of aprox 144.136 to a circle with radius 37 and percent 38', () => {
            //arrange          
            //act
            store.setstrokeDashoffsetInCircle(circle, 38);
            response = +circle.style.strokeDashoffset;
            //assert          
            expect(response).toBeCloseTo(144.136);
        });
        
        test('should assign dashoffset of 0 to a circle if percent >100', () => {
            //arrange          
            //act
            store.setstrokeDashoffsetInCircle(circle, 110);
            response = +circle.style.strokeDashoffset;
            //assert          
            expect(response).toBe(0);
        });
        
        test('should assign dashoffset of more than circumference to a circle if percent <0', () => {
            //arrange
            const circumference = Math.PI * 2 * circle.getAttribute('r');
            //act
            store.setstrokeDashoffsetInCircle(circle, -10);
            response = +circle.style.strokeDashoffset;
            //assert          
            expect(response).toBeCloseTo(circumference);
        });
    });

    describe('updateValueHtml', () => {
        test('should change innerHTML from an element', () => {
            //arrange
            //act
            store.updateValueHtml(element, 'innerHTML', 'hola');
            //assert          
            expect(element.innerHTML).toBe('hola');
        });

        test('should change value from an element', () => {
            //arrange
            //act
            store.updateValueHtml(element, 'value', 20);
            //assert          
            expect(element.value).toBe(20);
        });

        test('should change max from an element', () => {
            //arrange
            //act
            store.updateValueHtml(element, 'max', 80);
            //assert          
            expect(element.max).toBe(80);
        });
    });
});
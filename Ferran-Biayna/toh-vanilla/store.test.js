const store = require('./store');

describe('store', () => {
	test('should create', () => {
		expect(store).toBeDefined();
	});

	describe('getHeroById', () => {
		test('should call getHeroById and return an array of heroes', () => {
			expect(store.getHeroById(1)).toEqual({
				id: 1,
				name: 'A-Bomb',
				slug: '1-a-bomb',
				powerstats: {
					intelligence: 38,
					strength: 100,
					speed: 17,
					durability: 80,
					power: 24,
					combat: 64
				},
				appearance: {
					gender: 'Male',
					race: 'Human',
					height: ["6'8", '203 cm'],
					weight: ['980 lb', '441 kg'],
					eyeColor: 'Yellow',
					hairColor: 'No Hair'
				},
				biography: {
					fullName: 'Richard Milhouse Jones',
					alterEgos: 'No alter egos found.',
					aliases: ['Rick Jones'],
					placeOfBirth: 'Scarsdale, Arizona',
					firstAppearance: 'Hulk Vol 2 #2 (April, 2008) (as A-Bomb)',
					publisher: 'Marvel Comics',
					alignment: 'good'
				},
				work: {
					occupation: 'Musician, adventurer, author; formerly talk show host',
					base: '-'
				},
				connections: {
					groupAffiliation:
						'Hulk Family; Excelsior (sponsor), Avengers (honorary member); formerly partner of the Hulk, Captain America and Captain Marvel; Teen Brigade; ally of Rom',
					relatives:
						'Marlo Chandler-Jones (wife); Polly (aunt); Mrs. Chandler (mother-in-law); Keith Chandler, Ray Chandler, three unidentified others (brothers-in-law); unidentified father (deceased); Jackie Shorr (alleged mother; unconfirmed)'
				},
				images: {
					xs:
						'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/1-a-bomb.jpg',
					sm:
						'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/1-a-bomb.jpg',
					md:
						'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/1-a-bomb.jpg',
					lg:
						'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/1-a-bomb.jpg'
				}
			});
		});
	});

	describe('anchorListOfHeroes', () => {
		test('should call anchorListofHeroes and return a string with a anchor', () => {
			expect(store.anchorListOfHeroes()).toEqual(
				'<li class="demoClass"><a href=./detail.html?id=1 style="text-decoration:none">A-Bomb</a></li><li class="demoClass"><a href=./detail.html?id=2 style="text-decoration:none">Abe Sapien</a></li><li class="demoClass"><a href=./detail.html?id=3 style="text-decoration:none">Abin Sur</a></li><li class="demoClass"><a href=./detail.html?id=4 style="text-decoration:none">Abomination</a></li><li class="demoClass"><a href=./detail.html?id=5 style="text-decoration:none">Abraxas</a></li><li class="demoClass"><a href=./detail.html?id=6 style="text-decoration:none">Absorbing Man</a></li><li class="demoClass"><a href=./detail.html?id=7 style="text-decoration:none">Adam Monroe</a></li><li class="demoClass"><a href=./detail.html?id=8 style="text-decoration:none">Adam Strange</a></li><li class="demoClass"><a href=./detail.html?id=10 style="text-decoration:none">Agent Bob</a></li><li class="demoClass"><a href=./detail.html?id=11 style="text-decoration:none">Agent Zero</a></li><li class="demoClass"><a href=./detail.html?id=12 style="text-decoration:none">Air-Walker</a></li><li class="demoClass"><a href=./detail.html?id=13 style="text-decoration:none">Ajax</a></li><li class="demoClass"><a href=./detail.html?id=14 style="text-decoration:none">Alan Scott</a></li><li class="demoClass"><a href=./detail.html?id=15 style="text-decoration:none">Alex Mercer</a></li><li class="demoClass"><a href=./detail.html?id=17 style="text-decoration:none">Alfred Pennyworth</a></li><li class="demoClass"><a href=./detail.html?id=18 style="text-decoration:none">Alien</a></li><li class="demoClass"><a href=./detail.html?id=20 style="text-decoration:none">Amazo</a></li>'
			);
		});
	});

	describe('anchorListOfHeroes', () => {
		test('should call anchorListofHeroes and return a string with a anchor', () => {
			expect(store.anchorListOfHeroes(store.getTopHeroes())).toEqual(
				'<li class="demoClass"><a href=./detail.html?id=1 style="text-decoration:none">A-Bomb</a></li><li class="demoClass"><a href=./detail.html?id=2 style="text-decoration:none">Abe Sapien</a></li><li class="demoClass"><a href=./detail.html?id=3 style="text-decoration:none">Abin Sur</a></li><li class="demoClass"><a href=./detail.html?id=4 style="text-decoration:none">Abomination</a></li>'
			);
		});
	});

	describe('getHeroById', () => {
		test('should call getHeroById and return an array with the four top heroes', () => {
			expect(store.getTopHeroes()).toEqual([
				{
					id: 1,
					name: 'A-Bomb',
					slug: '1-a-bomb',
					powerstats: {
						intelligence: 38,
						strength: 100,
						speed: 17,
						durability: 80,
						power: 24,
						combat: 64
					},
					appearance: {
						gender: 'Male',
						race: 'Human',
						height: ["6'8", '203 cm'],
						weight: ['980 lb', '441 kg'],
						eyeColor: 'Yellow',
						hairColor: 'No Hair'
					},
					biography: {
						fullName: 'Richard Milhouse Jones',
						alterEgos: 'No alter egos found.',
						aliases: ['Rick Jones'],
						placeOfBirth: 'Scarsdale, Arizona',
						firstAppearance: 'Hulk Vol 2 #2 (April, 2008) (as A-Bomb)',
						publisher: 'Marvel Comics',
						alignment: 'good'
					},
					work: {
						occupation: 'Musician, adventurer, author; formerly talk show host',
						base: '-'
					},
					connections: {
						groupAffiliation:
							'Hulk Family; Excelsior (sponsor), Avengers (honorary member); formerly partner of the Hulk, Captain America and Captain Marvel; Teen Brigade; ally of Rom',
						relatives:
							'Marlo Chandler-Jones (wife); Polly (aunt); Mrs. Chandler (mother-in-law); Keith Chandler, Ray Chandler, three unidentified others (brothers-in-law); unidentified father (deceased); Jackie Shorr (alleged mother; unconfirmed)'
					},
					images: {
						xs:
							'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/1-a-bomb.jpg',
						sm:
							'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/1-a-bomb.jpg',
						md:
							'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/1-a-bomb.jpg',
						lg:
							'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/1-a-bomb.jpg'
					}
				},
				{
					id: 2,
					name: 'Abe Sapien',
					slug: '2-abe-sapien',
					powerstats: {
						intelligence: 88,
						strength: 28,
						speed: 35,
						durability: 65,
						power: 100,
						combat: 85
					},
					appearance: {
						gender: 'Male',
						race: 'Icthyo Sapien',
						height: ["6'3", '191 cm'],
						weight: ['145 lb', '65 kg'],
						eyeColor: 'Blue',
						hairColor: 'No Hair'
					},
					biography: {
						fullName: 'Abraham Sapien',
						alterEgos: 'No alter egos found.',
						aliases: ['Langdon Everett Caul', 'Abraham Sapien', 'Langdon Caul'],
						placeOfBirth: '-',
						firstAppearance: 'Hellboy: Seed of Destruction (1993)',
						publisher: 'Dark Horse Comics',
						alignment: 'good'
					},
					work: {
						occupation: 'Paranormal Investigator',
						base: '-'
					},
					connections: {
						groupAffiliation: 'Bureau for Paranormal Research and Defense',
						relatives: 'Edith Howard (wife, deceased)'
					},
					images: {
						xs:
							'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/2-abe-sapien.jpg',
						sm:
							'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/2-abe-sapien.jpg',
						md:
							'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/2-abe-sapien.jpg',
						lg:
							'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/2-abe-sapien.jpg'
					}
				},
				{
					id: 3,
					name: 'Abin Sur',
					slug: '3-abin-sur',
					powerstats: {
						intelligence: 50,
						strength: 90,
						speed: 53,
						durability: 64,
						power: 99,
						combat: 65
					},
					appearance: {
						gender: 'Male',
						race: 'Ungaran',
						height: ["6'1", '185 cm'],
						weight: ['200 lb', '90 kg'],
						eyeColor: 'Blue',
						hairColor: 'No Hair'
					},
					biography: {
						fullName: '',
						alterEgos: 'No alter egos found.',
						aliases: ['Lagzia'],
						placeOfBirth: 'Ungara',
						firstAppearance: 'Showcase #22 (October, 1959)',
						publisher: 'DC Comics',
						alignment: 'good'
					},
					work: {
						occupation: 'Green Lantern, former history professor',
						base: 'Oa'
					},
					connections: {
						groupAffiliation: 'Green Lantern Corps, Black Lantern Corps',
						relatives:
							'Amon Sur (son), Arin Sur (sister), Thaal Sinestro (brother-in-law), Soranik Natu (niece)'
					},
					images: {
						xs:
							'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/3-abin-sur.jpg',
						sm:
							'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/3-abin-sur.jpg',
						md:
							'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/3-abin-sur.jpg',
						lg:
							'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/3-abin-sur.jpg'
					}
				},
				{
					id: 4,
					name: 'Abomination',
					slug: '4-abomination',
					powerstats: {
						intelligence: 63,
						strength: 80,
						speed: 53,
						durability: 90,
						power: 62,
						combat: 95
					},
					appearance: {
						gender: 'Male',
						race: 'Human / Radiation',
						height: ["6'8", '203 cm'],
						weight: ['980 lb', '441 kg'],
						eyeColor: 'Green',
						hairColor: 'No Hair'
					},
					biography: {
						fullName: 'Emil Blonsky',
						alterEgos: 'No alter egos found.',
						aliases: ['Agent R-7', 'Ravager of Worlds'],
						placeOfBirth: 'Zagreb, Yugoslavia',
						firstAppearance: 'Tales to Astonish #90',
						publisher: 'Marvel Comics',
						alignment: 'bad'
					},
					work: {
						occupation: 'Ex-Spy',
						base: 'Mobile'
					},
					connections: {
						groupAffiliation:
							'former member of the crew of the Andromeda Starship, ally of the Abominations and Forgotten',
						relatives: 'Nadia Dornova Blonsky (wife, separated)'
					},
					images: {
						xs:
							'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/4-abomination.jpg',
						sm:
							'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/4-abomination.jpg',
						md:
							'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/4-abomination.jpg',
						lg:
							'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/4-abomination.jpg'
					}
				}
			]);
		});
	});

	describe('powerHero', () => {
		test('should call powerHero and return a string', () => {
			expect(store.powerHero(1)).toBe(
				'<div id="box"><div class="percent"><svg><circle cx="45" cy="45" r="37"></circle><circle cx="45" cy="45" r="37"></circle></svg><div class="number"><span>38</span></div></div><span>intelligence</span></div><div id="box"><div class="percent"><svg><circle cx="45" cy="45" r="37"></circle><circle cx="45" cy="45" r="37"></circle></svg><div class="number"><span>100</span></div></div><span>strength</span></div><div id="box"><div class="percent"><svg><circle cx="45" cy="45" r="37"></circle><circle cx="45" cy="45" r="37"></circle></svg><div class="number"><span>17</span></div></div><span>speed</span></div><div id="box"><div class="percent"><svg><circle cx="45" cy="45" r="37"></circle><circle cx="45" cy="45" r="37"></circle></svg><div class="number"><span>80</span></div></div><span>durability</span></div><div id="box"><div class="percent"><svg><circle cx="45" cy="45" r="37"></circle><circle cx="45" cy="45" r="37"></circle></svg><div class="number"><span>24</span></div></div><span>power</span></div><div id="box"><div class="percent"><svg><circle cx="45" cy="45" r="37"></circle><circle cx="45" cy="45" r="37"></circle></svg><div class="number"><span>64</span></div></div><span>combat</span></div>'
			);
		});
	});

	describe('appearanceHero', () => {
		test('should call appearanceHero and return a string', () => {
			expect(store.appearanceHero(1)).toBe(
				"<li>gender: Male<li><li>race: Human<li><li>height: 6'8,203 cm<li><li>weight: 980 lb,441 kg<li><li>eyeColor: Yellow<li><li>hairColor: No Hair<li>"
			);
		});
	});

	describe('biographyHero', () => {
		test('should call biographyHero and return an array with the four top heroes', () => {
			expect(store.biographyHero(1)).toBe(
				"<li>fullName: Richard Milhouse Jones<li><li>alterEgos: No alter egos found.<li><li>aliases: Rick Jones<li><li>placeOfBirth: Scarsdale, Arizona<li><li>firstAppearance: Hulk Vol 2 #2 (April, 2008) (as A-Bomb)<li><li>publisher: Marvel Comics<li><li>alignment: good<li>"
			);
		});
	});

	describe('workHero', () => {
		test('should call workHero and return an array with the four top heroes', () => {
			expect(store.workHero(1)).toBe(
				"<li>occupation: Musician, adventurer, author; formerly talk show host<li>"
			);
		});
	});

	describe('connectionsHero', () => {
		test('should call connectionsHero and return an array with the four top heroes', () => {
			expect(store.connectionsHero(1)).toBe(
				"<li>groupAffiliation: Hulk Family; Excelsior (sponsor), Avengers (honorary member); formerly partner of the Hulk, Captain America and Captain Marvel; Teen Brigade; ally of Rom<li><li>relatives: Marlo Chandler-Jones (wife); Polly (aunt); Mrs. Chandler (mother-in-law); Keith Chandler, Ray Chandler, three unidentified others (brothers-in-law); unidentified father (deceased); Jackie Shorr (alleged mother; unconfirmed)<li>"
			);
		});
	});

});

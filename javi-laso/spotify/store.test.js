const { expect } = require('@jest/globals');
const SpotifyStore = require('./store.js');

let store;
let array;
let titleContainer;
let formContainer;
let imgContainer;
let artists;
let resultContainer;
let timerContainer;

describe('Spotify Store', () => {
	beforeEach(() => {
		store = new SpotifyStore();
		titleContainer = document.createElement('h1');
		formContainer = document.createElement('form');
		formContainer.innerHTML = '';
		imgContainer = document.createElement('img');
		resultContainer = document.createElement('span');
		timerContainer = document.createElement('span');
		artists = {
			Rammstein: '6wWVKhxIU2cEi0K81v7HvP',
			Metallica: '2ye2Wgw4gimLv2eAKyk1NB',
			Dover: '5kdLOinhQnlSk4su7U6lyW',
			Linkin_Park: '6XyY86QOPPrYVGvF9ch6wz'
		};
		document.body.appendChild(titleContainer);
		document.body.appendChild(formContainer);
		document.body.appendChild(imgContainer);
		document.body.appendChild(resultContainer);
		document.body.appendChild(timerContainer);
	});

	describe('requestSpotifyToken promise resolved', () => {
		beforeEach(() => {
			global.fetch = jest.fn().mockImplementationOnce(() =>
				Promise.resolve({
					json: jest.fn().mockReturnValueOnce({ access_token: 'ABCDEF' })
				})
			);
		});
		test('should return artist name', async () => {
			await store.requestSpotifyToken();
			expect(store.getToken()).toBe('ABCDEF');
		});
	});

	describe('requestSpotifyToken promise resolved', () => {
		beforeEach(() => {
			global.fetch = jest.fn().mockImplementationOnce(() => Promise.reject());
		});
		test('should return artist name', async () => {
			await store.requestSpotifyToken();
			expect(store.getToken()).toBe(null);
		});
	});

	describe('requestArtist', () => {
		beforeEach(() => {
			global.fetch = jest.fn().mockImplementationOnce(() =>
				Promise.resolve({
					json: jest.fn().mockReturnValueOnce({ name: 'Dover' })
				})
			);
		});
		test('should return artist name', async () => {
			await store.requestArtist('5kdLOinhQnlSk4su7U6lyW');
			expect(store.getArtist().name).toBe('Dover');
		});
	});

	describe('requestArtistTopTracks', () => {
		beforeEach(() => {
			global.fetch = jest.fn().mockImplementationOnce(() =>
				Promise.resolve({
					json: jest.fn().mockReturnValueOnce({
						tracks: [{ name: 'King George' }, { name: 'Serenade' }]
					})
				})
			);
		});
		test('should return tracks name', async () => {
			await store.requestArtistTopTracks('5kdLOinhQnlSk4su7U6lyW');
			expect(store.getArtistTopTracks()[0].name).toBe('King George');
			expect(store.getArtistTopTracks()[1].name).toBe('Serenade');
		});
	});

	describe('requestCategories', () => {
		beforeEach(() => {
			global.fetch = jest.fn().mockImplementationOnce(() =>
				Promise.resolve({
					json: jest.fn().mockReturnValueOnce({
						categories: { items: [{ name: 'Top Lists' }, { name: 'At home' }] }
					})
				})
			);
		});
		test('should return an array of categories', async () => {
			await store.requestCategories('5kdLOinhQnlSk4su7U6lyW');
			expect(store.getCategories()).toEqual([
				{ name: 'Top Lists' },
				{ name: 'At home' }
			]);
		});
	});

	describe('getRandomSongFromTopTracks', () => {
		beforeEach(() => {
			global.fetch = jest.fn().mockImplementationOnce(() =>
				Promise.resolve({
					json: jest.fn().mockReturnValueOnce({
						tracks: [
							{ name: 'King George' },
							{ name: 'Serenade' },
							{ name: 'Devil came to me' }
						]
					})
				})
			);
			array = [
				{ name: 'King George' },
				{ name: 'Serenade' },
				{ name: 'Devil came to me' }
			];
		});
		test('should return a random track', async () => {
			const trackName = await store.getRandomSongFromTopTracks(
				'5kdLOinhQnlSk4su7U6lyW'
			);
			expect(array).toContainEqual({ name: trackName });
		});
	});

	describe('setRandomArtistNameToContainer', () => {
		beforeEach(() => {
			global.fetch = jest.fn().mockImplementationOnce(() =>
				Promise.resolve({
					json: jest.fn().mockReturnValueOnce({ name: 'Dover' })
				})
			);
		});
		test('should put in the inner HTML of a container a random artist name', async () => {
			const name = await store.setRandomArtistNameToContainer(
				titleContainer,
				artists
			);
			expect(titleContainer.innerHTML).toBe(name);
		});
	});

	describe('setArtistImagetoContainer', () => {
		beforeEach(() => {
			store.setArtist({
				name: 'Dover',
				images: [
					{
						height: 160,
						url:
							'https://i.scdn.co/image/0b0925b544b46d90a549f25a7f754ce6e59e6be2'
					},
					{
						height: 320,
						url:
							'https://i.scdn.co/image/0bfasa25b544b46d90a549f25a7f754ce6e59e6be2'
					}
				]
			});
		});
		test('should return the url of the first image with 160 or more height', () => {
			const url =
				'https://i.scdn.co/image/0b0925b544b46d90a549f25a7f754ce6e59e6be2';
			expect(store.setArtistImagetoContainer(imgContainer)).toBe(url);
		});

		test('should set the src of the image container with the url', () => {
			const url =
				'https://i.scdn.co/image/0b0925b544b46d90a549f25a7f754ce6e59e6be2';
			store.setArtistImagetoContainer(imgContainer);
			expect(imgContainer.src).toBe(url);
		});

		test('should return null if there is no image', () => {
			store.setArtist({
				name: 'Dover',
				images: []
			});
			const url =
				'https://i.scdn.co/image/0b0925b544b46d90a549f25a7f754ce6e59e6be2';
			expect(store.setArtistImagetoContainer(imgContainer)).toBe(null);
		});
	});

	describe('setRandomSongsToInputs with one song', () => {
		beforeEach(() => {
			global.fetch = jest.fn().mockImplementationOnce(() =>
				Promise.resolve({
					json: jest.fn().mockReturnValueOnce({
						tracks: [{ name: 'Serenade' }]
					})
				})
			);
			formContainer.innerHTML = `
			<div>
				<button type="button" id="button1" class="button-answer"></button>
			</div>
			`;
		});
		test('should put in the button the name of the song', async () => {
			let button1 = document.getElementById('button1');
			await store.setRandomSongsToInputs(
				formContainer,
				artists,
				resultContainer
			);
			expect(button1.innerHTML).toBe('Serenade');
		});
	});

	describe('setCorrectButton', () => {
		beforeEach(() => {
			global.fetch = jest.fn().mockImplementationOnce(() =>
				Promise.resolve({
					json: jest.fn().mockReturnValueOnce({
						tracks: [{ name: 'King George' }]
					})
				})
			);
			formContainer.innerHTML = `
			<div>
				<button type="button" id="buttonOne" class="button-answer"></button>
			</div>
			`;
		});
		test('should put in the results the word "CORRECT!', async () => {
			store.setArtist({ id: '5kdLOinhQnlSk4su7U6lyW' });
			let button1 = document.getElementById('buttonOne');
			await store.setRandomSongsToInputs(
				formContainer,
				artists,
				resultContainer
			);
			button1.click();
			expect(resultContainer.innerHTML).toBe('CORRECT!');
		});
	});

	describe('setIncorrectButton', () => {
		beforeEach(() => {
			global.fetch = jest
				.fn()
				.mockImplementationOnce(() =>
					Promise.resolve({
						json: jest.fn().mockReturnValueOnce({
							tracks: [{ name: 'King George' }]
						})
					})
				)
				.mockImplementationOnce(() =>
					Promise.resolve({
						json: jest.fn().mockReturnValueOnce({
							tracks: [{ name: 'Second Song' }]
						})
					})
				)
				.mockImplementationOnce(() =>
					Promise.resolve({
						json: jest.fn().mockReturnValueOnce({
							tracks: [{ name: 'Third Song' }]
						})
					})
				);
			formContainer.innerHTML = `
			<div>
				<button type="button" id="first-button" class="button-answer"></button>
				<button type="button" id="second-button" class="button-answer"></button>
				<button type="button" id="third-button" class="button-answer"></button>
			</div>
			`;
		});
		test('two buttons should add "CORRECT!" and one should add "INCORRECT!"', async () => {
			store.setArtist({ id: '5kdLOinhQnlSk4su7U6lyW' });
			let button1 = document.getElementById('first-button');
			let button2 = document.getElementById('second-button');
			let button3 = document.getElementById('third-button');
			const answers = [];
			const spy1 = jest.spyOn(store, 'setCorrectButton');
			const spy2 = jest.spyOn(store, 'setIncorrectButton');
			await store.setRandomSongsToInputs(
				formContainer,
				artists,
				resultContainer
			);
			button1.click();
			answers.push(resultContainer.innerHTML);
			button2.click();
			answers.push(resultContainer.innerHTML);
			button3.click();
			answers.push(resultContainer.innerHTML);
			expect(spy1).toHaveBeenCalledTimes(1);
			expect(spy2).toHaveBeenCalledTimes(2);
			expect(answers).toHaveLength(3);
			expect(answers).toContain('CORRECT!');
			expect(answers).toContain('INCORRECT!');
			const correctIndex = answers.findIndex((elem) => elem === 'CORRECT!');
			answers.splice(correctIndex, 1);
			expect(answers).toContain('INCORRECT!');
			expect(answers).not.toContain('CORRECT!');
			expect(answers).toHaveLength(2);
			spy1.mockRestore();
			spy2.mockRestore();
		});
	});

	describe('timerSeconds', () => {
		beforeEach(() => {
			store.setSeconds(15);
			jest.useFakeTimers();
		});
		test('should call setInterval every second', () => {
			store.timerSeconds(timerContainer);
			expect(setInterval).toHaveBeenCalledTimes(1);
			expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1000);
		});
	});

	describe('timerFunction', () => {
		beforeEach(() => {
			store.setSeconds(15);
			jest.useFakeTimers();
		});
		test('should call setInterval every 15 + 1 seconds', () => {
			store.timerFunction(
				titleContainer,
				artists,
				imgContainer,
				formContainer,
				resultContainer,
				timerContainer
			);
			expect(setInterval).toHaveBeenCalledTimes(1);
			expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 16000);
		});
	});
});

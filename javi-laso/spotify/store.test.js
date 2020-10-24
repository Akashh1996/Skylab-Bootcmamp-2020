const { expect } = require('@jest/globals');
const SpotifyStore = require('./store.js');

let store;
let array;
let titleContainer;
let formContainer;
let imgContainer;
let artists;

describe('Spotify Store', () => {
	beforeEach(() => {
		store = new SpotifyStore();
		titleContainer = document.createElement('div');
		formContainer = document.createElement('form');
		imgContainer = document.createElement('img');
		artists = {
			Rammstein: '6wWVKhxIU2cEi0K81v7HvP',
			Metallica: '2ye2Wgw4gimLv2eAKyk1NB',
			Dover: '5kdLOinhQnlSk4su7U6lyW',
			Linkin_Park: '6XyY86QOPPrYVGvF9ch6wz'
		};
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

	describe('setArtistAndSongs', () => {
		beforeEach(() => {
			global.fetch = jest.fn().mockImplementationOnce(() =>
				Promise.resolve({
					json: jest.fn().mockReturnValueOnce({
						name: 'Dover',
						tracks: [
							{ name: 'King George' },
							{ name: 'Serenade' },
							{ name: 'Devil came to me' }
						],
						images: [
							{
								height: 160,
								url:
									'https://i.scdn.co/image/0b0925b544b46d90a549f25a7f754ce6e59e6be2'
							}
						]
					})
				})
			);
		});
		test('should put in the src attribute of a container an url', async () => {
			const url =
				'https://i.scdn.co/image/0b0925b544b46d90a549f25a7f754ce6e59e6be2';

			await store.setArtistAndSongs(
				titleContainer,
				formContainer,
				imgContainer,
				artists
			);
			expect(imgContainer.src).toBe(url);
		});
	});

	describe('checkCorrectAnswer', () => {
		beforeEach(() => {
			const label = document.createElement('label');
			store.setCorrectAnswer(label);

			formContainer.innerHTML = `
            <div id="answer0">
                <input id="input0"></input>
                <label></label>
            </div>
            <div id="answer1">
                <input id="input1" checked="true"></input>
            </div>
            `;
			document.getElementById('answer1').appendChild(label);
		});
		test('should return true for a correct answer', async () => {
			expect(store.checkCorrectAnswer(formContainer)).toBe(true);
		});
	});
});

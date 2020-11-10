import axios from 'axios';
import { loadHeroes } from './hero-actions';
import dispatcher from '../dispatcher/dispatcher';

jest.mock('axios');
jest.mock('../dispatcher/dispatcher');

describe('Actions', () => {
	beforeEach(async () => {
		//arrange
		axios.mockImplementationOnce(() => {
			return Promise.resolve({ data: [] });
		});
		//act
		await loadHeroes();
	});
	test('should get heroes.json', () => {
		expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
			type: 'LOAD_HEROES',
			payload: []
		});
	});

	test('should call dispatcher.dispatch one time', () => {
		expect(dispatcher.dispatch.mock.calls.length).toBe(1);
	});

	test('should call axios with "/api/heroes.json" as first argument', () => {
		expect(axios.mock.calls[0][0]).toBe('/api/heroes.json');
	});

	test('should call axios one time', () => {
		expect(axios.mock.calls.length).toBe(1);
	});
});

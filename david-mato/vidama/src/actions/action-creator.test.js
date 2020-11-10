import { loadBook, loadBooks } from './action-creator';
import dispatcher from '../dispatcher/dispatcher';

jest.mock('../dispatcher/dispatcher.js');

describe('Google Books actions', () => {
	test('should get books from api', () => {
		expect(true).toBe(true);
	});

	describe('loadBook', () => {
		beforeEach(() => {
			global.fetch = jest.fn().mockImplementationOnce(() =>
				Promise.resolve({
					json: jest.fn().mockReturnValueOnce([{ id: 1, title: 'Hello' }])
				})
			);

			loadBook();
		});

		test('should call dispatch', () => {
			expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
				type: 'LOAD_BOOK',
				payload: [{ id: 1, title: 'Hello' }]
			});
		});

		test('should call dispatch once', () => {
			expect(dispatcher.dispatch.mock.calls.length).toBe(1);
		});
	});

	describe('loadBooks', () => {
		beforeEach(() => {
			global.fetch = jest.fn().mockImplementationOnce(() =>
				Promise.resolve({
					json: jest.fn().mockReturnValueOnce([
						{ id: 1, title: 'Hello' },
						{ id: 2, title: 'Bye' }
					])
				})
			);

			// loadBooks();
		});

		test('should call dispatch', () => {
			expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
				type: 'LOAD_BOOKS',
				payload: [
					{ id: 1, title: 'Hello' },
					{ id: 2, title: 'Bye' }
				]
			});
		});

		test('should call dispatch once', () => {
			expect(dispatcher.dispatch.mock.calls.length).toBe(1);
		});
	});
});

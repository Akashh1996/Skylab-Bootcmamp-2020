import axios from 'axios';
import { deleteHero, loadHeroes } from './hero-actions';
import dispatcher from '../dispatcher/dispatcher';

jest.mock('axios');
jest.mock('../dispatcher/dispatcher');

describe('Hero actions', () => {
  describe('loadHeroes', () => {
    beforeEach(async () => {
      axios.mockImplementationOnce(() => Promise.resolve({ data: [] }));
      await loadHeroes();
    });

    test('should call dispatch', () => {
      expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({ type: 'LOAD_HEROES', payload: [] });
    });

    test('should call dispatch once', () => {
      expect(dispatcher.dispatch.mock.calls.length).toBe(1);
    });

    test('should call axios with /api/heroes.json', () => {
      expect(axios.mock.calls[0][0]).toEqual('/api/heroes.json');
    });

    test('should call axios once', () => {
      expect(axios.mock.calls.length).toBe(1);
    });
  });

  describe('deleteHero', () => {
    let dispatchCalls;
    beforeEach(() => {
      dispatchCalls = dispatcher.dispatch.mock.calls;
      deleteHero(12);
    });

    test('should call dispatch', () => {
      expect(dispatchCalls[0][0]).toEqual({ type: 'DELETE_HERO', payload: 12 });
    });
  });
});

import axios from 'axios';
import dispatcher from '../../dispatcher/dispatcher';

const { loadHeroById } = require('../hero-actions');

jest.mock('axios');
jest.mock('../../dispatcher/dispatcher');

describe('Hero actions', () => {
  describe('loadHeroById', () => {
    test('should call axios with and argument', async () => {
      // arrange
      axios.mockImplementationOnce(() => Promise.resolve({ data: [{ id: 12, name: 'Narco' }] }));

      // act
      await loadHeroById(15);

      expect(axios.mock.calls[0][0]).toBe('/api/heroes.json?heroId=15');
    });

    test('should dispatch payload undefined when id is not found in axios response', async () => {
      // arrange
      axios.mockImplementationOnce(() => Promise.resolve({ data: [{ id: 12, name: 'Narco' }] }));

      // act
      await loadHeroById(76152376152736517263512);

      expect(dispatcher.dispatch.mock.calls[0][0].payload).toBeUndefined();
    });

    test('should dispatch an action with a hero id equals to 12', async () => {
      // arrange
      axios.mockImplementationOnce(() => Promise.resolve({ data: [{ id: 12, name: 'Narco' }] }));

      // act
      await loadHeroById(12);

      expect(dispatcher.dispatch.mock.calls[0][0].payload.id).toBe(12);
      expect(dispatcher.dispatch.mock.calls[0][0].payload.name).toBe('Narco');
      expect(dispatcher.dispatch.mock.calls[0][0].payload.name).toBe('Narco');
      expect(dispatcher.dispatch.mock.calls[0][0].payload).toEqual({ id: 12, name: 'Narco' });
    });
  });
});

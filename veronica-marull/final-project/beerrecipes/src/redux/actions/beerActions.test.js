import actionTypes from './actionTypes';
import axios from 'axios';
import { beerDetailById, beersByMalt, requestBeers } from './beerActions';

jest.mock('axios');

describe('actions', () => {
  describe('load beers list', () => {
    let dispatch;
    beforeEach(() => {
      dispatch = jest.fn();
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    test('should dispatch requestBeersError when axios.get throw an error', async () => {
      axios.get.mockReturnValue(Promise.reject(Error('there has been an error')));
      await requestBeers()(dispatch);

      const expectValue = { type: actionTypes.LOAD_BEERS_ERROR, error: Error('there has been an error') };

      expect(dispatch).toHaveBeenCalledWith(expectValue);
    });

    test('should dispatch requestBeersSuccess', async () => {
      axios.get.mockReturnValue(Promise.resolve([]));
      await requestBeers()(dispatch);

      expect(dispatch.mock.calls[0][0].type).toBe('LOAD_BEERS');
    });
  });
  describe('show beer detail', () => {
    let dispatch;
    beforeEach(() => {
      dispatch = jest.fn();
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    test('should dispatch requestBeerDetailError when axios.get throw an error', async () => {
      axios.get.mockReturnValue(Promise.reject(Error('there has been an error')));
      await beerDetailById()(dispatch);

      const expected = { type: actionTypes.LOAD_BEER_DETAIL_ERROR, error: Error('there has been an error') };

      expect(dispatch).toHaveBeenCalledWith(expected);
    });

    test('should dispatch requestBeerDetail', async () => {
      axios.get.mockReturnValue(Promise.resolve({ data: [8] }));
      await beerDetailById()(dispatch);
      expect(dispatch.mock.calls[0][0].type).toBe('LOAD_BEER_DETAIL');
    });
  });
  describe('beers by malt', () => {
    let dispatch;
    beforeEach(() => {
      dispatch = jest.fn();
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    test('should dispatch requestBeersByMaltError when axios.get throw an error', async () => {
      axios.get.mockReturnValue(Promise.reject(Error('there has been an error')));
      await beersByMalt()(dispatch);
      const expected = { type: actionTypes.LOAD_BEERS_BY_MALT_ERROR, error: Error('there has been an error') };

      expect(dispatch).toHaveBeenCalledWith(expected);
    });

    test('should be show a list of beers by kind of malt', async () => {
      axios.get.mockReturnValue(Promise.resolve([]));
      await beersByMalt()(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

import beerReducer from './beerReducer';
import actionsTypes from '../actions/actionTypes';

describe('beerReducer', () => {
  let fakeBeerList;
  beforeEach(() => {
    fakeBeerList = [{ name: 'Buzz' }];
  });
  test('should handle LOAD_BEERS', () => {
    const fakeAction = {
      type: actionsTypes.LOAD_BEERS,
      beerList: fakeBeerList
    };

    expect(beerReducer({}, fakeAction)).toEqual({ beerList: fakeBeerList });
  });
});

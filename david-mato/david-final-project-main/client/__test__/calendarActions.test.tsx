// @ts-nocheck
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import actionTypes from '../src/redux/actions/actionTypes';
import addMenuToDB from '../src/redux/actions/calendarActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('axios');

describe('calendarActions', () => {
  let store: Object;

  beforeEach(() => {
    store = mockStore();
  });

  afterEach(() => {
    axios.mockRestore();
  });

  it('should call addMenuToDB and modify the store actions on resolve accordingly', async () => {
    const menu = { recipe: 'arrabiata', addedTo: 'breakfast' };
    const response = {
      data: menu,
    };

    axios.put.mockImplementationOnce(() => Promise.resolve(response));
    await store.dispatch(addMenuToDB(menu));

    expect(store.getActions()).toEqual([{
      type: actionTypes.ADD_MENU_TO_USER,
      menu: response.data,
    }]);
  });

  it('should call addMenuToDB and, on reject, call console.log', async () => {
    const menu = { recipe: 'arrabiata', addedTo: 'breakfast' };
    const error = 'Mock error';
    jest.spyOn(global.console, 'log');

    axios.put.mockImplementationOnce(() => Promise.reject(error));
    await store.dispatch(addMenuToDB(menu));

    expect(console.log).toHaveBeenCalled();
  });
});

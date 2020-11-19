import axios from 'axios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import
requestUsersList
  from '../actions/usersAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

jest.mock('axios');

describe('usersAction', () => {
  describe('requestUsersList - promise resolve', () => {
    beforeEach(async () => {
      axios.get.mockImplementationOnce(() => Promise.resolve({ data: ['Skylab mola!'] }));
      await store.dispatch(requestUsersList());
    });

    test('should call axios', () => {
      expect(axios.get).toHaveBeenCalled();
    });
    test('should call axios just once', () => {
      expect(axios.get.mock.calls[0].length).toBe(1);
    });
  });

  describe('requestUsersList - promise rejected', () => {
    beforeEach(async () => {
      axios.get.mockImplementationOnce(() => Promise.rejected({ data: ['Skylab mola!'] }));
      await store.dispatch(requestUsersList());
    });

    test('should call axios', () => {
      expect(axios.get).toHaveBeenCalled();
    });
    test('should call axios just once', () => {
      expect(axios.get.mock.calls[0].length).toBe(1);
    });
  });
});

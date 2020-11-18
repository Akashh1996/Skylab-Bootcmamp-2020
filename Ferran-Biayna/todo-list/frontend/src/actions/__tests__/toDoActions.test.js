import axios from 'axios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import {
  requestList, requestAddItem, requestUpdateItem, requestDeleteItem,
} from '../toDoActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

jest.mock('axios');

describe('toDoActions', () => {
  describe('requestList - promise resolve', () => {
    beforeEach(async () => {
      axios.get.mockImplementationOnce(() => Promise.resolve({ data: ['Skylab mola!'] }));
      await store.dispatch(requestList());
    });

    test('should call axios', () => {
      expect(axios.get).toHaveBeenCalled();
    });
    test('should call axios just once', () => {
      expect(axios.get.mock.calls[0].length).toBe(1);
    });
  });

  describe('requestList - promise rejected', () => {
    beforeEach(async () => {
      axios.get.mockImplementationOnce(() => Promise.rejected({ data: ['Skylab mola!'] }));
      await store.dispatch(requestList());
    });

    test('should call axios', () => {
      expect(axios.get).toHaveBeenCalled();
    });
    test('should call axios just once', () => {
      expect(axios.get.mock.calls[0].length).toBe(1);
    });
  });

  describe('requestAddItem - promise resolve', () => {
    beforeEach(async () => {
      axios.post.mockImplementationOnce(() => Promise.resolve({ description: 'Skylab mola!' }));
      await store.dispatch(requestAddItem('1'));
    });

    test('should call axios', () => {
      expect(axios.post).toHaveBeenCalled();
    });
    test('should call axios just once', () => {
      expect(axios.post.mock.calls[0].length).toBe(2);
    });
  });

  describe('requestAddItem - promise rejected', () => {
    beforeEach(async () => {
      axios.post.mockImplementationOnce(() => Promise.rejected({ description: 'Skylab mola!' }));
      await store.dispatch(requestAddItem());
    });

    test('should call axios', () => {
      expect(axios.post).toHaveBeenCalled();
    });
    test('should call axios just once', () => {
      expect(axios.post.mock.calls[0].length).toBe(2);
    });
  });

  describe('requestUpdateItem - promise resolve', () => {
    beforeEach(async () => {
      axios.post.mockImplementationOnce(() => Promise.resolve({ _id: '1', description: 'Skylab mola!' }));
      await store.dispatch(requestUpdateItem());
    });

    test('should call axios', () => {
      expect(axios.post).toHaveBeenCalled();
    });
    test('should call axios just once', () => {
      expect(axios.post.mock.calls[0].length).toBe(2);
    });
  });

  describe('requestUpdateItem - promise rejected', () => {
    beforeEach(async () => {
      axios.post.mockImplementationOnce(() => Promise.rejected({ _id: '1', description: 'Skylab mola!' }));
      await store.dispatch(requestUpdateItem());
    });

    test('should call axios', () => {
      expect(axios.post).toHaveBeenCalled();
    });
    test('should call axios just once', () => {
      expect(axios.post.mock.calls[0].length).toBe(2);
    });
  });

  describe('requestDeleteItem - promise resolve', () => {
    beforeEach(async () => {
      axios.delete.mockImplementationOnce(() => Promise.resolve({ data: ['Skylab mola!'] }));
      await store.dispatch(requestDeleteItem('1'));
    });

    test('should call axios', () => {
      expect(axios.delete).toHaveBeenCalled();
    });
    test('should call axios just once', () => {
      expect(axios.delete.mock.calls[0].length).toBe(2);
    });
  });

  describe('requestDeleteItem - promise rejected', () => {
    beforeEach(async () => {
      axios.delete.mockImplementationOnce(() => Promise.rejected({ data: ['Skylab mola!'] }));
      await store.dispatch(requestDeleteItem());
    });

    test('should call axios', () => {
      expect(axios.delete).toHaveBeenCalled();
    });
    test('should call axios just once', () => {
      expect(axios.delete.mock.calls[0].length).toBe(2);
    });
  });
});

import axios from 'axios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import {
  requestProducts, requestProduct, requestAddProducts, requestDeleteProduct, requestCart,
} from '../productsActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

jest.mock('axios');

describe('productsActions', () => {
  describe('requestProducts - promise resolve', () => {
    beforeEach(async () => {
      axios.get.mockImplementationOnce(() => Promise.resolve({ data: ['abc'] }));
      await store.dispatch(requestProducts());
    });

    test('should call axios', () => {
      expect(axios.get).toHaveBeenCalled();
    });
    test('should call axios just once', () => {
      expect(axios.get.mock.calls[0].length).toBe(1);
    });
  });

  describe('requestProducts - promise rejected', () => {
    beforeEach(async () => {
      axios.get.mockImplementationOnce(() => Promise.rejected({ data: ['abc'] }));
      await store.dispatch(requestProducts());
    });

    test('should call axios', () => {
      expect(axios.get).toHaveBeenCalled();
    });
    test('should call axios just once', () => {
      expect(axios.get.mock.calls[0].length).toBe(1);
    });
  });

  describe('requestProduct - promise resolve', () => {
    beforeEach(async () => {
      axios.get.mockImplementationOnce(() => Promise.resolve({ data: ['abc'] }));
      await store.dispatch(requestProduct());
    });

    test('should call axios', () => {
      expect(axios.get).toHaveBeenCalled();
    });
    test('should call axios just once', () => {
      expect(axios.get.mock.calls[0].length).toBe(1);
    });
  });

  describe('requestProduct - promise rejected', () => {
    beforeEach(async () => {
      axios.get.mockImplementationOnce(() => Promise.rejected({ data: ['abc'] }));
      await store.dispatch(requestProduct());
    });

    test('should call axios', () => {
      expect(axios.get).toHaveBeenCalled();
    });
    test('should call axios just once', () => {
      expect(axios.get.mock.calls[0].length).toBe(1);
    });
  });

  describe('requestAddProducts - promise resolve', () => {
    beforeEach(async () => {
      axios.post.mockImplementationOnce(() => Promise.resolve({ data: ['abc'] }));
      await store.dispatch(requestAddProducts('1'));
    });

    test('should call axios', () => {
      expect(axios.post).toHaveBeenCalled();
    });
    test('should call axios just once', () => {
      expect(axios.post.mock.calls[0].length).toBe(1);
    });
  });

  describe('requestAddProducts - promise rejected', () => {
    beforeEach(async () => {
      axios.post.mockImplementationOnce(() => Promise.rejected({ data: ['abc'] }));
      await store.dispatch(requestAddProducts());
    });

    test('should call axios', () => {
      expect(axios.post).toHaveBeenCalled();
    });
    test('should call axios just once', () => {
      expect(axios.post.mock.calls[0].length).toBe(1);
    });
  });

  describe('requestDeleteProduct - promise resolve', () => {
    beforeEach(async () => {
      axios.delete.mockImplementationOnce(() => Promise.resolve({ data: ['abc'] }));
      await store.dispatch(requestDeleteProduct('1'));
    });

    test('should call axios', () => {
      expect(axios.delete).toHaveBeenCalled();
    });
    test('should call axios just once', () => {
      expect(axios.delete.mock.calls[0].length).toBe(1);
    });
  });

  describe('requestDeleteProduct - promise rejected', () => {
    beforeEach(async () => {
      axios.delete.mockImplementationOnce(() => Promise.rejected({ data: ['abc'] }));
      await store.dispatch(requestDeleteProduct());
    });

    test('should call axios', () => {
      expect(axios.delete).toHaveBeenCalled();
    });
    test('should call axios just once', () => {
      expect(axios.delete.mock.calls[0].length).toBe(1);
    });
  });

  describe('requestCart - promise resolve', () => {
    beforeEach(async () => {
      axios.get.mockImplementationOnce(() => Promise.resolve({ data: ['abc'] }));
      await store.dispatch(requestCart());
    });

    test('should call axios', () => {
      expect(axios.get).toHaveBeenCalled();
    });
    test('should call axios just once', () => {
      expect(axios.get.mock.calls[0].length).toBe(1);
    });
  });

  describe('requestCart - promise rejected', () => {
    beforeEach(async () => {
      axios.get.mockImplementationOnce(() => Promise.rejected({ data: ['abc'] }));
      await store.dispatch(requestCart());
    });

    test('should call axios', () => {
      expect(axios.get).toHaveBeenCalled();
    });
    test('should call axios just once', () => {
      expect(axios.get.mock.calls[0].length).toBe(1);
    });
  });
});

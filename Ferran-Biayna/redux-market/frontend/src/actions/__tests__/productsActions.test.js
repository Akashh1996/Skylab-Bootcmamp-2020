import axios from 'axios';
import requestProducts from '../productsActions';

jest.mock('axios');

describe('productsActions', () => {
  describe('requestProducts', () => {
    beforeEach(async () => {
      axios.mockImplementationOnce(() => Promise.resolve({ data: [] }));
      await requestProducts();
    });

    test('should call axios', () => {
      expect(axios.mock.calls[0][0].toMatch('http://localhost:5000/products'));
    });

    test('should call axios just once', () => {
      expect(axios.mock.calls.length).toBe(1);
    });
  });
});

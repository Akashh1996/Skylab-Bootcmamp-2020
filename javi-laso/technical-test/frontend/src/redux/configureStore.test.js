import { applyMiddleware, createStore } from 'redux';
import configureStore from './configureStore';

jest.mock('redux');

describe('configureStore', () => {
  beforeEach(() => {
    configureStore();
  });
  afterAll(() => {
    jest.resetAllMocks();
  });

  test('should call "createStore"', () => {
    expect(createStore).toHaveBeenCalled();
  });

  test('should call "applyMiddleware"', () => {
    expect(applyMiddleware).toHaveBeenCalled();
  });
});

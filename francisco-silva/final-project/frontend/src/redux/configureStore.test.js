import { createStore } from 'redux';
import configureStore from './configureStore';

jest.mock('redux');
describe('configureStore', () => {
  test('should call createStore', () => {
    configureStore();
    expect(createStore).toHaveBeenCalled();
  });
});

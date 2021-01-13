import React from 'react';
import 'react-native';
import { render, fireEvent } from '@testing-library/react-native';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Home from '../src/components/Home/Home';
import { getRecipeFromAPI } from '../src/redux/actions/recipesActions';

jest.mock('../src/redux/actions/recipesActions');

const buildStore = configureStore([thunk]);

describe('Home', () => {
  const navigation = { navigate: jest.fn() };
  let wrapper;

  const wrapperFactory = (wrapperInitialState : object) => {
    const store = buildStore(wrapperInitialState);
    store.dispatch = jest.fn();

    return ({ children } : { children: JSX.Element }) => (
      <Provider store={store}>
        {children}
      </Provider>
    );
  };

  it('should render when searchComponent is defined', () => {
    const initialState = { recipesReducer: [] };
    wrapper = wrapperFactory(initialState);
    const { getByTestId } = render(<Home navigation={navigation} />, { wrapper });
    const searchComponent = getByTestId('homeComponent');
    expect(searchComponent).toBeDefined();
  });

  it('should call naviagtion.navigate when recipesRedcuer is an array with content', () => {
    const initialState = { recipesReducer: [{ name: 'arrabiata' }] };
    wrapper = wrapperFactory(initialState);
    const { getByTestId } = render(<Home navigation={navigation} />, { wrapper });
    const navigateToDetail = getByTestId('navigateToDetail');

    fireEvent(navigateToDetail, 'onPress');

    expect(navigation.navigate).toHaveBeenCalled();
  });

  it('should call getRecipeFromAPI when goingdown is true', () => {
    const initialState = { recipesReducer: [{ name: 'arrabiata' }] };
    wrapper = wrapperFactory(initialState);
    const { getByTestId } = render(<Home navigation={navigation} />, { wrapper });
    const infiniteScroll = getByTestId('infiniteScroll');

    fireEvent.scroll(infiniteScroll, { nativeEvent: { contentOffset: { y: 1 } } });
    fireEvent(infiniteScroll, 'onScrollEndDrag');

    expect(getRecipeFromAPI).toHaveBeenCalled();
  });

  it('should not call getRecipeFromAPI when goingdown is false', () => {
    const initialState = { recipesReducer: [{ name: 'arrabiata' }] };
    wrapper = wrapperFactory(initialState);
    const { getByTestId } = render(<Home navigation={navigation} />, { wrapper });
    const infiniteScroll = getByTestId('infiniteScroll');

    fireEvent.scroll(infiniteScroll, { nativeEvent: { contentOffset: { y: 0 } } });
    fireEvent(infiniteScroll, 'onScrollEndDrag');

    expect(getRecipeFromAPI).toHaveBeenCalledTimes(4);
  });
});

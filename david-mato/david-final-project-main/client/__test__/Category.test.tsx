import React from 'react';
import 'react-native';
import { render, fireEvent } from '@testing-library/react-native';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Category from '../src/components/Category/Category';
import { getRecipeByNameFromAPI } from '../src/redux/actions/recipesActions';

jest.mock('../src/redux/actions/recipesActions');

const buildStore = configureStore([thunk]);

describe('Category', () => {
  const navigation = { navigate: jest.fn() };
  const route = { params: { categoryName: 'breakfast' } };
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

  it('should render when categoryComponent is defined', () => {
    const initialState = { categoryRecipesReducer: { meals: [{ strMeal: 'arrabiata' }, { strMeal: 'arrabiata' }, { strMeal: 'arrabiata' }] }, categoryRecipesByNameReducer: [] };
    wrapper = wrapperFactory(initialState);
    const { getByTestId } = render(<Category navigation={navigation} route={route} />, { wrapper });
    const categoryComponent = getByTestId('categoryComponent');
    expect(categoryComponent).toBeDefined();
  });

  it('should call naviagtion.navigate when categoryRecipesReducer is an object with content', () => {
    const initialState = { categoryRecipesReducer: { meals: [{ strMeal: 'arrabiata' }, { strMeal: 'arrabiata' }, { strMeal: 'arrabiata' }] }, categoryRecipesByNameReducer: [{ name: 'buns' }, { name: 'buns' }, { name: 'buns' }, { name: 'buns' }] };
    wrapper = wrapperFactory(initialState);
    const { getByTestId } = render(<Category navigation={navigation} route={route} />, { wrapper });
    const navigateToDetail = getByTestId('navigateToDetail1');

    fireEvent(navigateToDetail, 'onPress');

    expect(navigation.navigate).toHaveBeenCalled();
  });

  it('should call getRecipeByNameFromAPI when goingdown is true', () => {
    const initialState = { categoryRecipesReducer: { meals: [{ strMeal: 'arrabiata' }, { strMeal: 'arrabiata' }, { strMeal: 'arrabiata' }] }, categoryRecipesByNameReducer: [{ name: 'arrabiata' }, { name: 'buns' }, { name: 'lasgna' }, { name: 'paella' }] };
    wrapper = wrapperFactory(initialState);
    const { getByTestId } = render(<Category navigation={navigation} route={route} />, { wrapper });
    const infiniteScroll = getByTestId('infiniteScroll');

    fireEvent.scroll(infiniteScroll, { nativeEvent: { contentOffset: { y: 1 } } });
    fireEvent(infiniteScroll, 'onScrollEndDrag');

    expect(getRecipeByNameFromAPI).toHaveBeenCalled();
  });

  it('should not set categoryRecipeIndex to 0 when recipes.meals.length is higher than categoryRecipeIndex', () => {
    const initialState = { categoryRecipesReducer: { meals: [{ strMeal: 'arrabiata' }, { strMeal: 'arrabiata' }, { strMeal: 'arrabiata' }, { strMeal: 'arrabiata' }] }, categoryRecipesByNameReducer: [{ name: 'arrabiata' }, { name: 'buns' }, { name: 'lasgna' }, { name: 'paella' }] };
    wrapper = wrapperFactory(initialState);
    const { getByTestId } = render(<Category navigation={navigation} route={route} />, { wrapper });
    const infiniteScroll = getByTestId('infiniteScroll');

    fireEvent.scroll(infiniteScroll, { nativeEvent: { contentOffset: { y: 1 } } });
    fireEvent(infiniteScroll, 'onScrollEndDrag');

    expect(getRecipeByNameFromAPI).toHaveBeenCalled();
  });

  it('should not call getRecipeByNameFromAPI when categoryRecipesReducer is an object without content', () => {
    const initialState = { categoryRecipesReducer: {}, categoryRecipesByNameReducer: [{ name: 'arrabiata' }, { name: 'buns' }, { name: 'lasgna' }, { name: 'paella' }] };
    wrapper = wrapperFactory(initialState);
    const { getByTestId } = render(<Category navigation={navigation} route={route} />, { wrapper });
    const infiniteScroll = getByTestId('infiniteScroll');

    fireEvent.scroll(infiniteScroll, { nativeEvent: { contentOffset: { y: 1 } } });

    expect(getRecipeByNameFromAPI).toHaveBeenCalled();
  });

  it('should not call getRecipeByNameFromAPI when goingdown is false', () => {
    const initialState = { categoryRecipesReducer: { meals: [{ strMeal: 'arrabiata' }, { strMeal: 'arrabiata' }, { strMeal: 'arrabiata' }] }, categoryRecipesByNameReducer: [{ name: 'arrabiata' }, { name: 'buns' }, { name: 'lasgna' }, { name: 'paella' }] };
    wrapper = wrapperFactory(initialState);
    const { getByTestId } = render(<Category navigation={navigation} route={route} />, { wrapper });
    const infiniteScroll = getByTestId('infiniteScroll');

    fireEvent.scroll(infiniteScroll, { nativeEvent: { contentOffset: { y: 0 } } });
    fireEvent(infiniteScroll, 'onScrollEndDrag');

    expect(getRecipeByNameFromAPI).toHaveBeenCalled();
  });
});

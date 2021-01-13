// @ts-nocheck
import 'react-native';
import React, { FunctionComponent } from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react-native';
import Search from '../src/components/Search/Search';
import { getCategoryRecipesFromAPI, restoreCategoryRecipesReducer } from '../src/redux/actions/recipesActions';

jest.mock('../src/redux/actions/recipesActions');

const buildStore = configureStore([thunk]);

describe('Search', () => {
  let navigation: object;
  let wrapper: FunctionComponent<any>;
  beforeEach(() => {
    const initialState = { recipeCategoriesReducer: { categories: [{ strCategory: 'pasta' }] }, searchReducer: { name: 'buns' } };

    const store = buildStore(initialState);
    store.dispatch = jest.fn();

    wrapper = ({ children } : {children: JSX.Element}) => (
      <Provider store={store}>
        {children}
      </Provider>
    );
    navigation = { navigate: () => {} };
  });

  it('should render when searchComponent is defined', () => {
    const { getByTestId } = render(<Search navigation={navigation} />, { wrapper });
    const searchComponent = getByTestId('searchComponent');
    expect(searchComponent).toBeDefined();
  });

  it('should call searchBoxRef.current.focus() when searchIcon is pressed', () => {
    const { getByTestId } = render(<Search navigation={navigation} />, { wrapper });
    const searchIcon = getByTestId('searchIcon');
    fireEvent(searchIcon, 'onPress');
  });

  it('should call searchBoxRef.current.blur() onTouchStart in categoriesSectionWrapper', () => {
    const { getByTestId } = render(<Search navigation={navigation} />, { wrapper });
    const categoriesSectionWrapper = getByTestId('categoriesSectionWrapper');
    fireEvent(categoriesSectionWrapper, 'onTouchStart');
  });

  it('should call getCategoryRecipesFromAPI onTouchEnd in categoryWrapper', () => {
    const { getByTestId } = render(<Search navigation={navigation} />, { wrapper });
    const categoryWrapper = getByTestId('categoryWrapper');
    fireEvent(categoryWrapper, 'onTouchEnd');

    expect(getCategoryRecipesFromAPI).toHaveBeenCalled();
  });

  it('should call restoreCategoryRecipesReducer onTouchStart in categoryWrapper', () => {
    const { getByTestId } = render(<Search navigation={navigation} />, { wrapper });
    const categoryWrapper = getByTestId('categoryWrapper');
    fireEvent(categoryWrapper, 'onTouchStart');

    expect(restoreCategoryRecipesReducer).toHaveBeenCalled();
  });
});

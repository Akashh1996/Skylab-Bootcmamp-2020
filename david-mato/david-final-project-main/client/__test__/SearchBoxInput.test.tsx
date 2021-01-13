// @ts-nocheck
import * as React from 'react';
import 'react-native';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react-native';
import SearchBoxInput from '../src/components/TextInput/SearchBoxInput';
import { getRecipeByNameFromAPI, restoreSearchReducer } from '../src/redux/actions/recipesActions';

jest.mock('../src/redux/actions/recipesActions');
const flushPromises = () => new Promise((resolve) => process.nextTick(resolve));

const buildStore = configureStore([thunk]);

describe('Search', () => {
  let navigation: object;
  let wrapper: React.FunctionComponent<any>;

  const wrapperFactory = (wrapperInitialState: object) => {
    const store = buildStore(wrapperInitialState);
    store.dispatch = jest.fn();

    return ({ children } : {children: JSX.Element}) => (
      <Provider store={store}>
        {children}
      </Provider>
    );
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should change TextInput's value from empty string and, accordingly, onSubmitEdditing, call getRecipeByNameFromAPI", () => {
    jest.useFakeTimers();
    const initialState = { recipeCategoriesReducer: { categories: [{ strCategory: 'pasta' }] }, searchReducer: { name: 'buns', status: 'not found' } };
    wrapper = wrapperFactory(initialState);
    jest.runAllTimers();

    const { getByTestId } = render(<SearchBoxInput navigation={navigation} />, { wrapper });
    flushPromises();

    const searchBoxInput = getByTestId('searchBoxInput');
    fireEvent(searchBoxInput, 'onChangeText', 'Buns');
    fireEvent(searchBoxInput, 'onSubmitEditing');

    expect(getRecipeByNameFromAPI).toHaveBeenCalled();
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
    expect(setTimeout).toHaveBeenCalledTimes(2);
  });

  it('should change placeholder text onFocus', () => {
    const initialState = { recipeCategoriesReducer: { categories: [{ strCategory: 'pasta' }] }, searchReducer: { name: 'buns', status: 'not found' } };
    wrapper = wrapperFactory(initialState);

    const { getByTestId } = render(<SearchBoxInput navigation={navigation} />, { wrapper });
    const searchBoxInput = getByTestId('searchBoxInput');
    fireEvent(searchBoxInput, 'onFocus');
  });

  it('should change placeholder text to No results when recipes has a length of 2', () => {
    const initialState = { recipeCategoriesReducer: { categories: [{ strCategory: 'pasta' }] }, searchReducer: { name: 'buns', status: 'not found' } };
    wrapper = wrapperFactory(initialState);

    const { getByTestId } = render(<SearchBoxInput navigation={navigation} />, { wrapper });
    const searchBoxInput = getByTestId('searchBoxInput');
    fireEvent(searchBoxInput, 'onFocus');
  });

  it('should call restoreSearchReducer when searchReducer has no length', () => {
    const initialState = { recipeCategoriesReducer: { categories: [{ strCategory: 'pasta' }] }, searchReducer: {} };
    wrapper = wrapperFactory(initialState);

    render(<SearchBoxInput navigation={navigation} />, { wrapper });

    expect(restoreSearchReducer).toHaveBeenCalled();
  });

  it('should not call getRecipeByNameFromAPI when, onSubmitEditing, text is falsy', () => {
    const initialState = { recipeCategoriesReducer: { categories: [{ strCategory: 'pasta' }] }, searchReducer: {} };
    wrapper = wrapperFactory(initialState);

    const { getByTestId } = render(<SearchBoxInput navigation={navigation} />, { wrapper });
    const searchBoxInput = getByTestId('searchBoxInput');
    fireEvent(searchBoxInput, 'onSubmitEditing');

    expect(getRecipeByNameFromAPI).toHaveBeenCalledTimes(0);
  });
});

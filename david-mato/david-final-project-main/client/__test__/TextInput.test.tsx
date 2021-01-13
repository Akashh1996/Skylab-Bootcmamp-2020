// @ts-nocheck
import * as React from 'react';
import 'react-native';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react-native';
import AddIngredientBoxInput from '../src/components/List/TextInput';
import { getProductTypeFromFoodDB } from '../src/redux/actions/groceryListActions';

jest.mock('../src/redux/actions/groceryListActions');

const buildStore = configureStore([thunk]);

describe('List', () => {
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
    const initialState = { recipeCategoriesReducer: { categories: [{ strCategory: 'pasta' }] }, searchReducer: { name: 'buns', status: 'not found' } };
    wrapper = wrapperFactory(initialState);

    const { getByTestId } = render(<AddIngredientBoxInput navigation={navigation} />, { wrapper });

    const textInput = getByTestId('TextInput');
    fireEvent(textInput, 'onChangeText', 'Buns');
    fireEvent(textInput, 'onSubmitEditing');

    expect(getProductTypeFromFoodDB).toHaveBeenCalled();
  });

  it("should change TextInput's value to an empty string and, accordingly, onSubmitEdditing, not call getRecipeByNameFromAPI", () => {
    const initialState = { recipeCategoriesReducer: { categories: [{ strCategory: 'pasta' }] }, searchReducer: { name: 'buns', status: 'not found' } };
    wrapper = wrapperFactory(initialState);

    const { getByTestId } = render(<AddIngredientBoxInput navigation={navigation} />, { wrapper });

    const textInput = getByTestId('TextInput');
    fireEvent(textInput, 'onChangeText', '');
    fireEvent(textInput, 'onSubmitEditing');

    expect(getProductTypeFromFoodDB).toHaveBeenCalledTimes(0);
  });
});

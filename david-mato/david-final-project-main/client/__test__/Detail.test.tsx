// @ts-nocheck
import React from 'react';
import 'react-native';
import { render, fireEvent } from '@testing-library/react-native';
import { useIsFocused } from '@react-navigation/native';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Detail from '../src/components/Detail/Detail';
import { addToFavoriteRecipes } from '../src/redux/actions/userActions';

jest.mock('../src/redux/actions/userActions');
jest.mock('@react-navigation/native');

const buildStore = configureStore([thunk]);

describe('Detail', () => {
  const navigation = { goBack: jest.fn() };
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

  it('should render when detailComponent is defined', () => {
    const initialState = { userReducer: { user: { favoriteRecipes: [] } } };
    const route = { params: { recipe: { strMealThumb: 'buns', strInstructions: '1)cooking steps', strIngredient1: 'cooking-dough' } } };

    wrapper = wrapperFactory(initialState);
    const { getByTestId } = render(
      <Detail navigation={navigation} route={route} useIsFocused={useIsFocused} />,
      { wrapper },
    );
    const detailComponent = getByTestId('detailComponent');

    expect(detailComponent).toBeDefined();
  });

  it('should call deleteFromFavoriteRecipes when heartIconPressed is true', () => {
    const initialState = { userReducer: { user: { favoriteRecipes: [{ strMealThumb: 'buns', strInstructions: '12-cooking steps' }] } } };
    const route = { params: { recipe: { strMealThumb: 'buns', strInstructions: 'cooking steps\r\n \r\n', strIngredient1: 'cooking-dough' } } };

    wrapper = wrapperFactory(initialState);
    const { getByTestId } = render(
      <Detail navigation={navigation} route={route} useIsFocused={useIsFocused} />,
      { wrapper },
    );
    const heartIcon = getByTestId('heartIcon');
    fireEvent(heartIcon, 'onPress');
    fireEvent(heartIcon, 'onPress');

    expect(addToFavoriteRecipes).toHaveBeenCalled();
  });

  it('should call addToFavoriteRecipes when heartIconPressed is false', () => {
    const initialState = { userReducer: { user: { favoriteRecipes: [] } } };
    const route = { params: { recipe: { strMealThumb: 'buns', strInstructions: '1)Bring a large pot of water to a boil, Add kosher salt to the boiling water, then add the pasta, Cook according to the package instructions, about 9 minutes, In a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer, Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes, Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste, Bring to a boil and cook for 5 minutes, Remove from the heat and add the chopped basil, Drain the pasta and add it to the sauce, Garnish with Parmigiano-Reggiano flakes and more basil and serve warm', strIngredient1: 'cooking-dough' } } };

    wrapper = wrapperFactory(initialState);
    const { getByTestId } = render(
      <Detail navigation={navigation} route={route} useIsFocused={useIsFocused} />,
      { wrapper },
    );
    const heartIcon = getByTestId('heartIcon');
    fireEvent(heartIcon, 'onPress');

    expect(addToFavoriteRecipes).toHaveBeenCalled();
  });

  it('should call goBack when arrow icon is pressed', () => {
    const initialState = { userReducer: { user: { favoriteRecipes: [] } } };
    const route = { params: { recipe: { strMealThumb: 'buns', strInstructions: 'Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes. In a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil. Drain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.', strIngredient1: 'dough' } } };

    wrapper = wrapperFactory(initialState);
    const { getByTestId } = render(
      <Detail navigation={navigation} route={route} useIsFocused={useIsFocused} />,
      { wrapper },
    );
    const goingBack = getByTestId('goingBack');
    fireEvent(goingBack, 'onPress');

    expect(navigation.goBack).toHaveBeenCalled();
  });
});

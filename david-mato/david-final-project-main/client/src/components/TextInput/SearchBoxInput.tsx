import React, { useState, useEffect } from 'react';
import { TextInput } from 'react-native';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import Props from '../Interfaces/SearchBoxInterfaces';
import { getRecipeByNameFromAPI, restoreSearchReducer } from '../../redux/actions/recipesActions';

function SearchBoxInput({
  searchBoxRef, actions, navigation, recipe, noResults,
} : Props) {
  const [text, setText] = useState<string>('');
  const [placeHolderText, setPlaceHolderText] = useState<string>('Type a recipe name here!');
  const [placeHolderColor, setPlaceHolderColor] = useState<string>('rgb(158, 158, 158)');

  useEffect(() => {
    if (noResults) {
      setPlaceHolderText('Type a recipe name here!');
      setPlaceHolderColor('rgb(158, 158, 158)');
      setText('');
    }
  }, [noResults]);

  useEffect(() => {
    if (Object.keys(recipe).length === 2) {
      setPlaceHolderText('No results');
      setPlaceHolderColor('red');
    } else if (Object.keys(recipe).length) {
      navigation.navigate('detail', {
        recipe,
      });
    }

    actions.restoreSearchReducer();
  }, [Object.keys(recipe).length]);

  return (
    <TextInput
      style={{
        height: 40, fontSize: 17, marginLeft: 10, width: '100%',
      }}
      placeholder={placeHolderText}
      placeholderTextColor={placeHolderColor}
      onChangeText={(textChange) => setText(textChange)}
      defaultValue={text}
      ref={searchBoxRef}
      onSubmitEditing={() => {
        if (text) {
          actions.getRecipeByNameFromAPI(text, false);
          setTimeout(() => {
            setText('');
          }, 1000);
        }
      }}
      onFocus={() => {
        setPlaceHolderText('Type a recipe name here!');
        setPlaceHolderColor('rgb(158, 158, 158)');
      }}
      testID="searchBoxInput"
    />
  );
}

function mapStateToProps({ searchReducer }
    : { searchReducer: object}) {
  return {
    recipe: searchReducer,
  };
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
  return {
    actions: bindActionCreators({ getRecipeByNameFromAPI, restoreSearchReducer }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBoxInput);

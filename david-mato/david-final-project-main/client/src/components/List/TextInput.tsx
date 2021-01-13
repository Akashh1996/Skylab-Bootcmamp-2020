import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { getProductTypeFromFoodDB } from '../../redux/actions/groceryListActions';

interface Actions {
    getProductTypeFromFoodDB(text: string): void
}

interface Props {
    searchBoxRef(): void
    actions: Actions
}

function AddIngredientBoxInput({ searchBoxRef, actions } : Props) {
  const [text, setText] = useState<string>('');

  return (
    <TextInput
      style={{ height: 40, fontSize: 17, width: '100%' }}
      placeholder="Add an item to your list"
      onChangeText={(textChange) => setText(textChange)}
      defaultValue={text}
      ref={searchBoxRef}
      onSubmitEditing={() => {
        if (text) {
          actions.getProductTypeFromFoodDB(text.toLowerCase());
          setText('');
        }
      }}
      testID="TextInput"
    />
  );
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
  return {
    actions: bindActionCreators({ getProductTypeFromFoodDB }, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(AddIngredientBoxInput);

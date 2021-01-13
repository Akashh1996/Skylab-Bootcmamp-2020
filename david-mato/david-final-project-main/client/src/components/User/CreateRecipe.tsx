// @ts-nocheck
import React, { useEffect, useState } from 'react';
import {
  View, BackHandler, Text, StatusBar, TextInput, Dimensions, ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import Props from '../Interfaces/CreateRecipeInterfaces';
import styles from './CreateRecipeStyles';
import { isUserSelectingMenu, addOwnRecipe } from '../../redux/actions/userActions';

const CreateRecipe = ({
  user, actions, navigation,
} : Props) => {
  const { width, height } = Dimensions.get('window');
  const [text, setText] = useState({
    title: '', photo: '', ingredients: '', steps: '',
  });

  const mockRecipe = () => {
    const arrayOfIngredientsAndMeasure = text.ingredients.split('.')
      .map((ingredient) => ingredient.split(',').map((item) => item.trim()));
    const recipe = { strMeal: text.title, strInstructions: text.steps, strMealThumb: text.photo };

    arrayOfIngredientsAndMeasure.forEach((ingredient, ingredientIndex) => {
      recipe[`strIngredient${ingredientIndex + 1}`] = ingredient[0];
      recipe[`strMeasure${ingredientIndex + 1}`] = ingredient[1];
    });

    actions.addOwnRecipe({ ...user, ownRecipes: [...user.ownRecipes, recipe] });
    setTimeout(() => {
      actions.isUserSelectingMenu(false);
      navigation.goBack();
    }, 500);
  };

  useEffect(() => {
    const goBackAndShowNavbar = (): void => {
      actions.isUserSelectingMenu(false);
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      goBackAndShowNavbar,
    );

    return () => backHandler.remove();
  }, []);

  const recipeSections = [
    {
      name: 'title', multiline: false, numberOfLines: 1, textInputHeight: 40, textAlignVertical: 'center',
    },
    {
      name: 'photo', multiline: false, numberOfLines: 1, textInputHeight: 40, textAlignVertical: 'center',
    },
    {
      name: 'ingredients', multiline: true, numberOfLines: 6, textInputHeight: 75, textAlignVertical: 'top',
    },
    {
      name: 'steps', multiline: true, numberOfLines: 6, textInputHeight: 110, textAlignVertical: 'top',
    },
  ];

  return (
    <>
      <StatusBar backgroundColor="black" barStyle="light-content" translucent />
      <View style={{ height }}>
        <Text style={styles.sectionTitle}>My recipe</Text>
        <ScrollView style={{ marginBottom: 50 }}>
          <View style={{ paddingBottom: 10 }}>
            {recipeSections.map((section) => (
              <View key={Math.random() * Date.now()}>
                <Text style={styles.recipeSectionTitle}>
                  {section.name.toUpperCase()}
                </Text>
                <View style={{ alignItems: 'center' }}>
                  <TextInput
                    style={[styles.textInput, {
                      height: section.textInputHeight, textAlignVertical: section.textAlignVertical,
                    }]}
                    placeholder={`Add your recipe's ${section.name}`}
                    onChangeText={(textChange) => setText({ ...text, [section.name]: textChange })}
                    defaultValue={text[section.name]}
                    multiline={section.multiline}
                    numberOfLines={section.numberOfLines}
                  />
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
        <View style={{ position: 'absolute', bottom: 0 }}>
          <Text
            style={[styles.createRecipeButton, { width }]}
            onPress={() => {
              mockRecipe();
            }}
          >
            Create recipe
          </Text>
        </View>
      </View>
    </>
  );
};

function mapStateToProps({ userReducer }
    : { userReducer: Object}) {
  return {
    user: userReducer.user,
  };
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
  return {
    actions: bindActionCreators({
      isUserSelectingMenu,
      addOwnRecipe,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateRecipe);

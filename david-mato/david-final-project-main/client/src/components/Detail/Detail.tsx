// @ts-nocheck
import React, { useRef, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import {
  Dimensions, Text, ScrollView, View, StatusBar, Image, TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import styles from './DetailStyles';
import Props from '../Interfaces/DetailInterfaces';
import { deleteFromFavoriteRecipes, addToFavoriteRecipes } from '../../redux/actions/userActions';

function Detail({
  user,
  actions,
  route: { params: { recipe } },
  navigation: { goBack },
}
  : Props) {
  const { height, width } = Dimensions.get('window');
  const recipeStepWidth = +(width - width * 10 / 100).toFixed();
  const linearGradientBoxHeight = height - 280;

  const recipeFoundInUserFavorites = user.favoriteRecipes
    .find((favoriteRecipe: Object) => favoriteRecipe.strMeal === recipe.strMeal);

  let heartIconPressed: boolean;

  if (recipeFoundInUserFavorites) {
    heartIconPressed = true;
  } else {
    heartIconPressed = false;
  }

  const stepsScrollRef = useRef(null);
  const detailHorizontalScrollRef = useRef(null);
  const isFocused = useIsFocused();

  useEffect(() => {
    stepsScrollRef.current.scrollTo({ x: 0, y: 0, animated: true });
    detailHorizontalScrollRef.current.scrollTo({ x: 0, y: 0, animated: true });
  }, [isFocused]);

  let recipePhotoUri;
  let recipeName;
  const getRecipeNameAndPhoto = () => {
    recipePhotoUri = recipe.strMealThumb;
    recipeName = recipe.strMeal;
  };

  const ingredientsJSX: JSX.Element[] = [];
  const addIngredientsAndMeasure = () => {
    for (let i = 1; i < 21; i += 1) {
      const ingredientName = recipe[`strIngredient${i}`];
      const ingredientMeasure = recipe[`strMeasure${i}`];
      if (ingredientName) {
        ingredientsJSX.push(
          <View key={i} style={{ alignItems: 'center', width: '33%', marginBottom: 15 }}>
            <View style={styles.ingredientContainer}>
              <Image
                style={{
                  height: 75, width: 75,
                }}
                source={{ uri: `https://www.themealdb.com/images/ingredients/${ingredientName}.png` }}
              />
            </View>
            <Text style={{ width: '90%', textAlign: 'center' }}>
              {
              !ingredientName.includes(' ') && ingredientName.includes('-')
                ? ingredientName.replace('-', '- ')
                : ingredientName
              }
              {`\n ${ingredientMeasure}`}
            </Text>
          </View>,
        );
      }
    }
  };

  const stepsJSX: JSX.Element[] = [];
  const arrayOfSteps: string[] = [];

  const divideLengthyStepStrings = (string: string) => {
    const indexOfPoint = string.indexOf('. ', 100);
    if (indexOfPoint !== -1) {
      arrayOfSteps.push(string.substring(0, indexOfPoint + 1));
      const remainingStepString = string.substring(indexOfPoint + 2);
      if (remainingStepString.length > 100) {
        divideLengthyStepStrings(remainingStepString);
      }
    } else {
      arrayOfSteps.push(string);
    }
  };

  const checkForLengthyStepStrings = () => {
    recipe.strInstructions.match(/[^\r\n]+/g).forEach((string) => {
      if (string.length > 100) {
        divideLengthyStepStrings(string);
      } else if (string.length > 1) {
        arrayOfSteps.push(string);
      }
    });
  };

  const addRecipeSteps = () => {
    checkForLengthyStepStrings();

    arrayOfSteps.forEach((step, stepNumber) => {
      let marginLeft = 10;
      let marginRight = 0;
      if (step === arrayOfSteps[0]) {
        marginLeft = 20;
      } else if (step === arrayOfSteps[arrayOfSteps.length - 1]) {
        marginRight = 20;
      }

      stepsJSX.push(
        <View
          key={Math.random() * Date.now()}
          style={[styles.stepContainer, {
            width: recipeStepWidth, marginLeft, marginRight, position: 'relative',
          }]}
        >
          <View style={[styles.stepCard, { width: recipeStepWidth }]}>
            <Text style={{ textAlign: 'center', fontSize: 17 }}>
              {(!Number.isNaN(+`${step[0]}${step[1]}`) || !Number.isNaN(+`${step[0]}`)) && (step[1] === '.' || step[1] === ')') ? step.substring(2) : step}
            </Text>
            <Text style={{
              position: 'absolute', top: 0, right: 10, textDecorationLine: 'underline',
            }}
            >
              {`${stepNumber + 1}/${arrayOfSteps.length}`}
            </Text>
          </View>
        </View>,
      );
    });
  };

  getRecipeNameAndPhoto();
  addIngredientsAndMeasure();
  addRecipeSteps();

  return (
    <>
      <StatusBar backgroundColor="black" barStyle="light-content" translucent />
      <View style={[styles.header, { flexDirection: 'row', justifyContent: 'space-between' }]} testID="detailComponent">
        <Ionicons
          size={45}
          style={{ color: 'white' }}
          name="ios-arrow-round-back"
          type="ionicons"
          onPress={() => goBack()}
          testID="goingBack"
        />
        <TouchableOpacity
          onPress={() => {
            if (heartIconPressed) {
              actions.deleteFromFavoriteRecipes(user, recipe);
            } else {
              actions.addToFavoriteRecipes(user, recipe);
            }
            heartIconPressed = !heartIconPressed;
          }}
          style={{ alignSelf: 'center' }}
          testID="heartIcon"
        >
          <Ionicons
            size={30}
            style={{ color: 'white' }}
            name={heartIconPressed ? 'md-heart' : 'md-heart-empty'}
            type="ionicons"
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        ref={detailHorizontalScrollRef}
        style={{ marginBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <Image style={{ height: height - 40 }} source={{ uri: recipePhotoUri }} />
          <LinearGradient
            colors={['transparent', 'rgb(250, 250, 250)']}
            style={[styles.linearGradientBox, { top: linearGradientBoxHeight }]}
          >
            <Text style={styles.recipeName}>
              {recipeName}
            </Text>
          </LinearGradient>
        </View>
        <View>
          <Text style={styles.sectionTitle}>
            Ingredients
          </Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {ingredientsJSX}
          </View>
        </View>
        <View style={{ paddingBottom: 20 }}>
          <Text style={styles.sectionTitle}>
            Steps
          </Text>
          <ScrollView
            ref={stepsScrollRef}
            horizontal
            pagingEnabled
            decelerationRate={0}
            snapToInterval={recipeStepWidth + 10.1}
            snapToAlignment="center"
            showsHorizontalScrollIndicator={false}
          >
            {stepsJSX}
          </ScrollView>
        </View>
      </ScrollView>
    </>
  );
}
function mapStateToProps({ userReducer }
  : { userReducer: Object}) {
  return {
    user: userReducer.user,
  };
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
  return {
    actions: bindActionCreators({
      deleteFromFavoriteRecipes,
      addToFavoriteRecipes,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);

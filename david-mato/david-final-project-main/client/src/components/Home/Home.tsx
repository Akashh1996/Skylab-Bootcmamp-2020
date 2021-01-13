// @ts-nocheck
import React, { useEffect } from 'react';
import {
  View, Text, StatusBar, Dimensions, Image, TouchableWithoutFeedback, ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import Props from '../Interfaces/HomeInterfaces';
import styles from './HomeStyles';
import { getRecipeFromAPI } from '../../redux/actions/recipesActions';
import { isUserSelectingMenu } from '../../redux/actions/userActions';

function Home({ recipes, actions, navigation }: Props) {
  actions.isUserSelectingMenu(false);
  const { height } = Dimensions.get('window');

  const recipePhotoHeight = +(height - 114).toFixed();
  const linearGradientBoxHeight = height - 280;

  let scrollViewContentOffsetY = 0;
  let goingDown: boolean;

  let recipePhotoUri: string;
  let recipeName : string;
  const getRecipeNameAndPhoto = (index: number) => {
    recipePhotoUri = recipes[index].strMealThumb;
    recipeName = recipes[index].strMeal;
  };

  const recipesJSX: JSX.Element[] = [];
  const addRecipeToScrollView = (index: number) => {
    getRecipeNameAndPhoto(index);
    recipesJSX.push(
      <TouchableWithoutFeedback
        key={Math.random() * Date.now()}
        onPress={() => navigation.navigate('detail', {
          recipe: recipes[index],
        })}
        testID="navigateToDetail"
      >
        <View>
          <Image
            style={{ height: recipePhotoHeight, position: 'relative', top: 50 }}
            source={{ uri: recipePhotoUri }}
          />
          <LinearGradient
            colors={['transparent', 'rgb(250, 250, 250)']}
            style={[styles.linearGradientBox, { top: linearGradientBoxHeight }]}
          >
            <Text style={styles.recipeName}>
              {recipeName}
            </Text>
          </LinearGradient>
        </View>
      </TouchableWithoutFeedback>,
    );
  };

  if (recipes?.length) {
    recipes?.forEach((element: object, index: number) => {
      addRecipeToScrollView(index);
    });
  }

  useEffect(() => {
    if (!recipes.length) {
      for (let i = 0; i < 3; i += 1) {
        actions.getRecipeFromAPI();
      }
    }
  }, []);

  return (
    <View style={{ marginTop: StatusBar.currentHeight }} testID="homeComponent">
      <StatusBar backgroundColor="black" barStyle="light-content" translucent />
      <View style={styles.header}>
        <Text style={{ color: 'white', fontSize: 25 }}>
          Recipes
        </Text>
      </View>
      <ScrollView
        pagingEnabled
        decelerationRate={0}
        snapToInterval={recipePhotoHeight}
        snapToAlignment="center"
        showsVerticalScrollIndicator={false}
        onScroll={(event) => {
          if (event.nativeEvent.contentOffset.y > scrollViewContentOffsetY) {
            goingDown = true;
          } else {
            goingDown = false;
          }
          scrollViewContentOffsetY = event.nativeEvent.contentOffset.y;
        }}
        onScrollEndDrag={() => {
          if (goingDown) {
            actions.getRecipeFromAPI();
          }
        }}
        testID="infiniteScroll"
      >
        {recipesJSX}
      </ScrollView>
    </View>
  );
}

function mapStateToProps({ recipesReducer } : { recipesReducer: object}) {
  return {
    recipes: recipesReducer,
  };
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
  return {
    actions: bindActionCreators({ getRecipeFromAPI, isUserSelectingMenu }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

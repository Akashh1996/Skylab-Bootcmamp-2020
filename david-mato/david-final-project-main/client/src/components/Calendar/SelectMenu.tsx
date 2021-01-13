// @ts-nocheck
import React, { useEffect, useState, useRef } from 'react';
import {
  View, BackHandler, Text, StatusBar, Image, Dimensions, ScrollView, Animated,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import Props from '../Interfaces/SelectMenuInterfaces';
import styles from './SelectMenuStyles';
import { isUserSelectingMenu } from '../../redux/actions/userActions';
import postMenu from '../../redux/actions/calendarActions';

const SelectMenu = ({
  user, route: { params: { date } }, actions, navigation,
} : Props) => {
  const { width, height } = Dimensions.get('window');

  const selectMenuSectionAnimation = useRef(new Animated.Value(0)).current;
  const [selectMenuSection, setSelectMenuSection] = useState<Object>();

  const selectMenuSectionObject: Object = {};

  user.favoriteRecipes.forEach((recipe: Object) => {
    selectMenuSectionObject[`${recipe.strMeal}`] = { displayDropDown: 'none', addedTo: '' };
  });
  user.ownRecipes.forEach((recipe: Object) => {
    selectMenuSectionObject[`${recipe.strMeal}`] = { displayDropDown: 'none', addedTo: '' };
  });

  useEffect(() => {
    setSelectMenuSection(selectMenuSectionObject);
  }, []);

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

  const changeMenuSection = (direction) => {
    Animated.timing(
      selectMenuSectionAnimation,
      {
        toValue: direction === 'left' ? 0 : -width,
        duration: 500,
        useNativeDriver: true,
      },
    ).start();
  };

  const dateArray = date.split('');
  dateArray.splice(date.split('').findIndex((character: string) => !Number.isNaN(+character)), 0, ' ');

  return (
    <>
      <StatusBar backgroundColor="black" barStyle="light-content" translucent />
      <View style={{ height }}>
        <Text style={styles.sectionTitle}>{dateArray.join('')}</Text>
        <Animated.View style={{ flexDirection: 'row', transform: [{ translateX: selectMenuSectionAnimation }], width: width * 2 }}>
          <View style={{ width }} key={Math.random() * Date.now()}>
            <Text style={styles.menuSectionTitle}>
              MY RECIPES
            </Text>
            <View style={{ position: 'absolute', right: 20, top: 3 }}>
              <Icon
                onPress={() => changeMenuSection('right')}
                size={35}
                color="white"
                name="ios-arrow-round-forward"
                type="ionicon"
              />
            </View>
            <ScrollView style={{ paddingTop: 19, marginBottom: 30 }}>
              <View style={{ alignItems: 'center', paddingBottom: 210 }}>
                {user.ownRecipes.length
                  ? user.ownRecipes.map((recipe: Object) => (
                    <View
                      style={[styles.favoriteCard, { width: width - 30 }]}
                    >
                      {selectMenuSection && selectMenuSection[`${recipe.strMeal}`].addedTo
                        ? (
                          <View style={styles.selectedRecipeFilter}>
                            <View
                              style={styles.closeIconContainer}
                            >
                              <Icon
                                onPress={() => setSelectMenuSection({ ...selectMenuSection, [`${recipe.strMeal}`]: { ...selectMenuSection[`${recipe.strMeal}`], addedTo: '' } })}
                                size={23}
                                color="black"
                                name="md-close"
                                type="ionicon"
                              />
                            </View>
                            <Text style={{ color: 'white', fontSize: 35 }}>
                              {selectMenuSection[`${recipe.strMeal}`].addedTo}
                            </Text>
                          </View>
                        )
                        : null}
                      <Image
                        style={styles.recipePhoto}
                        source={{ uri: recipe.strMealThumb }}
                      />
                      <View style={styles.recipeNameContainer}>
                        <Text style={styles.recipeName}>
                          {recipe.strMeal}
                        </Text>
                      </View>
                      <View style={{
                        position: 'absolute', top: 5, left: 5, flexDirection: 'row',
                      }}
                      >
                        <Text
                          style={[styles.addRecipeToMenu, { display: selectMenuSection && selectMenuSection[`${recipe.strMeal}`].addedTo ? 'none' : 'flex' }]}
                          onPress={() => {
                            if (selectMenuSection[`${recipe.strMeal}`].displayDropDown === 'none') {
                              setSelectMenuSection({ ...selectMenuSection, [`${recipe.strMeal}`]: { ...selectMenuSection[`${recipe.strMeal}`], displayDropDown: 'flex' } });
                            } else {
                              setSelectMenuSection({ ...selectMenuSection, [`${recipe.strMeal}`]: { ...selectMenuSection[`${recipe.strMeal}`], displayDropDown: 'none' } });
                            }
                          }}
                        >
                          +
                        </Text>
                        <View style={[styles.addRecipeToMenuSection, {
                          display: selectMenuSection ? selectMenuSection[`${recipe.strMeal}`].displayDropDown : 'none',
                        }]}
                        >
                          <Text
                            style={styles.addRecipeToBreakfastOrLunch}
                            onPress={() => {
                              setSelectMenuSection({ ...selectMenuSection, [`${recipe.strMeal}`]: { displayDropDown: 'none', addedTo: 'Breakfast' } });
                            }}
                          >
                            Breakfast
                          </Text>
                          <Text
                            style={styles.addRecipeToBreakfastOrLunch}
                            onPress={() => {
                              setSelectMenuSection({ ...selectMenuSection, [`${recipe.strMeal}`]: { displayDropDown: 'none', addedTo: 'Lunch' } });
                            }}
                          >
                            Lunch
                          </Text>
                          <Text
                            style={{ fontSize: 17, paddingVertical: 6, textAlign: 'center' }}
                            onPress={() => {
                              setSelectMenuSection({ ...selectMenuSection, [`${recipe.strMeal}`]: { displayDropDown: 'none', addedTo: 'Dinner' } });
                            }}
                          >
                            Dinner
                          </Text>
                        </View>
                      </View>
                    </View>
                  )) : (
                    <View style={{ height: height - 250, justifyContent: 'center' }}>
                      <Text style={{ fontSize: 20 }}>
                        There are no recipes here yet
                      </Text>
                    </View>
                  )}
              </View>
            </ScrollView>
          </View>
          <View style={{ width }}>
            <Text style={styles.menuSectionTitle}>
              MY FAVORITES
            </Text>
            <View style={{ position: 'absolute', left: 20, top: 3 }}>
              <Icon
                onPress={() => changeMenuSection('left')}
                size={35}
                color="white"
                name="ios-arrow-round-back"
                type="ionicon"
              />
            </View>
            <ScrollView style={{ paddingTop: 19, marginBottom: 30 }}>
              <View style={{ alignItems: 'center', paddingBottom: 210 }}>
                {user.favoriteRecipes.length
                  ? user.favoriteRecipes.map((recipe: Object) => (
                    <View
                      style={[styles.favoriteCard, { width: width - 30 }]}
                    >
                      {selectMenuSection && selectMenuSection[`${recipe.strMeal}`].addedTo
                        ? (
                          <View style={styles.selectedRecipeFilter}>
                            <View
                              style={styles.closeIconContainer}
                            >
                              <Icon
                                onPress={() => setSelectMenuSection({ ...selectMenuSection, [`${recipe.strMeal}`]: { ...selectMenuSection[`${recipe.strMeal}`], addedTo: '' } })}
                                size={23}
                                color="black"
                                name="md-close"
                                type="ionicon"
                              />
                            </View>
                            <Text style={{ color: 'white', fontSize: 35 }}>
                              {selectMenuSection[`${recipe.strMeal}`].addedTo}
                            </Text>
                          </View>
                        )
                        : null}
                      <Image
                        style={styles.recipePhoto}
                        source={{ uri: recipe.strMealThumb }}
                      />
                      <View style={styles.recipeNameContainer}>
                        <Text style={styles.recipeName}>
                          {recipe.strMeal}
                        </Text>
                      </View>
                      <View style={{
                        position: 'absolute', top: 5, left: 5, flexDirection: 'row',
                      }}
                      >
                        <Text
                          style={[styles.addRecipeToMenu, { display: selectMenuSection && selectMenuSection[`${recipe.strMeal}`].addedTo ? 'none' : 'flex' }]}
                          onPress={() => {
                            if (selectMenuSection[`${recipe.strMeal}`].displayDropDown === 'none') {
                              setSelectMenuSection({ ...selectMenuSection, [`${recipe.strMeal}`]: { ...selectMenuSection[`${recipe.strMeal}`], displayDropDown: 'flex' } });
                            } else {
                              setSelectMenuSection({ ...selectMenuSection, [`${recipe.strMeal}`]: { ...selectMenuSection[`${recipe.strMeal}`], displayDropDown: 'none' } });
                            }
                          }}
                        >
                          +
                        </Text>
                        <View style={[styles.addRecipeToMenuSection, {
                          display: selectMenuSection ? selectMenuSection[`${recipe.strMeal}`].displayDropDown : 'none',
                        }]}
                        >
                          <Text
                            style={styles.addRecipeToBreakfastOrLunch}
                            onPress={() => {
                              setSelectMenuSection({ ...selectMenuSection, [`${recipe.strMeal}`]: { displayDropDown: 'none', addedTo: 'Breakfast' } });
                            }}
                          >
                            Breakfast
                          </Text>
                          <Text
                            style={styles.addRecipeToBreakfastOrLunch}
                            onPress={() => {
                              setSelectMenuSection({ ...selectMenuSection, [`${recipe.strMeal}`]: { displayDropDown: 'none', addedTo: 'Lunch' } });
                            }}
                          >
                            Lunch
                          </Text>
                          <Text
                            style={{ fontSize: 17, paddingVertical: 6, textAlign: 'center' }}
                            onPress={() => {
                              setSelectMenuSection({ ...selectMenuSection, [`${recipe.strMeal}`]: { displayDropDown: 'none', addedTo: 'Dinner' } });
                            }}
                          >
                            Dinner
                          </Text>
                        </View>
                      </View>
                    </View>
                  )) : (
                    <View style={{ height: height - 250, justifyContent: 'center' }}>
                      <Text style={{ fontSize: 20 }}>
                        There are no recipes here yet
                      </Text>
                    </View>
                  )}
              </View>
            </ScrollView>
          </View>
        </Animated.View>
        <Text
          style={[styles.createMenuButton, { width }]}
          onPress={() => {
            Object.keys(selectMenuSection)
              .forEach((recipe) => {
                selectMenuSection[recipe].recipe = user.favoriteRecipes
                  .find((favoriteRecipe) => favoriteRecipe.strMeal === recipe) || user.ownRecipes
                  .find((ownRecipe) => ownRecipe.strMeal === recipe);
              });

            user.menus = [...user.menus, { [date]: selectMenuSection }];
            actions.postMenu(user);

            Object.keys(selectMenuSection)
              .forEach((recipe) => { selectMenuSection[recipe].displayDropDown = 'none'; });

            setTimeout(() => {
              actions.isUserSelectingMenu(false);
              navigation.navigate('calendar');
            }, 500);
          }}
        >
          Create menu
        </Text>
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
      postMenu,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectMenu);

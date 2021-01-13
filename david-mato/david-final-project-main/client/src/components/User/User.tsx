// @ts-nocheck
import React, { useRef, useState } from 'react';
import {
  StyleSheet, Text, Image, View, StatusBar, ScrollView,
  Dimensions, TouchableWithoutFeedback, Animated,
} from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import styles from './UserStyles';
import { isUserLoggedIn, deleteFromFavoriteRecipes, isUserSelectingMenu } from '../../redux/actions/userActions';

const stylese = StyleSheet.create({
  headerWrapper: {
    position: 'relative',
    top: 0,
    zIndex: 1,
    width: '100%',
    backgroundColor: 'rgb(230, 84, 84)',
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  upperHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: 15,
  },
  profilePicture: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  tabNavigator: {
    borderBottomColor: 'white',
    color: 'white',
    fontSize: 18,
  },
  recipePhoto: {
    height: 100,
    width: 155,
    borderRadius: 5,
    marginRight: 15,
  },
  recipeNameContainer: {
    flexGrow: 1,
    paddingRight: 15,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  recipeName: {
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    textAlign: 'center',
    marginTop: 5,
  },
  arrowImage: {
    width: 95,
    height: 105,
    position: 'absolute',
    right: 10,
    top: -122,
    transform: [{ rotate: '-15deg' }],
  },
  addOneContainer: {
    position: 'absolute',
    top: 155,
    right: -50,
    width: 74,
    height: 74,
    borderRadius: 37,
    backgroundColor: 'rgb(150, 89, 42)',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  favoriteCardContainer: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  favoriteCard: {
    borderRadius: 5,
    backgroundColor: 'rgb(242, 242, 242)',
    elevation: 5,
    marginHorizontal: 10,
    marginTop: 4,
    marginBottom: 16,
  },
});

function User({ user, actions, navigation }
  : { user: Object, actions: Object, navigation: Object}) {
  const { width, height } = Dimensions.get('window');

  const [tabNavigationStyle, setTabNavigationStyle] = useState({
    myRecipes: { borderBottomWidth: 1 },
    myFavorites: { borderBottomWidth: 0 },
  });
  const tabNavigationAnimation = useRef(new Animated.Value(0)).current;

  const tabNavigation = (position) => {
    Animated.timing(
      tabNavigationAnimation,
      {
        toValue: position,
        duration: 500,
        useNativeDriver: true,
      },
    ).start();
  };

  return (
    <>
      <View style={{ marginTop: StatusBar.currentHeight }} testID="userComponent">
        <StatusBar backgroundColor="black" barStyle="light-content" translucent />
        <View style={[styles.headerWrapper, { paddingVertical: 15 }]}>
          <View style={styles.upperHeader}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                style={styles.profilePicture}
                source={{ uri: user.photoUrl }}
              />
              <Text style={{ color: 'white', fontSize: 20 }}>
                {`${user.givenName} ${user.familyName}`}
              </Text>
            </View>
            <View style={{ position: 'relative', top: 2, marginRight: 10 }}>
              <Icon
                size={30}
                name="ios-log-out"
                type="ionicon"
                color="white"
                onPress={() => {
                  firebase.auth().signOut();
                  actions.isUserLoggedIn(false);
                }}
                testID="logOutIcon"
              />
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 15 }}>
            <Text
              style={[styles.tabNavigator, {
                borderBottomWidth: tabNavigationStyle.myRecipes.borderBottomWidth,
              }]}
              onPress={() => {
                tabNavigation(0);
                setTabNavigationStyle({
                  myRecipes: { ...tabNavigationStyle.myFavorites },
                  myFavorites: { ...tabNavigationStyle.myRecipes },
                });
              }}
            >
              My recipes
            </Text>
            <Text
              style={[styles.tabNavigator, {
                borderBottomWidth: tabNavigationStyle.myFavorites.borderBottomWidth,
              }]}
              onPress={() => {
                tabNavigation(-width);
                setTabNavigationStyle({
                  myRecipes: { ...tabNavigationStyle.myFavorites },
                  myFavorites: { ...tabNavigationStyle.myRecipes },
                });
              }}
            >
              My favorites
            </Text>
          </View>
        </View>
        <Animated.View style={{ transform: [{ translateX: tabNavigationAnimation }], flexDirection: 'row', width: width * 2 }}>
          <ScrollView style={{ width }}>
            <View style={{ marginTop: 15, paddingBottom: 335, alignItems: 'center' }}>
              {user.ownRecipes.length
                ? user.ownRecipes.map((recipe: Object) => (
                  <Swipeable
                    key={Math.random() * Date.now()}
                    renderLeftActions={() => <View style={{ width }} />}
                    onSwipeableLeftOpen={() => {
                      actions.deleteFromOwnRecipes(user, recipe);
                    }}
                    testID="swipeable"
                  >
                    <TouchableWithoutFeedback
                      style={[styles.favoriteCardContainer, { flexDirection: 'row' }]}
                      onPress={() => {
                        navigation.navigate('detail', {
                          recipe,
                        });
                      }}
                      testID="navigateToDetail"
                    >
                      <View style={[styles.favoriteCard, { flexDirection: 'row', width: width - 30 }]}>
                        <Image
                          style={styles.recipePhoto}
                          source={{ uri: recipe.strMealThumb }}
                        />
                        <View style={styles.recipeNameContainer}>
                          <Text style={styles.recipeName}>
                            {recipe.strMeal}
                          </Text>
                        </View>
                      </View>
                    </TouchableWithoutFeedback>
                  </Swipeable>
                ))
                : (
                  <View style={{ height: height - 250, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, textAlign: 'center' }}>
                      Create your first recipe!
                    </Text>
                    <View style={{ alignItems: 'flex-end', padding: 20 }}>
                      <View style={{ transform: [{ scaleY: -1 }], width: 60 }}>
                        <Image
                          style={styles.arrowImage}
                          source={{ uri: 'https://cdn.fastly.picmonkey.com/content4/previews/infodoodles/infodoodles_41_550.png' }}
                        />
                      </View>
                      <View style={styles.plusSignContainer}>
                        <Text
                          style={styles.plusSign}
                          onPress={() => {
                            actions.isUserSelectingMenu(true);
                            navigation.navigate('createRecipe');
                          }}
                        >
                          +
                        </Text>
                      </View>
                    </View>
                  </View>
                )}
              {user.ownRecipes.length ? (
                <View style={[styles.plusSignWrapper, { top: 360, right: 5 }]}>
                  <View style={styles.plusSignContainerAdded}>
                    <Text
                      style={styles.plusSign}
                      onPress={() => {
                        actions.isUserSelectingMenu(true);
                        navigation.navigate('createRecipe');
                      }}
                    >
                      +
                    </Text>
                  </View>
                </View>
              ) : null}
            </View>
          </ScrollView>
          <ScrollView style={{ width }}>
            <View style={{ marginTop: 15, marginBottom: 335, alignItems: 'center' }}>
              {user.favoriteRecipes.length
                ? user.favoriteRecipes.map((recipe: Object) => (
                  <Swipeable
                    key={Math.random() * Date.now()}
                    renderLeftActions={() => <View style={{ width }} />}
                    onSwipeableLeftOpen={() => {
                      actions.deleteFromFavoriteRecipes(user, recipe);
                    }}
                    testID="swipeable"
                  >
                    <TouchableWithoutFeedback
                      style={[styles.favoriteCardContainer, { flexDirection: 'row' }]}
                      onPress={() => {
                        navigation.navigate('detail', {
                          recipe,
                        });
                      }}
                      testID="navigateToDetail"
                    >
                      <View style={[styles.favoriteCard, { flexDirection: 'row', width: width - 30 }]}>
                        <Image
                          style={{
                            height: 100, width: 155, borderRadius: 5, marginRight: 15,
                          }}
                          source={{ uri: recipe.strMealThumb }}
                        />
                        <View style={{
                          flexGrow: 1, paddingRight: 15, justifyContent: 'center', flexDirection: 'row',
                        }}
                        >
                          <Text style={{
                            fontSize: 20, flex: 1, flexWrap: 'wrap', textAlign: 'center', marginTop: 5,
                          }}
                          >
                            {recipe.strMeal}
                          </Text>
                        </View>
                      </View>
                    </TouchableWithoutFeedback>
                  </Swipeable>
                ))
                : (
                  <View style={{ height: height - 250, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, textAlign: 'center' }}>
                      There are no favorite recipes yet
                    </Text>
                  </View>
                )}
            </View>
          </ScrollView>
        </Animated.View>
      </View>
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
      isUserLoggedIn,
      isUserSelectingMenu,
      deleteFromFavoriteRecipes,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);

// @ts-nocheck
import React, { useRef, useState, useEffect } from 'react';
import {
  View, Text, StatusBar, Image, ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import Props from '../Interfaces/SearchInterfaces';
import styles from './SearchSTyles';
import {
  restoreSearchReducer,
  getCategoryRecipesFromAPI,
  restoreCategoryRecipeByNameReducer,
  restoreCategoryRecipesReducer,
} from '../../redux/actions/recipesActions';
import SearchBoxInput from '../TextInput/SearchBoxInput';

function Search({ categories, actions, navigation } : Props) {
  const searchBoxRef = useRef();
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    setNoResults(false);
  }, [noResults]);

  return (
    <View style={{ marginTop: StatusBar.currentHeight }} testID="searchComponent">
      <StatusBar backgroundColor="black" barStyle="light-content" translucent />
      <View style={styles.header}>
        <Text style={{ color: 'white', fontSize: 25, paddingVertical: 10 }}>
          Search
        </Text>
        <View style={styles.searchBox}>
          <Icon size={30} name="ios-search" type="ionicon" onPress={() => searchBoxRef.current.focus()} testID="searchIcon" />
          <SearchBoxInput
            searchBoxRef={searchBoxRef}
            navigation={navigation}
            noResults={noResults}
          />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>
          Categories
        </Text>
        <View
          onTouchStart={() => searchBoxRef.current.blur()}
          style={styles.categoriesSectionWrapper}
          testID="categoriesSectionWrapper"
        >
          {categories?.categories
            .filter((category) => category.strCategory !== 'Goat' && category.strCategory !== 'Side')
            .map((category) => (
              <View
                key={Math.random() * Date.now()}
                style={styles.categoryWrapper}
                onTouchStart={() => {
                  actions.restoreCategoryRecipeByNameReducer();
                  actions.restoreCategoryRecipesReducer();
                }}
                onTouchEnd={() => {
                  setNoResults(true);
                  actions.getCategoryRecipesFromAPI(category.strCategory);
                  navigation.navigate('category', {
                    categoryName: category.strCategory,
                  });
                }}
                testID="categoryWrapper"
              >
                <LinearGradient
                  start={{ x: 0, y: 1 }}
                  end={{ x: 1, y: 0 }}
                  colors={['rgb(236, 154, 60)', 'rgb(235, 157, 69)']}
                  style={styles.categoryContainer}
                >
                  <Text style={styles.categoryName}>
                    {category.strCategory.toUpperCase()}
                  </Text>
                  <Image
                    style={styles.categoryImage}
                    source={{ uri: category.strCategoryThumb }}
                  />
                </LinearGradient>
              </View>
            ))}
        </View>
      </ScrollView>
    </View>
  );
}

function mapStateToProps({ recipeCategoriesReducer }
  : { recipeCategoriesReducer: object}) {
  return {
    categories: recipeCategoriesReducer,
  };
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
  return {
    actions: bindActionCreators({
      restoreSearchReducer,
      getCategoryRecipesFromAPI,
      restoreCategoryRecipeByNameReducer,
      restoreCategoryRecipesReducer,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);

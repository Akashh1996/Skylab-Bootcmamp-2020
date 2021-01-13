// @ts-nocheck
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { connect } from 'react-redux';
import LodingScreen from './src/components/Login/LoadingScreen';
import LoginScreen from './src/components/Login/LoginScreen';
import Home from './src/components/Home/Home';
import Detail from './src/components/Detail/Detail';
import Search from './src/components/Search/Search';
import Category from './src/components/Category/Category';
import List from './src/components/List/List';
import User from './src/components/User/User';
import CreateRecipe from './src/components/User/CreateRecipe';
import Calendar from './src/components/Calendar/Calendar';
import SelectMenu from './src/components/Calendar/SelectMenu';
import Navbar from './src/components/Navbar/Navbar';
import { navigationRef } from './RootNavigation';

const Stack = createStackNavigator();

function Navigation({ user, selectMenu } : { user: boolean, selectMenu: boolean }) {
  return (
    <>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
          {!user
            ? (
              <>
                <Stack.Screen name="lodingScreen" component={LodingScreen} options={{ headerShown: false, navigationBarHidden: true }} />
                <Stack.Screen name="loginScreen" component={LoginScreen} options={{ headerShown: false }} />
              </>
            )
            : null}
          <Stack.Screen name="home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="detail" component={Detail} options={{ headerShown: false }} />
          <Stack.Screen name="search" component={Search} options={{ headerShown: false }} />
          <Stack.Screen name="category" component={Category} options={{ headerShown: false }} />
          <Stack.Screen name="list" component={List} options={{ headerShown: false }} />
          <Stack.Screen name="person" component={User} options={{ headerShown: false }} />
          <Stack.Screen name="createRecipe" component={CreateRecipe} options={{ headerShown: false }} />
          <Stack.Screen name="calendar" component={Calendar} options={{ headerShown: false }} />
          <Stack.Screen name="selectMenu" component={SelectMenu} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
      {user && !selectMenu ? <Navbar /> : null}
    </>
  );
}

function mapStateToProps({ userReducer }
    : { userReducer: Object}) {
  return {
    user: userReducer.isUserLoggedIn,
    selectMenu: userReducer.selectingMenu,
  };
}

export default connect(mapStateToProps)(Navigation);

import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './src/redux/configureStore';
import reportWebVitals from './reportWebVitals';
import CharacterDetail from './src/components/CharacterDetail/CharacterDetail';
import CharacterList from './src/components/CharacterList/CharacterList';
import Header from './src/components/Header/Header';
import NavigationBar from './src/components/NavigationBar/NavigationBar';
import CharacterInventory from './src/components/CharacterInventory/CharacterInventory';
import CharacterNotes from './src/components/CharacterNotes/CharacterNotes';
import UserDetail from './src/components/UserDetail/UserDetail';
import CharacterSheet from './src/components/CharacterSheet/CharacterSheet';
import SearchList from './src/components/SearchList/SearchList';
import LoginScreen from './src/components/LoginScreen/LoginScreen';

const store = configureStore({
  charactersReducer: { characterItem: {}, characterId: '', charactersArray: [] },
  usersReducer: { userItem: {}, userId: '', usersArray: [] },
});

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  tabBarStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#091a25',
  },
});

const statusBarStyle = {
  lightContent: 'light-content',
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={styles.container}>
          <Stack.Navigator
            initialRouteName="LoginScreen"
            screenOptions={{
              headerShown: false,
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
          >
            <Stack.Screen name="CharacterList" component={CharacterList} />
            <Stack.Screen name="CharacterDetail" component={CharacterDetail} />
            <Stack.Screen name="Header" component={Header} />
            <Stack.Screen name="NavigationBar" component={NavigationBar} />
            <Stack.Screen name="CharacterInventory" component={CharacterInventory} />
            <Stack.Screen name="CharacterNotes" component={CharacterNotes} />
            <Stack.Screen name="UserDetail" component={UserDetail} />
            <Stack.Screen name="CharacterSheet" component={CharacterSheet} />
            <Stack.Screen name="SearchList" component={SearchList} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
          </Stack.Navigator>
          <StatusBar style={statusBarStyle.lightContent} />
        </View>
      </NavigationContainer>
    </Provider>
  );
}

reportWebVitals();

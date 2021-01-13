import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StatusBar } from 'react-native';
import DiscoverTupperList from './src/screens/DiscoverTupperList';
import DiscoverProfileList from './src/screens/DiscoverProfileList';
import ProfileDetail from './src/screens/ProfileDetail';
import TupperDetail from './src/screens/TupperDetail';
import TupperCookerList from './src/screens/TupperCookerList';
import OrdersList from './src/screens/OrdersList';
import OrderDetail from './src/screens/OrderDetail';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import Welcome from './src/screens/Welcome';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import configureStore from './src/redux/configureStore';

const Stack = createStackNavigator();
const tupperShareStore = configureStore()

const App = () => {
  return (
    <>
    <StoreProvider store={tupperShareStore}>
      <PaperProvider>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <Stack.Navigator initialRouteName="Welcome" >
          <Stack.Screen name="Signup" component={SignUp} options={{ title: 'Signup' }} screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#3740FE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        }}/> 
          <Stack.Screen name="Welcome" component={Welcome}/>
          <Stack.Screen name="Login" component={Login} options={{title: 'Login'},{headerLeft: null}}/>
          <Stack.Screen options={{headerShown: false}} name='Detail' component={TupperDetail} />
          <Stack.Screen name='Discover' component={DiscoverTupperList} />
          <Stack.Screen name='Tuppers' component={TupperCookerList} />
          <Stack.Screen name='Profile' component={ProfileDetail} />
          <Stack.Screen name='ProfileList' component={DiscoverProfileList} />
          <Stack.Screen name='Orders' component={OrdersList} />
          <Stack.Screen name='OrderDetail' component={OrderDetail} />
        </Stack.Navigator>
      </NavigationContainer>  
      </PaperProvider>
    </StoreProvider>
    </>
  );
};


export default App;

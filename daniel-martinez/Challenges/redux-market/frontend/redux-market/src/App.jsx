import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import configureStore from './configureStore';
// import Header from './components/Header';
import List from './components/List';
import './App.css';
import getProducts from './actions/marketActions';

const store = configureStore();
store.dispatch(getProducts());

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={List} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

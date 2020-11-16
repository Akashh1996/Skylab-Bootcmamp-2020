import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import configureStore from './configureStore';
// import Header from './components/Header';
import List from './components/List';
import Cart from './components/Cart';
import './App.css';
import Detail from './components/Detail';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={List} />
          <Route path="/products/:product" exact component={Detail} />
          <Route path="/cart" exact component={Cart} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

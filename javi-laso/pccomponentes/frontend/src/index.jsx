import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import Header from './components/Header/Header';
import ItemList from './components/List/ItemList/ItemList';
import Details from './components/Details/Details';
import ShoppingCart from './components/Cart/ShoppingCart/ShoppingCart';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/shoppingcart" exact component={ShoppingCart} />
          <Route path="/:itemId" exact component={Details} />
          <Route path="/" exact component={ItemList} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import MarketHeader from './components/MarketHeader';
import ListProduct from './components/ListProduct';
import DetailProduct from './components/DetailProduct';
import ShoppingCart from './components/ShoppingCart';
import configureStore from './redux/configureStore';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={MarketHeader} />
        <Route path="/" exact component={ListProduct} />
        <Route path="/product/:id" exact component={DetailProduct} />
        <Route path="/cart" exact component={ShoppingCart} />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

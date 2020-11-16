import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import configureStore from './redux/configureStore';
import ProductList from './components/productList/ProductList';
import ProductDetail from './components/productDetails/ProductDetail';
import PrimarySearchAppBar from './components/Header/Header';
import Cart from './components/cart/Cart';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PrimarySearchAppBar />
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/:productId" exact component={ProductDetail} />
          <Route path="/cart" exact component={Cart} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

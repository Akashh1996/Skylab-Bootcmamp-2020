/* eslint-disable react/jsx-filename-extension */
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import configureStore from './redux/configureStore';
import MarketList from './components/marketList/MarketList';
import DetailProduct from './components/detail/Detail';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Header from './components/header/Header';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={MarketList} />
        <Route path="/detail/:detailId" exact component={DetailProduct} />
        <Route path="/shoppingCart" exact component={ShoppingCart} />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

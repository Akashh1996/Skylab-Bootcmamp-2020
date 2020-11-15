import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import ProductList from './components/List/ProductList';
import ProductDetail from './components/Detail/ProductDetail';
import Basket from './components/Basket/Basket';
import reportWebVitals from './reportWebVitals';
import configureStore from './redux/configureStore';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/list" exact component={ProductList} />
          <Route path="/list/:productId" component={ProductDetail} />
          <Route path="/basket" component={Basket} />
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

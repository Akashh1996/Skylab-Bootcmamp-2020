import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import MarketHeader from './components/MarketHeader';
import ListProduct from './components/ListProduct';
import DetailProduct from './components/DetailProduct';
import configureStore from './redux/configureStore';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={MarketHeader} />
        <Route path="/" exact component={ListProduct} />
        <Route path="/product" exact component={DetailProduct} />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

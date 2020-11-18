import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import configureStore from './redux/configureStore';
import reportWebVitals from './reportWebVitals';
import ProductList from './components/list/productList';
import ProductDetail from './components/detail/productDetail';
import ProductFav from './components/fav/productFav';
import DatasheetList from './components/datasheetList/datasheetList';
import DatasheetDetail from './components/datasheetDetail/datasheetDetail';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/list" exact component={ProductList} />
          <Route path="/list/:productName" exact component={ProductDetail} />
          <Route path="/fav/myfav" exact component={ProductFav} />
          <Route path="/datasheets" exact component={DatasheetList} />
          <Route path="/datasheets/:productName" exact component={DatasheetDetail} />
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

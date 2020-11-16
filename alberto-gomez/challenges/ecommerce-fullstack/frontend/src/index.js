import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import configureStore from './redux/configureStore';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ComponentList from './components/ComponentList/ComponentList';
import ComponentDetail from './components/ComponentDetail/ComponentDetail';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Footer from './components/Footer/Footer';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
        <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/components" exact component={ComponentList} />
            <Route path="/components/:itemId" exact component={ComponentDetail} />
            <Route path="/shopping-cart" exact component={ShoppingCart} />
          </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

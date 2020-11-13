import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import Header from './components/Header/Header';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Header />
        </Switch>
        <Switch>
          <Route path="/" />
          <Route path="/shoppingcart" />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

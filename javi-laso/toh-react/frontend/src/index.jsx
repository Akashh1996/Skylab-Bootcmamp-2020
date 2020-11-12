import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Router } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import Header from './components/Header';
import Details from './components/Details';
import HeroesList from './components/HeroesList';
import configureStore from './redux/configureStore';

import { chargeHeroesList } from './redux/actions/heroActions';

const store = configureStore();

store.dispatch(chargeHeroesList());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header title="List of Heroes" />
        <Switch>
          <Router path="/" history="" exact component={HeroesList} />
          <Router path="/:id" history="" component={Details} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import HeroList from './components/HeroList';
import HeroDetails from './components/HeroDetails';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';

import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import { Provider } from "react-redux"
import configureStore from "./redux/configureStore"

let store = configureStore()
import { loadHero } from "./redux/actions/heroActions"

let store = configureStore()
store.dispatch(loadHero)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <hr />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/heroes" exact component={HeroList} />
          <Route path="/heroes/:heroId" component={HeroDetails} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();

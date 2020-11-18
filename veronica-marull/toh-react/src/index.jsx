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

ReactDOM.render(
  <React.StrictMode>
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
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

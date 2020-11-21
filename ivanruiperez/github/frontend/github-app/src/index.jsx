import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import Header from './components/Header/Header';
import ProjectList from './components/ProjectList/ProjectList';

const userStore = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={userStore}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={ProjectList} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

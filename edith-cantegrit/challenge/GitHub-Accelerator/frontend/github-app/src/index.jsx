import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import Header from './components/Header/Header';
import ProjectList from './components/ProjectList/ProjectList';
import ProjectDetail from './components/Detail/ProjectDetail';

const userStore = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={userStore}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={ProjectList} />
          <Route path="/project/:projectId" exact component={ProjectDetail} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainList from './components/MainList/MainList';
import Header from './components/Header/Header';
import configureStore from './redux/configureStore';
import NewProjectForm from './components/NewProjectForm/NewProjectForm';
import Detail from './components/Detail/Detail';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={MainList} />
          <Route path="/projects/:projectId" exact component={Detail} />
          <Route path="/newProjectForm" component={NewProjectForm} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

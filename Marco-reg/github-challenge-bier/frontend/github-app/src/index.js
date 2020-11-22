import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import configureStore from './redux/configureStore';
import ListComponent from './components/ListComponent/ListComponent'
import Header from './components/Header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Form from './components/Form/Form';
import DetailComponent from './components/DetailComponent/DetailComponent';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
          <Header/>
        <Switch>
            <Route path = "/" exact component = {ListComponent} ></Route>
            <Route path = "/detail/:id" exact component = {DetailComponent} ></Route>
        </Switch>
        <Form/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

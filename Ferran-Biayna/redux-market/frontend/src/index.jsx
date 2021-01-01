import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import List from './components/List';
import reportWebVitals from './reportWebVitals';
import configureStore from './stores/configureStore';
import CartList from './components/CartList';
import Detail from './components/Detail';
import Header from './components/Header';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Provider store={store}>
        <Switch>
          <Route path="/" exact component={List} />
          <Route path="/product/:productId" exact component={Detail} />
          <Route path="/cart" exact component={CartList} />
        </Switch>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

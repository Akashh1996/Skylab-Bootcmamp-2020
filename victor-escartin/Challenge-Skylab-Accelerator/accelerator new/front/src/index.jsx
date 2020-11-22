/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import store from './redux/Store';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,

  document.getElementById('root'),
);

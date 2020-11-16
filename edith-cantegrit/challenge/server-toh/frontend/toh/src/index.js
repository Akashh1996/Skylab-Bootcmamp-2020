import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HeroesList from '../src/components/HeroesList'
import configureStore from '../src/redux/configureStore';
import { Provider } from 'react-redux';
import {requestLoadHeroes} from './redux/actions/hero-actions'

const heroStore = configureStore();

heroStore.dispatch(requestLoadHeroes())


ReactDOM.render(
  <React.StrictMode>
    <Provider store={heroStore}>
    <HeroesList />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

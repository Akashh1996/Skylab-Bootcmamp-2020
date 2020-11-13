import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import HeroList from './components/heroList/HeroLIst';
import configureStore from './redux/configureStore';
import { loadHero } from './redux/actions/hero-actions';

const store = configureStore();
store.dispatch(loadHero());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HeroList />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

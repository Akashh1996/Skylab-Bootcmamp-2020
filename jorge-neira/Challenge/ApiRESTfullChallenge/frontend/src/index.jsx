import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import HeroListComponent from './components/listHeroes/ListHeroesComponents';

const heroStore = configureStore();

debugger;
ReactDOM.render(
  <React.StrictMode>
    <Provider store={heroStore}>
      <HeroListComponent />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

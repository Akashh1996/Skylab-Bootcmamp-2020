import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import HeroListComponent from './components/listHeroes/ListHeroesComponents';
import configureStore from './redux/configureStore';

const heroStore = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={heroStore}>
      <HeroListComponent />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import Header from './components/Header';
import MoviesList from './components/MoviesList';

ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>
      <Header />
      <MoviesList />
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root'),
);

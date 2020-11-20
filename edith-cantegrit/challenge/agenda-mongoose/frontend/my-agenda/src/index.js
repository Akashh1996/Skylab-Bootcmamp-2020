import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AgendaList from '../src/components/AgendaList'
import configureStore from '../src/redux/configureStore';
import { Provider } from 'react-redux';

const agendaStore = configureStore()

ReactDOM.render(
  <React.StrictMode>
  <Provider store={agendaStore}>
    <AgendaList />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

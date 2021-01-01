import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ToDoList from '../src/components/ToDoList'
import configureStore from '../src/redux/configureStore';
import { Provider } from 'react-redux';
import {requestLoadToDoList} from './redux/actions/toDoList-actions'

const toDoListStore = configureStore()

toDoListStore.dispatch(requestLoadToDoList())

ReactDOM.render(
  <React.StrictMode>
  <Provider store={toDoListStore}>
    <ToDoList />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



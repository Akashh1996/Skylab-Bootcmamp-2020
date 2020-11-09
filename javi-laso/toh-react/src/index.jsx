import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import reportWebVitals from './reportWebVitals';
import HeroesList from './components/HeroesList';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';

const store = configureStore();

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Header title="" />
			<HeroesList />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

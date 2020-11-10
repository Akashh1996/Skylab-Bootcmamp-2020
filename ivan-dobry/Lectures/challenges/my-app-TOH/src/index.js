import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TourOfHeroes from './ToH';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import DashBoard from './Dashboard';
import Detail from './Detail';
import HeroesList from './HeroesList';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import { addHero, loadHero } from './redux/actions/heroActions';

const store = configureStore();
store.dispatch(loadHero);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Header />
			<HeroesList />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

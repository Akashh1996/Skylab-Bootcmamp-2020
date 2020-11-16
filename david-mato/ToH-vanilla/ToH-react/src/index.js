import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './Header/Header.js';
import List2 from './List/List2';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './redux/configureStore';
import {loadHeroes} from './redux/actions/heroActions';

const store = configureStore();

store.dispatch(loadHeroes())

ReactDOM.render(
	<React.StrictMode>
		<ReduxProvider store={store}>
			<Header />
			<List2 />
		</ReduxProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();

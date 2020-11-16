import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PokeList from './components/list/PokeList';
import Detail from './components/detail/Detail';
import Header from './components/Header';

import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Header />
			<Switch>
				<Route path="/" exact component={PokeList} />
				<Route path="/pokemon/:pokeName" component={Detail} />
			</Switch>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

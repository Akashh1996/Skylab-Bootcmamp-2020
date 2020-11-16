import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './Header/Header.js';
import List from './List/List';
import Dashboard from './Dashboard/Dashboard';
import Detail from './Detail/Detail.js';
import NotFound from './Detail/NotFound.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Header />
			<Switch>
				<Route path="/" exact component={Dashboard} />
				<Route path="/heroes" exact component={List} />
				<Route path="/heroes/:heroId" component={Detail} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

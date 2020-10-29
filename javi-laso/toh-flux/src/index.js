import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import HeroList from './components/HeroList';
import Dashboard from './components/Dashboard';
import Details from './components/Details';
import Header from './components/Header';
import NotFound from './components/NotFound';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Header />
			<Switch>
				<Route path="/" exact component={Dashboard} />
				<Route path="/heroes" exact component={HeroList} />
				<Route path="/heroes/:heroId" component={Details} />
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

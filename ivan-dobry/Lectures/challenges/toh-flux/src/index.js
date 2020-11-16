import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HeroList from './components/HeroList';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Dashborad from '../src/components/Dashboard';
import HeroDetails from './components/HeroDetails';
import NotFound from './components/NotFound';
import Header from './components/header';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Header />
			<Switch>
				<Route path="/" exact component={Dashborad} />
				<Route path="/heroes" exact component={HeroList} />
				<Route path="/heroes/:heroId" component={HeroDetails} />
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

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HeroList from './components/HeroList';
import HeroDetails from './components/HeroDetails.jsx';
import Dashboard from './components/Dashboard.jsx';
import Header from './components/Header';
import NotFound from './components/NotFound';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Header />
			<hr />
			<Route path="/" exact component={Dashboard} />
			<Route path="/heroes" exact component={HeroList} />
			<Route path="/heroes/:algo" component={HeroDetails} />
			<Route component={NotFound} />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

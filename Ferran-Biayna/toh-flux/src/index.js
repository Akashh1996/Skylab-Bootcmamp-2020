import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HeroList from './components/HeroList';
import TopHeroes from './components/Dashboard';
import DetailHero from './components/Detail';
import Header from './components/Header';
import NotFound from './components/NotFound';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Header />
			<Switch>
				<Route path="/" exact component={TopHeroes} />
				<Route path="/heroes" exact component={HeroList} />
				<Route path="/heroes/:heroid" component={DetailHero} />
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

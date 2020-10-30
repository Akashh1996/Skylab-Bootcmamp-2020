import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Dashboard from './components/dashboard/Dashboard';
import './components/dashboard/dashboard.css';
import Aside from './components/aside/Aside';
import Detail from './components/detail/Detail';


ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Dashboard} />
				<Route path="/aside" exact component={Aside} />
				<Route path="/pokemon/:pokemonId" exact component={Detail} />
			</Switch>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();

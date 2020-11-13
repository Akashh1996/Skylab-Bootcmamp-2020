import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HeroList from './components/HeroList';
import Dashboard from './components/Dashboard';
import HeroDetails from './components/HeroDetails';
import NotFound from './components/NotFound';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './redux/configureStore';
import { loadHero } from './redux/actions/hero-actions';

const store = configureStore();

store.dispatch(loadHero);

ReactDOM.render(
	<React.StrictMode>
		<ReduxProvider store={store}>
			<BrowserRouter>
				<Header />
				<hr />
				<Switch>
					<Route path="/" exact component={Dashboard} />
					<Route path="/heroes" exact component={HeroList} />
					<Route path="/heroes/:heroId" component={HeroDetails} />
					<Route component={NotFound} />
				</Switch>
			</BrowserRouter>
		</ReduxProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

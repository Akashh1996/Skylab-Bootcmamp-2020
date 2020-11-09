import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import Detail from './components/detail/Detail';
import UserProfileR from './components/user-profileR/UserProfileRedux';
import Footer from './components/footer/Footer.jsx';
import reportWebVitals from './reportWebVitals';
import './index.css';

import { Provider } from 'react-redux';
import generateStore from './components/user-profileR/redux/user-profileStore';

const store = generateStore();

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Header />
				<Navbar />
				<Switch>
					<Route path="/" exact component={Dashboard} />
					<Route path="/detail/:bookId" exact component={Detail} />
					<Route path="/userprofile/:userId" exact component={UserProfile} />
				</Switch>
				<Footer />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();

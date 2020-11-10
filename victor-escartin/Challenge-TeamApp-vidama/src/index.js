import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import Detail from './components/detail/Detail';
import UserProfile from './components/user-profile/UserProfile';
import Footer from './components/footer/Footer.jsx';
import reportWebVitals from './reportWebVitals';
import './index.css';

ReactDOM.render(
	<React.StrictMode>
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
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();

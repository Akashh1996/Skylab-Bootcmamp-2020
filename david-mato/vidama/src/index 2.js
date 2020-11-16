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
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './components/redux/configureStore';
import { loadBooks } from './components/redux/actions/bookActions';

const store = configureStore();

store.dispatch(loadBooks);

ReactDOM.render(
	<React.StrictMode>
		<ReduxProvider store={store}>
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
		</ReduxProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();

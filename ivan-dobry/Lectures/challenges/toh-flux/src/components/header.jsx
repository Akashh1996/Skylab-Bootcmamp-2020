import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { signIn, signOut } from '../actions/firebase/auth-actions';
import authStore from '../stores/auth-store';

function Header() {
	const [isLogged, setIsLogged] = useState(false);

	function isSigningInVisible() {
		return isLogged ? (
			<button
				type="button"
				onClick={(event) => {
					event.preventDefault();
					signOut();
				}}
			>
				Sign Out
			</button>
		) : (
			<button
				type="button"
				onClick={(event) => {
					event.preventDefault();
					signIn();
				}}
			>
				Sign In
			</button>
		);
	}
	return (
		<>
			<h1>Tour of heroes</h1>
			<nav className="toh-navigation">
				<Link to="/">Dashboard</Link>
				{' | '}
				<Link to="/heroes">Heroes</Link>
				{' | '}
				{isSigningInVisible()}
			</nav>
		</>
	);
}

export default Header;

import React, { useEffect, useState } from 'react';
import '../style.css';
import { Link } from 'react-router-dom';
import { signOut, signIn } from '../actions/auth-actions';
import authStore from '../store/auth-store';

function Header() {
	const [user, setUser] = useState(authStore.getUser());

	useEffect(() => {
		authStore.addChangeListener(handleChange);
		return () => authStore.removeChangeListener(handleChange);
	});

	function isSingInVisible() {
		return user ? (
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
		<header>
			<h1 class="main-title">Tour of Heroes</h1>
			<nav>
				<Link class="nav-buttons" to="/">
					Dashboard
				</Link>
				<Link class="nav-buttons" to="/heroes">
					Heroes
				</Link>
				{isSingInVisible()}
			</nav>
		</header>
	);
}

export default Header;

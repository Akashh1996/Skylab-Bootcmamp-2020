import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
	signInWithEmail,
	signInWithGoogle,
	signOut
} from './../actions/auth-actions';
import authStore from './../stores/auth-store';
import './Header.css';

const hero = {
	id: 12
};

function Header() {
	const [user, setUser] = useState(authStore.getUser());

	function handleChange() {
		setUser(authStore.getUser());
	}

	useEffect(() => {
		authStore.addChangeListener(handleChange);

		return () => authStore.removeChangeListener(handleChange);
	});

	function getSignInButtons() {
		return (
			<>
				<button
					className="email__btn"
					id="signInButton"
					type="button"
					onClick={(event) => {
						event.preventDefault();
						signInWithEmail('dari.ryb@gmail.com', 'Gnusniy1');
					}}
				>
					Email/Password
				</button>
				{' | '}
				<button
					className="email__btn"
					type="button"
					onClick={(event) => {
						event.preventDefault();
						signInWithGoogle();
					}}
				>
					Google
				</button>
			</>
		);
	}
	function isSignInVisible() {
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
			getSignInButtons()
		);
	}

	return (
		<>
			<h1>TOUR of HEROES</h1>
			<nav className="toh-navigation">
				<Link className="dashboard__link" to="/">
					Dashboard
				</Link>
				{' | '}
				<Link className="list__link" to="/heroes">
					Heroes
				</Link>
				{' | '}
				<Link className="detail__link" to={`/heroes/${hero.id}`}>
					Narco details
				</Link>
				{' | '}
				{isSignInVisible()}
				{user && (
					<span>
						{' | '}
						Welcome {user.email}
					</span>
				)}
			</nav>
		</>
	);
}

export default Header;

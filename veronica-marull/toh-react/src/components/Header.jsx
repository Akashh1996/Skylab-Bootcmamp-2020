import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
	signInWithEmail,
	signInWithGoogle,
	signOut
} from '../actions/auth-actions';
import authStore from '../stores/auth-store';

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
					type="button"
					onClick={(event) => {
						event.preventDefault();
						signInWithEmail('vero@test.com', '123456');
					}}
				>
					{' '}
					Email/Password
				</button>
				{' | '}
				<button
					type="button"
					onClick={(event) => {
						event.preventDefault();
						signInWithGoogle();
					}}
				>
					Google
				</button>
				;
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
			<h1>Tour of heroes</h1>
			<nav className="toh-navigation">
				<Link to="/">Dashboard</Link>
				{' | '}
				<Link to="/heroes">Heroes</Link>
				{' | '}
				<Link to={`/heroes/${hero.id}`}>Narco details</Link>
				{' | '}
				{isSignInVisible()}
				{user && (
					<span>
						{' '}
						{' | '} Welcome {user.email}{' '}
					</span>
				)}
			</nav>
		</>
	);
}

export default Header;

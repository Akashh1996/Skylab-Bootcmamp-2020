import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { signInWithEmail, signInWithGoogle, signOut } from '../actions/firebase/auth-actions';
import authStore from '../stores/auth-store'

function Header() {
	const [user, setUser] = useState(authStore.getUser());

	function handleChange() {
		setUser(authStore.getUser())
	}

	useEffect(() => {
		authStore.addChangeListener(handleChange);

		return () => authStore.removeChangeListener(handleChange);
	})

	function getSignInButtons() {
		return (
		  <>
			<button type="button" className="nav-button" onClick={(event) => { event.preventDefault(); signInWithEmail('fbc.fbiayna@hotmail.com', '12345678'); }}>Email/Password</button>
			{' | '}
			<button type="button" className="nav-button" onClick={(event) => { event.preventDefault(); signInWithGoogle(); }}>Google</button>
		  </>
		);
	  }

	function isSignInVisible() {
		return user ? (
			<button onClick={(event) => {event.preventDefault(); signOut()}} className="nav-button">
				Sign Out
			</button>
		) : getSignInButtons()
	}

	return (
		<header>
			<h1>TOUR OF HEROES</h1>
			<nav className="navigation">
				<Link to="/" className="nav-button">
					Dashboard
				</Link>
				<Link to="/heroes" className="nav-button">
					Heroes
				</Link>
				{isSignInVisible()}
				{user && (<p>Welcome {user.name}!</p>)}
			</nav>
		</header>
	);
}

export default Header;

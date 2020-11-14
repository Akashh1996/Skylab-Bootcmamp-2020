import React, { useState } from 'react';
import './HeaderStyles.css';
import { Link } from 'react-router-dom';
import { signIn, signOut } from '../../actions/auth-actions';

function Header() {
	const [isLogged] = useState(false);

	function isSignInVisible() {
		return isLogged ? (
			<button
				className="nav-btn"
				href="#"
				onClick={(event) => {
					event.preventDefault();
					signOut();
				}}
			>
				Sign Out{' '}
			</button>
		) : (
			<button
				className="nav-btn"
				href="#"
				onClick={(event) => {
					event.preventDefault();
					signIn('eric_sanz_rodriguez@hotmail.com', '1234567');
				}}
			>
				Sign In
			</button>
		);
	}
	return (
		<nav className="header-container">
			<h1 className="header-title">Tour of Heroes</h1>
			<Link className="nav-btn" to="/Dashboard">
				Dashboard
			</Link>
			{' | '}
			<Link className="nav-btn" to="/List">
				Heroes
			</Link>
			{' | '}
			{isSignInVisible()}
		</nav>
	);
}

export default Header;

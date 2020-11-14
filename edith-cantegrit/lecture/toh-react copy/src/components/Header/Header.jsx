import React, { useState } from 'react';
import './HeaderStyles.css';
import { Link } from 'react-router-dom';
import { signOut } from '../../actions/auth-actions';

function Header() {
	const [isLogged] = useState(false);

	function isSignInVisible() {
		return isLogged ? (
			<button
				href="#"
				onClick={(event) => {
					event.preventDefault();
					signOut();
				}}
			>
				Sign Out
			</button>
		) : (
			<button
				href="#"
				onClick={(event) => {
					event.preventDefault();
					signIn('edith.cantegrit@gmail.com', '12345678');
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

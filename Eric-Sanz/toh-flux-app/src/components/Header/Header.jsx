import React from 'react';
import './HeaderStyles.css';
import { Link } from 'react-router-dom';

function Header() {
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
		</nav>
	);
}

export default Header;

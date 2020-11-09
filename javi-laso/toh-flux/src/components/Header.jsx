import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<header>
			<h1 id="title">Tour of Heroes</h1>
			<div className="d-flex">
				<Link to="/" className="header-buttons">
					Dashboard
				</Link>
				<Link to="/heroes" className="header-buttons">
					Heroes
				</Link>
			</div>
		</header>
	);
}

export default Header;

import React from 'react';
import './Header.css';

function Header({ title }) {
	return (
		<header>
			<h1 id="title">Tour of Heroes</h1>
			<div className="d-flex">
				<a href="#" className="header-buttons">
					Dashboard
				</a>
				<a href="#" className="header-buttons">
					Heroes
				</a>
			</div>
			<h2 className="mb-4">{title}</h2>
		</header>
	);
}

export default Header;

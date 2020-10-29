import React from 'react';
import './Header.css';

export default function HeaderNavigation() {
	return (
		<header className="nav-container">
			<h1 className="nav-title">Tour of Heroes</h1>
			<nav className="nav-buttons">
				<button className="nav-button">DASHBOARD</button>
				<button className="nav-button">HEROES LIST</button>
			</nav>
		</header>
	);
}

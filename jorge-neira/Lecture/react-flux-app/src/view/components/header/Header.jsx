import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function HeaderNavigation() {
	return (
		<header className="nav-container">
			<h1 className="nav-title">Tour of Heroes</h1>
			<nav className="nav-buttons">
				<button className="nav-button">
					<Link to="/">Dashboard</Link>
				</button>
				<button className="nav-button">
					<Link to="/heroes/list">Heroes List</Link>
				</button>
			</nav>
		</header>
	);
}

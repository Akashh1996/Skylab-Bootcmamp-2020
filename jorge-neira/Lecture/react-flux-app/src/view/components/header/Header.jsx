import React from 'react';
import { Link } from 'react-router-dom';

export default function HeaderNavigation() {
	return (
		<header className="nav-header">
			<h1>Tour of Heroes</h1>
			<nav className="nav">
				<div className="nav-buttons">
					<button className="nav-button">
						<Link to="/">Dashboard</Link>
					</button>
					<button className="nav-button">
						<Link to="/heroes/list">Heroes List</Link>
					</button>
				</div>
			</nav>
		</header>
	);
}

import React from 'react';

export default function HeaderNavigation() {
	return (
		<header className="nav-header">
			<h1>Tour of Heroes</h1>
			<nav className="nav">
				<div className="nav-buttons">
					<button className="nav-button">Dashboard</button>
					<button className="nav-button">Heroes</button>
				</div>
			</nav>
		</header>
	);
}

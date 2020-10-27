import React from 'react';

class NavigationHero extends React.Component {
	render() {
		return (
			<header className="nav-container">
				<h1 className="nav-title">Tour of heroes</h1>
				<nav className="nav-buttons">
					<button className="nav-button">Dashboard</button>
					<button className="nav-button">Hero</button>
				</nav>
			</header>
		);
	}
}

export default NavigationHero;

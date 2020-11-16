import React from 'react';
import { Link } from 'react-router-dom';

const hero = { id: 12 };

function Header() {
	return (
		<>
			<nav className="toh-navigation">
				<Link to="/">Dashboard</Link>
				{' | '}
				<Link to="/heroes">List</Link>
				{' | '}
				<Link to={`/heroes/${hero.id}`}>Details</Link>
			</nav>
		</>
	);
}

export default Header;

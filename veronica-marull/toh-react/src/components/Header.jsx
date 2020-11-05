import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const hero = {
	id: 12
};

function Header() {
	const [user, setUser] = useState(authStore.getUser());

	function isSignInVisible() {
		return isLogged ? (
			<Link to="/signout">Sign Out</Link>
		) : (
			<Link to="/signin">Sign In</Link>
		);
	}
	return (
		<>
			<h1>Tour of heroes</h1>
			<nav className="toh-navigation">
				<Link to="/">Dashboard</Link>
				{' | '}
				<Link to="/heroes">Heroes</Link>
				{' | '}
				<Link to={`/heroes/${hero.id}`}>Narco details</Link>
				{' | '}
				{isSignInVisible()}
			</nav>
		</>
	);
}

export default Header;

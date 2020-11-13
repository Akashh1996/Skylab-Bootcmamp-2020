import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signIn, signOut } from '../actions/auth-actions';

function Header() {
	const [isLogged] = useState(false);

	function isSignInVisible() {
		return isLogged ? (
			<button
				onClick={(event) => {
					event.preventDefault();
					signOut();
				}}
			>
				Sign Out{' '}
			</button>
		) : (
			<button
				onClick={(event) => {
					event.preventDefault();
					signIn('akashh.sapkota@gmail.com', '1234567');
				}}
			>
				Sign In
			</button>
		);
	}
	return (
		<>
			<h1>TOUR OF HEROES</h1>
			<nav className="toh-navigation">
				<Link to="/">DashBoard</Link>
				{'|'}
				<Link to="/heroes">Heroes</Link>
				{'|'}
				{isSignInVisible()}

				{/* <Link to={`/heroes/${hero.id}`}>Narco Details</Link>
				 */}
			</nav>
		</>
	);
}

export default Header;

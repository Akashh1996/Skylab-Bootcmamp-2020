import React from 'react';
import { Link } from 'react-router-dom';

function HeaderNavigation() {
	return (
		<>
			<h1>Tour of Heroes</h1>
			<header>
				<nav>
					<ul>
						<li>
							<Link to="/">Dashboard</Link>
						</li>
						<li>
							<Link to="/heroes/list">Heroes</Link>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}

export default HeaderNavigation;

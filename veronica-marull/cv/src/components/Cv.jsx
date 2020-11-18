import React from 'react';
import './cv.css';
import Resume from './Resume';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';

function Cv() {
	return (
		<>
			<nav className="nav_mobile">
				<div className="name_mobile">
					<p>
						<b>
							Verónica <br />
							Marull
						</b>
					</p>
				</div>
				<div className="burger_menu">
					<span class="material-icons">menu</span>
				</div>
			</nav>
			<div className="nav">
				<aside>
					<div className="name">
						<p>
							<b>
								Verónica <br />
								Marull
							</b>
						</p>
					</div>
					<nav className="nav_aside">
						<div>About Me</div>
						<div>Resume</div>
						<div>Portfolio</div>
						<div className="contact_nav">Contact</div>
					</nav>
				</aside>
				<main>
					<AboutMe />
					<Resume />
					<Portfolio />
					<Contact />
				</main>
			</div>
		</>
	);
}

export default Cv;

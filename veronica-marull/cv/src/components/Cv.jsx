import React from 'react';
import './cv.css';
import Resume from './Resume';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';

function Cv() {
	return (
		<>
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
					<nav>
						<div>About Me</div>
						<div>Resume</div>
						<div>Portfolio</div>
						<div className="contact">Contact</div>
					</nav>
				</aside>
				<main>
					<AboutMe />
					<Resume />
					<Portfolio />
				</main>
			</div>
		</>
	);
}

export default Cv;

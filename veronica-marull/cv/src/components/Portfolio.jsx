import React from 'react';
import './portfolio.css';

function Portfolio() {
	return (
		<>
			<div className="portfolio">
				<div className="portfolio_title">
					<h1>Portfolio</h1>
					<hr />
				</div>
				<div className="images">
					<div>
						<img
							src="https://trello-attachments.s3.amazonaws.com/5f8b2401fd146d5acc4e0efc/5f8b241b4ea4b34eca48e913/40ca593ad61436b76fa65db247727c27/logo-small.svg"
							alt="lunarillos"
						/>
						<img
							src="https://i2.wp.com/brandonmartin.dev/wp-content/uploads/2019/09/port-game-original.png?fit=547%2C499&ssl=1"
							alt="gameoflife"
						/>
					</div>
					<div>
						<img
							src="https://brandemia.org/sites/default/files/spotify-logo-2013.png"
							alt="spotify"
						/>
						<img
							src="https://media.redadn.es/imagenes/dswii_90124.jpg"
							alt="pokemons"
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default Portfolio;

import React, { useState, useEffect } from 'react';
import store from '../../stores/principal-store';
import { requestArtist, requestSpotifyToken } from '../../actions/actions';
import './game.css';

function Game() {
	const [token, setToken] = useState(store.getToken());
	const [artistSelected, setArtistSelected] = useState(null);

	useEffect(() => {
		store.addEventListener(handleChange);

		if (!token) {
			requestSpotifyToken();
		} else {
			requestArtist(store.getRandomArtistId());
		}

		return () => {
			store.removeEventListener(handleChange);
		};
	}, [token]);

	function handleChange() {
		setToken(store.getToken());
		setArtistSelected(store.getArtist());
	}

	return (
		<main>
			<h1>{artistSelected?.name}</h1>
			<img
				id="artist-img"
				src={store.getRandomImage()}
				alt={`${artistSelected?.name}`}
			/>
			<span>Select the correct song</span>
			<div className="horizontal-container">
				<button className="answer-button">A</button>
				<button className="answer-button">A</button>
			</div>
			<div className="horizontal-container">
				<button className="answer-button">A</button>
				<button className="answer-button">A</button>
			</div>
		</main>
	);
}

export default Game;

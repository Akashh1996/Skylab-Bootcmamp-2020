import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './mainPage.css';
import tokenStore from '../../stores/token-store';
import { requestSpotifyToken } from '../../actions/actions';

function MainPage() {
	const [token, setToken] = useState(tokenStore.getToken());

	useEffect(() => {
		tokenStore.addEventListener(handleChange);

		if (!token) {
			requestSpotifyToken();
		}

		return () => {
			tokenStore.removeEventListener(handleChange);
		};
	});

	function handleChange() {
		setToken(tokenStore.getToken());
	}

	return (
		<main className="main-page">
			<h1>Spotify trivial</h1>
			<div className="flex-spacer1"></div>
			<p className="explanation">
				You will find an artist and four songs, your objective is find what song
				belongs to the artist
			</p>
			<div className="flex-spacer2"></div>
			<Link to="/game" id="gameplay-btn">
				Play
			</Link>
			<div className="flex-spacer2"></div>
		</main>
	);
}

export default MainPage;

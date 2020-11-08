import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './mainPage.css';
import store from '../../stores/principal-store';
import { requestSpotifyToken } from '../../actions/actions';

function MainPage() {
	const [token, setToken] = useState(store.getToken());

	useEffect(() => {
		store.addEventListener(handleChange);

		if (!token) {
			requestSpotifyToken();
		}

		return () => {
			store.removeEventListener(handleChange);
		};
	});

	function handleChange() {
		setToken(store.getToken());
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

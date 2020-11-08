import React, { useState, useEffect } from 'react';
import store from '../../stores/principal-store';
import {
	requestArtist,
	requestSpotifyToken,
	requestOtherArtists,
	requestArtistTopTracks,
	requestOtherArtistsTopTracks
} from '../../actions/actions';
import './game.css';
import Scores from '../scores/Scores';
import GameButtons from './GameButtons';

function Game() {
	const [token, setToken] = useState(store.getToken());
	const [artistSelected, setArtistSelected] = useState(store.getArtist());
	const [artistSelectedSong, setArtistSelectedSong] = useState(
		store.getArtistTopTrack()
	);
	const [otherArtists, setOtherArtists] = useState(store.getOtherArtists());
	const [otherArtistsSongs, setOtherArtistsSongs] = useState(
		store.getOtherArtistsTopTracks()
	);

	useEffect(() => {
		debugger;
		store.addEventListener(handleChange);
		debugger;
		if (!token) {
			requestSpotifyToken();
		} else if (!artistSelected) {
			requestArtist(store.getRandomArtistId());
		} else if (!artistSelectedSong) {
			requestArtistTopTracks(artistSelected.id);
		} else if (!otherArtists) {
			requestOtherArtists(artistSelected.id);
		} else if (!otherArtistsSongs) {
			requestOtherArtistsTopTracks(otherArtists);
		}

		return () => {
			debugger;
			store.removeEventListener(handleChange);
		};
	}, [
		token,
		artistSelected,
		artistSelectedSong,
		otherArtists,
		otherArtistsSongs
	]);

	function handleChange() {
		debugger;
		setToken(store.getToken());
		debugger;
		setArtistSelected(store.getArtist());
		debugger;
		setArtistSelectedSong(store.getArtistTopTrack());
		debugger;
		setOtherArtists(store.getOtherArtists());
		debugger;
		setOtherArtistsSongs(store.getOtherArtistsTopTracks());
		debugger;
	}

	return (
		<main>
			<h1>{artistSelected?.name}</h1>
			<img
				id="artist-img"
				src={store.getImage()}
				alt={`${artistSelected?.name}`}
			/>
			<Scores />
			<span className="select">Select the correct song</span>
			<GameButtons />
		</main>
	);
}

export default Game;

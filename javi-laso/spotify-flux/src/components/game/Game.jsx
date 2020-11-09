import React, { useState, useEffect } from 'react';
import tokenStore from '../../stores/token-store';
import artistStore from '../../stores/artist-store';
import songsStore from '../../stores/songs-store';
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
	const [token, setToken] = useState(tokenStore.getToken());
	const [artistSelected, setArtistSelected] = useState(artistStore.getArtist());
	const [otherArtists, setOtherArtists] = useState(
		artistStore.getOtherArtists()
	);
	const [artistSelectedSong, setArtistSelectedSong] = useState(
		songsStore.getArtistTopTrack()
	);
	const [otherArtistsSongs, setOtherArtistsSongs] = useState(
		songsStore.getOtherArtistsTopTracks()
	);

	useEffect(() => {
		tokenStore.addEventListener(tokenChange);
		if (!token) {
			requestSpotifyToken();
		}
		return () => {
			tokenStore.removeEventListener(tokenChange);
		};
	}, [token]);

	useEffect(() => {
		artistStore.addEventListener(artistsChange);
		songsStore.addEventListener(songsChange);
		debugger;
		if (token) {
			if (!artistSelected) {
				requestArtist(artistStore.getRandomArtistId());
			} else if (!artistSelectedSong) {
				requestArtistTopTracks(artistSelected.id);
			} else if (!otherArtists) {
				requestOtherArtists(artistSelected.id);
			} else if (!otherArtistsSongs) {
				requestOtherArtistsTopTracks(otherArtists);
			}
		}

		return () => {
			artistStore.removeEventListener(artistsChange);
			songsStore.removeEventListener(songsChange);
		};
	}, [
		token,
		artistSelected,
		artistSelectedSong,
		otherArtists,
		otherArtistsSongs
	]);

	function tokenChange() {
		setToken(tokenStore.getToken());
	}

	function artistsChange() {
		setArtistSelected(artistStore.getArtist());
		setOtherArtists(artistStore.getOtherArtists());
	}

	function songsChange() {
		setArtistSelectedSong(songsStore.getArtistTopTrack());
		setOtherArtistsSongs(songsStore.getOtherArtistsTopTracks());
	}

	return (
		<main>
			<h1>{artistSelected?.name}</h1>
			<img
				id="artist-img"
				src={artistStore.getImage()}
				alt={`${artistSelected?.name}`}
			/>
			<Scores />
			<span className="select">Select the correct song</span>
			<GameButtons />
		</main>
	);
}

export default Game;

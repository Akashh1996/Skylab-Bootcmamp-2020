import React, { useState, useEffect } from 'react';
import songsStore from '../../stores/songs-store';
import { sumScore, sumFails, reset } from '../../actions/actions';

export default function GameButtons() {
	const [artistSelectedSong, setArtistSelectedSong] = useState(
		songsStore.getArtistTopTrack()
	);
	const [otherArtistsSongs, setOtherArtistsSongs] = useState(
		songsStore.getOtherArtistsTopTracks()
	);

	useEffect(() => {
		songsStore.addEventListener(handleChange);
		debugger;

		if (artistSelectedSong && otherArtistsSongs) {
			randomSongs();
		}

		return () => {
			debugger;
			songsStore.removeEventListener(handleChange);
		};
	}, [artistSelectedSong, otherArtistsSongs]);

	function handleChange() {
		setArtistSelectedSong(songsStore.getArtistTopTrack());
		setOtherArtistsSongs(songsStore.getOtherArtistsTopTracks());
	}

	function randomSongs() {
		let buttons = document.getElementsByClassName('answer-button');
		const randomButtonNumber = Math.floor(Math.random() * buttons.length);
		buttons[randomButtonNumber].innerHTML = artistSelectedSong.name;
		buttons = Array.prototype.filter.call(buttons, (element) => {
			return element !== buttons[randomButtonNumber];
		});
		buttons.forEach((button, index) => {
			button.innerHTML = otherArtistsSongs[index].name;
		});
	}

	function checkAnswer(event) {
		const buttons = document.getElementsByClassName('answer-button');
		if (event.target.innerHTML === artistSelectedSong.name) {
			event.target.className += ' correct-button';
			sumScore();
		} else {
			const correctButton = Array.prototype.find.call(buttons, (button) => {
				return button.innerText === artistSelectedSong.name;
			});
			correctButton.className += ' correct-button';
			event.target.className += ' incorrect-button';
			sumFails();
		}
		Array.prototype.forEach.call(buttons, (button) => {
			button.disabled = true;
		});
		resetGame(buttons);
	}

	function resetGame(buttons) {
		setTimeout(() => {
			Array.prototype.forEach.call(buttons, (button) => {
				button.disabled = false;
				button.setAttribute('class', 'answer-button');
			});
			reset();
		}, 5000);
	}

	return (
		<>
			<div className="horizontal-container">
				<div className="button-container">
					<button
						className="answer-button"
						onClick={(event) => {
							checkAnswer(event);
						}}
					>
						A
					</button>
				</div>
				<div className="button-container">
					<button
						className="answer-button"
						onClick={(event) => {
							checkAnswer(event);
						}}
					>
						A
					</button>
				</div>
			</div>
			<div className="horizontal-container">
				<div className="button-container">
					<button
						className="answer-button"
						onClick={(event) => {
							checkAnswer(event);
						}}
					>
						A
					</button>
				</div>
				<div className="button-container">
					<button
						className="answer-button"
						onClick={(event) => {
							checkAnswer(event);
						}}
					>
						A
					</button>
				</div>
			</div>
		</>
	);
}

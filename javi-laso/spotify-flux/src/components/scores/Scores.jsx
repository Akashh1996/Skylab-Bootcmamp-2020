import React, { useState, useEffect } from 'react';
import store from '../../stores/principal-store';
import './scores.css';

export default function Scores() {
	const [score, setScore] = useState(store.getScore());
	const [fails, setFails] = useState(store.getFails());

	useEffect(() => {
		store.addEventListener(scoreChange);

		return () => {
			store.removeEventListener(scoreChange);
		};
	});

	function scoreChange() {
		setScore(store.getScore());
		setFails(store.getFails());
	}
	return (
		<div className="absolute-lateral">
			<span id="scores">{`Correct guesses: ${score}`}</span>
			<span id="fails">{`Incorrect guesses: ${fails}`}</span>
		</div>
	);
}

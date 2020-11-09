import React, { useState, useEffect } from 'react';
import tokenStore from '../../stores/token-store';
import './scores.css';

export default function Scores() {
	const [score, setScore] = useState(tokenStore.getScore());
	const [fails, setFails] = useState(tokenStore.getFails());

	useEffect(() => {
		tokenStore.addEventListener(scoreChange);

		return () => {
			tokenStore.removeEventListener(scoreChange);
		};
	});

	function scoreChange() {
		setScore(tokenStore.getScore());
		setFails(tokenStore.getFails());
	}
	return (
		<div className="absolute-lateral">
			<span id="scores">{`Correct guesses: ${score}`}</span>
			<span id="fails">{`Incorrect guesses: ${fails}`}</span>
		</div>
	);
}

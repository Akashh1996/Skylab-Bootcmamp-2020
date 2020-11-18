import React, { useState, useEffect } from 'react';
import heroStore from './stores/hero-store';
import { loadHero, deleteHero } from './actions/action-creators';

function TextInput() {
	const [hero, setHero] = useState(heroStore.getHero());
	const [inputId, setInputId] = useState(hero?.id);
	const [inputName, setInputName] = useState(hero?.name);

	useEffect(() => {
		heroStore.addEventListener(onChange);
		if (!hero) {
			loadHero();
		}

		return () => {
			heroStore.removeEventListener(onChange);
		};
	}, [hero]);

	function onChange() {
		const hero = heroStore.getHero();
		setHero(hero);
		setInputId(hero?.id);
		setInputName(hero?.name);
	}

	function handleChanges({ target: { value } }, setValue) {
		setValue(value);
	}

	return (
		<>
			<p>
				{' '}
				id:
				<input
					type="text"
					value={inputId}
					onChange={(event) => handleChanges(event, setInputId)}
				/>
			</p>
			<p>
				{' '}
				name:
				<input
					type="text"
					value={inputName}
					onChange={(event) => handleChanges(event, setInputName)}
				></input>
			</p>
			<p>
				<button onClick={deleteHero}>Delete Hero</button>
				<button onClick={loadHero}>Load Hero</button>
			</p>
		</>
	);
}

export default TextInput;

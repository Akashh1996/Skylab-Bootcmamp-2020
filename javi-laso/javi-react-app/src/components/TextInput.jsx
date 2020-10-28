import React, { useState, useEffect } from 'react';
import { loadHero } from '../actions/action-creators';
import heroStore from '../stores/hero-store';

function TextInput() {
	debugger;
	const [hero, setHero] = useState(heroStore.getHero());
	const [IdValue, setIdValue] = useState(hero?.id);
	const [nameValue, setNameValue] = useState(hero?.name);
	const [lastNameValue, setLastNameValue] = useState(hero?.lastname);

	useEffect(() => {
		debugger;
		heroStore.addEventListener(onChange);

		if (!hero) {
			loadHero();
		}

		return () => {
			heroStore.removeEventListener(onChange);
		};
	}, [hero]);

	function onChange() {
		debugger;
		const hero = heroStore.getHero();
		setHero(hero);
		setIdValue(hero.id);
		setNameValue(hero.name);
		setLastNameValue(hero.lastname);
	}

	const handleChange = ({ target: { value } }, setValue) => {
		setValue(value);
	};

	return (
		<>
			<p>
				id:
				<input
					type="text"
					value={IdValue}
					onChange={(event) => {
						handleChange(event, setIdValue);
					}}
				/>
			</p>
			<p>
				name:
				<input
					type="text"
					value={nameValue}
					onChange={(event) => {
						handleChange(event, setNameValue);
					}}
				/>
			</p>
			<p>
				lastname:
				<input
					type="text"
					value={lastNameValue}
					onChange={(event) => {
						handleChange(event, setLastNameValue);
					}}
				/>
			</p>
		</>
	);
}

export default TextInput;

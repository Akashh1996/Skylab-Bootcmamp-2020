import React, { useEffect, useState } from 'react';
import { loadHero, deleteHero } from '../actions/action-creator';
import heroStore from '../stores/hero-store';

function TextInput() {
	const [hero, setHero] = useState(heroStore.getHero());
	const [id, setId] = useState(hero?.id);
	const [name, setName] = useState(hero?.name);
	const [lastname, setLastName] = useState(hero?.lastname);
	const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		heroStore.addEventListener(onChange);
		if (!hero && !loaded) {
			loadHero();
			setLoaded(true);
		}

		return () => {
			heroStore.removeEventListener(onChange);
		};
	}, [hero, loaded]);

	function onChange() {
		const hero = heroStore.getHero();
		setHero(hero);
		setId(hero?.id || '');
		setName(hero?.name || '');
		setLastName(hero?.lastname || '');
	}

	function handleChange(event, setValue) {
		setValue(event.target.value);
	}

	return (
		<>
			<p>
				id:
				<input
					type="text"
					value={id}
					onChange={(event) => handleChange(event, setId)}
				/>
			</p>
			<p>
				name:
				<input
					type="text"
					value={name}
					onChange={(event) => handleChange(event, setName)}
				/>
			</p>
			<p>
				name:
				<input
					type="text"
					value={lastname}
					onChange={(event) => handleChange(event, setLastName)}
				/>
			</p>
			<button onClick={() => deleteHero()}>Delete Hero</button>
			<button onClick={() => loadHero()}>Add Hero</button>
		</>
	);
}
export default TextInput;

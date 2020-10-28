import React, { useEffect, useState } from 'react';
import { loadHero, deleteHero } from '../actions/action-creators';
import heroStore from '../stores/hero-store';

function TextInput() {
	const [hero, setHero] = useState(heroStore.getHero());
	const [id, setId] = useState(hero?.id);
	const [name, setName] = useState(hero?.name);
	const [lastname, setLastName] = useState(hero?.lastname);

	useEffect(() => {
		heroStore.addEventListener(onChange);

		return () => {
			heroStore.removeEventListener(onChange);
		};
	}, [hero]);

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
			{!hero && <h1>No hay un heroe!</h1>}
			{hero && (
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
				</>
			)}
			<p>
				<button onClick={() => deleteHero()}>Delete hero</button>
			</p>
			<p>
				<button onClick={() => loadHero()}>Load hero</button>
			</p>
			<p>
				<button onClick={() => loadHero({ id: 13, name: 'Bombasto' })}>
					Load different hero
				</button>
			</p>
			<p>
				<button onClick={() => loadHero({ id: '0', name: 'SantiagoGerardo' })}>
					Load completly different cuasi-hero
				</button>
			</p>
		</>
	);
}

export default TextInput;

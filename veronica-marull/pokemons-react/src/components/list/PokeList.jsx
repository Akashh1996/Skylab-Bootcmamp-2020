import React, { useEffect, useState } from 'react';
import pokeStore from '../../stores/store';
import { loadPokemons } from '../../actions/actions';
import './pokeList.css';

function PokeList() {
	const [list, setList] = useState(pokeStore.getPokemons());
	debugger;
	function handleChange() {
		setList(pokeStore.getPokemons());
	}

	useEffect(() => {
		pokeStore.addEventListener(handleChange);
		if (!list) {
			loadPokemons();
		}
		return () => {
			pokeStore.removeEventListener(handleChange);
		};
	}, [list]);

	return (
		<>
			<div>
				{list ? (
					list.forEach((pokemon) => (
						<ul>
							<li>
								<a href="*">{pokemon.name}</a>
							</li>
						</ul>
					))
				) : (
					<div>Loading</div>
				)}
			</div>
		</>
	);
}

export default PokeList;

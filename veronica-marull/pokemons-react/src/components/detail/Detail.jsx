import React, { useEffect, useState } from 'react';
import pokeStore from '../../stores/store';
import { loadPokemonsDetail } from '../../actions/actions';
import { useParams } from 'react-router';
import './detail.css';

function Detail() {
	// We can use the `useParams` hook here to access
	// the dynamic pieces of the URL.
	let { pokeName } = useParams();

	const [detail, setDetail] = useState(pokeStore.getDetail());

	function handleChange() {
		setDetail(pokeStore.getDetail());
	}

	useEffect(() => {
		pokeStore.addEventListener(handleChange);

		loadPokemonsDetail(pokeName);

		return () => {
			pokeStore.removeEventListener(handleChange);
		};
	}, [detail, pokeName]);

	return (
		<>
			{detail && (
				<>
					<div className="pokeDetail">
						<h1>{detail.name} </h1>
						<span className="image">
							<img src={detail.sprites.front_default} alt="pokeImage" />
						</span>
						<br />
						<span>Id: {detail.id} </span>
						<br />
						<span>Weight: {detail.weight} </span>
					</div>
				</>
			)}
		</>
	);
}

export default Detail;
/*

<span>{detail.id} </span>
			<span>{detail.name} </span>
			<span>{detail.weight} </span>

async function drawPokemon(pokeName) {
	const pokemon = await store.getPokemonDetail(pokeName);
	if (pokemon) {
		let details = document.getElementById('details');
		details.innerHTML = '';

		for (property of ['id', 'name', 'weight']) {
			details.innerHTML += `<span><b>${property}</b>: ${pokemon[property]}</span>`;
		}
		details.innerHTML += `<span><img src="${pokemon.sprites.front_default}"/></span>`;*/

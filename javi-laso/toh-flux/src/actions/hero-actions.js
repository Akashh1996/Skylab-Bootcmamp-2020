import actionTypes from './action-types';
import dispatcher from '../dispatcher/dispatcher';
import axios from 'axios';

async function loadHeroes() {
	const heroes = await axios('/api/heroes.json');
	dispatcher.dispatch({
		type: actionTypes.LOAD_HEROES,
		payload: heroes.data
	});
}

function deleteHero(id) {
	dispatcher.dispatch({
		type: actionTypes.DELETE_HERO,
		payload: id
	});
}

async function loadHero(heroId) {
	const response = await fetch('/api/heroes.json');
	const heroes = await response.json();
	const hero = heroes.find((heroFounded) => {
		return heroFounded.id === heroId;
	});

	dispatcher.dispatch({
		type: actionTypes.LOAD_HERO,
		payload: hero
	});
}

export { loadHeroes, deleteHero, loadHero };

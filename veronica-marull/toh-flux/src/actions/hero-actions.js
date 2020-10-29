import actionTypes from './action-types';
import dispatcher from '../dispatcher/dispatcher';
async function loadHeroes() {
	const response = await fetch('api/heroes.json');
	const heroes = await response.json();
}

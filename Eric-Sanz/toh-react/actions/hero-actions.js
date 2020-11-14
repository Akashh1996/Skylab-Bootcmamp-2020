import dispatcher from '../dispatcher/dispatcher';
import typeActions from './type-actions';

export async function loadHeroes() {
	const response = await fetch('./heroes.json');
	const heroes = await response.json();

	dispatcher.dispatch({
		type: typeActions.LOAD_HEROES,
		data: heroes
	});
}

export async function loadHeroById(heroId) {
	const response = await fetch('./heroes.json');
	const heroes = await response.json();
	const heroFound = heroes.find((hero) => hero.id === heroId);

	dispatcher.dispatch({
		type: typeActions.LOAD_HERO,
		data: heroFound
	});
}

export function removeHeroe(heroId) {
	dispatcher.dispatch({
		type: typeActions.REMOVE_HEROES,
		data: heroId
	});
}

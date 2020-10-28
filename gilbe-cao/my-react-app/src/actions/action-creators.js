import dispatcher from '../dispatcher';
import actionTypes from './action-types';

const hero = {
	id: 12,
	name: 'Narco',
	lastname: 'Traficanta'
};

export function loadHero(otherHero) {
	dispatcher.dispatch({
		type: actionTypes.LOAD_HERO,
		data: otherHero ? otherHero : hero
	});
}

export function deleteHero() {
	dispatcher.dispatch({
		type: actionTypes.DELETE_HERO
	});
}

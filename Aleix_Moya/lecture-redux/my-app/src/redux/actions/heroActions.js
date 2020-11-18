export function addHero(hero) {
	return {
		type: 'ADD_HERO',
		hero
	};
}
export function deleteHero(hero) {
	return {
		type: 'DELETE_HERO',
		hero
	};
}
export function meanwhile() {
	return {
		type: 'WAITING_DATA'
	};
}
export async function loadCoin(loadedcoins) {
	return {
		type: 'LOAD_COINS',
		payload: loadedcoins
	};
}
export function errorCoins(error) {
	return {
		type: 'COINS_ERROR',
		error: error
	};
}

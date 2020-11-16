const axios = require('axios').default;

export function addWeapon(weapon) {
	return {
		type: 'ADD_WEAPON',
		weapon
	};
}
export function deleteWeapon(weapon) {
	return {
		type: 'DELETE_WEAPON',
		weapon
	};
}
export function loadWargear(wargear) {
	return {
		type: 'LOAD_WARGEAR',
		wargear
	};
}
export function loadWeapons() {
	return async (dispatch) => {
		const endpoint = 'http://localhost:2020/';
		try {
			const weapons = await axios.get(endpoint);
			dispatch(loadWargear(weapons));
		} catch (error) {}
	};
	/*const gunResponse = await axios.get('../data/SpaceMarineWargear.json');
	const Astartes = gunResponse.data;
	dispatch(loadWargear(Astartes));*/
}

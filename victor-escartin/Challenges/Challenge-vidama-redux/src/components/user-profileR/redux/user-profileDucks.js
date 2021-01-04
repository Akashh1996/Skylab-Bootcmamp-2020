import axios from 'axios';

//CONSTANTS
const dataInicial = {
	array: []
};

const LOAD_USERS = 'LOAD_USERS';

//REDUCER

export default function loadUsersReducer(state = dataInicial, action) {
	switch (action.type) {
		case actionTypes.LOAD_USERS:
			return { ...state, array: action.payload };

		default:
			return state;
	}
}

//ACTIONS
export const loadUsersAction = () => async (dispatch, getState) => {
	console.log('GetState', getState().users);

	try {
		const res = await axios.get('/api/users.json');
		dispatch({
			type: LOAD_USERS,
			payload: res.data
		});
	} catch (error) {
		console.log('ERROR!');
	}
};

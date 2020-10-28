import dispatcher from '../dispatcher';
import actionTypes from './actionTypes';

const viajeForm = ['Ida y vuelta', 'Sólo Ida', 'Destinos múltiples'];

export function loadViajeform() {
	dispatcher.dispatch({
		type: actionTypes.LOAD_VIAJEFORM,
		data: viajeForm
	});
}

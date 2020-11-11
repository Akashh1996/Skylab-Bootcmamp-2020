import './firebase/firebaseIndex';
import firebase from 'firebase';
import dispatcher from '../dispatcher/dispatcher';
import typeActions from '../actions/type-actions';

export async function signIn(email, password) {
	try {
		const { user } = await firebase
			.auth()
			.signInWithEmailAndPassword(email, password);
		dispatcher.dispatch({
			type: typeActions.AUTH_LOGIN,
			payload: {
				displayName: user.displayName,
				email: user.email,
				phoneNumber: user.phoneNumber,
				photoURL: user.photoURL
			}
		});
	} catch (error) {
		dispatcher.dispatch({
			type: typeActions.AUTH_LOGIN_ERROR
		});
	}
	return;
}

export async function signOut() {
	try {
		await firebase.auth().signOut();
		dispatcher.dispatch({
			type: typeActions.AUTH_LOGOUT
		});
	} catch (error) {
		dispatcher.dispatch({
			type: typeActions.AUTH_LOGOUT_ERROR
		});
	}
	return;
}

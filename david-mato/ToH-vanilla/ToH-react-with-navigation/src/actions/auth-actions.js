import './firebase/firebaseIndex';
import firebase from 'firebase';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from './actionTypes';

export async function signIn(email, password) {
	try {
		const { user } = await firebase
			.auth()
			.signInWithEmailAndPassword(email, password);
		dispatcher.dispatch({
			type: actionTypes.AUTH_LOGIN,
			payload: {
				displayName: user.displayName,
				email: user.email,
				phoneNumber: user.phoneNumber,
				photoURL: user.photoURL
			}
		});
	} catch (error) {
		dispatcher.dispatch({
			type: actionTypes.AUTH_LOGIN_ERROR
		});
	}
}

export async function signOut() {
	try {
		await firebase.auth().signOut();
		dispatcher.dispatch({
			type: actionTypes.AUTH_SIGNOUT
		});
	} catch (error) {
		dispatcher.dispatch({
			type: actionTypes.AUTH_SIGNOUT_ERROR
		});
	}
	return firebase.auth().signOut();
}

import firebase from 'firebase';
import './firebaseConfig';

export default async function signinWithGoogle () {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  return firebase.auth().signInWithPopup(provider);
}

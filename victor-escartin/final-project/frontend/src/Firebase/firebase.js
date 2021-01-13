/* eslint-disable no-debugger */
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyANwDni-EyKZ8N0xwtbq4y8m5LzKd71ShM',
  authDomain: 'noalone.firebaseapp.com',
  projectId: 'noalone',
  storageBucket: 'noalone.appspot.com',
  messagingSenderId: '199237723189',
  appId: '1:199237723189:web:27eabb4286dc5e6a627d7c',
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth, firebase };

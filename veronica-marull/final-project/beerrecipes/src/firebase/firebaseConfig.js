import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD3WEks7TCOvqGGvV2COLNuP62Db6K59H4',
  authDomain: 'beer-recipes-12a64.firebaseapp.com',
  projectId: 'beer-recipes-12a64',
  storageBucket: 'beer-recipes-12a64.appspot.com',
  messagingSenderId: '309303376287',
  appId: '1:309303376287:web:6177faeb36788e4ee665aa'
};

firebase.initializeApp(firebaseConfig);
firebase.auth();

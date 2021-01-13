import * as Google from 'expo-google-app-auth'

export const firebaseConfig = {
  apiKey: 'AIzaSyBNXbHzBblNbQVp3a-ywmyE-On32_KGZoM',
  authDomain: 'monclus-group.firebaseapp.com',
  projectId: 'monclus-group',
  storageBucket: 'monclus-group.appspot.com',
  messagingSenderId: '559936684444',
  appId: '1:559936684444:web:f997469d43d46999d58859',
  measurementId: 'G-GK24N2WKT5'
}

export default async function signinWithGoogle () {
  try {
    const result = await Google.logInAsync({
      androidClientId: '559936684444-1hvm90qk4vmtvbi3uhc3vjvm0eijro15.apps.googleusercontent.com',
      iosClientId: '559936684444-153buk0j4tr0ah06jm1i1nk2ckl93a6c.apps.googleusercontent.com',
      scopes: ['profile', 'email']
    })
    return result
  } catch (error) {
    return (error)
  }
}


// import auth from '@react-native-firebase/auth'
// import actionTypes from './action-types';

// function createUserSuccess(createdUser) {
//   return {
//     type: actionTypes.AUTH_SIGNUP,
//     createdUser
//   }
// }

// function createUserError(errorSignUp) {
//   return {
//     type: actionTypes.AUTH_SIGNUP_ERROR,
//     errorSignUp
//   }
// }

// function signedUserSuccess(loggedUser) {
//   return {
//     type: actionTypes.AUTH_LOGIN,
//     loggedUser
//   }
// }

// function signedUserError(errorLogin) {
//   return {
//     type: actionTypes.AUTH_LOGIN_ERROR,
//     errorLogin
//   }
// }

// function signOutSuccess(loggedOut) {
//   return {
//     type: actionTypes.AUTH_SIGNOUT,
//     loggedOut
//   }
// }

// function signOutError(errorLogout) {
//   return {
//     type: actionTypes.AUTH_SIGNOUT_ERROR,
//     errorLogout
//   }
// }


// export const createUserWithEmail = (params) => {
//   return async (dispatch) => {
//     await auth()
//       .createUserWithEmailAndPassword(params.email, params.password)
//       .then((res)=> {
//           const uid = res.user._user.uid;
//           const setData = {
//             name: params.name,
//             username: params.username,
//             email: params.email,
//             id_user: uid
//           };
//           dispatch(createUserSuccess(setData))
//       })
//       .catch((err) => {
//         dispatch(createUserError(err.message));
//       });
//   };
// };

// export async function signInWithEmail(email, password) {
//   return async(dispatch) =>{
//   try {
//     const { user } = await auth().signInWithEmailAndPassword(email, password);
//     dispatch(signedUserSuccess(user))
//   } catch (error) {
//     dispatch(signedUserError(error));
//   }
// }
// }
// export const signInWithEmail = (email, password) => {
//   return (dispatch) => {
//     auth()
//       .signInWithEmailAndPassword(email, password)
//       .then(async (res) => {
//         const user = await getUserAction(res.user.uid);
//         dispatch({type: LOGIN_USER_SUCCESS, user: user, uid: res.user.uid});
//       })
//       .catch((err) => {
//         Alert.alert(
//           'Giriş Başarısız',
//           `Giriş yapılırken hata oluştu. \nHata kodu: ${err.message}`,
//         );
//         dispatch({type: LOGIN_USER_FAIL});
//       });
//   };
// };

// export async function signOut() {
//   return async(dispatch) =>{
//     try {
//       const { user } = await auth().signOut();
//       dispatch(signOutSuccess(user))
//     } catch (error) {
//       dispatch(signOutError(error))
//     }
//   }
// }



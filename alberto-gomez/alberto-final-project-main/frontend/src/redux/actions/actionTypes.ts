interface actionTypesStore {
  LOAD_GAME: string,
  LOAD_ALL_GAMES: string,
  LOAD_USER: string,
  SEND_USER: string,
  LOGIN_USER_GOOGLE: string,
  LOGOUT_USER: string,
  LOAD_ERROR: string,
}

const actionTypes: actionTypesStore = {
  LOAD_GAME: 'LOAD_GAME',
  LOAD_ALL_GAMES: 'LOAD_ALL_GAMES',
  LOAD_USER: 'LOAD_USER',
  SEND_USER: 'SEND_USER',
  LOGIN_USER_GOOGLE: 'LOGIN_USER_GOOGLE',
  LOGOUT_USER: 'LOGOUT_USER',
  LOAD_ERROR: 'LOAD_ERROR'
}

export default actionTypes

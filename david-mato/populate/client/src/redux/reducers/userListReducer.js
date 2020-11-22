export default function userListReducer(state = [], action) {
  switch (action.type) {
    case 'LOAD_USERLIST':
      return [...state, ...action.userList];
    default:
      return state;
  }
}

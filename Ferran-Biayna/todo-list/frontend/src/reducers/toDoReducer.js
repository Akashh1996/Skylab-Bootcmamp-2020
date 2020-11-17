export default function toDoReducer(state = {}, action) {
  switch (action.type) {
    case 'LOAD_LIST':
      return { ...state, toDoList: action.list };
    case 'ADD_ITEM':
      return { ...state, toDoList: action.item };
    case 'DELETE_ITEM':
      return { ...state, toDoList: action.item };

    default:
      return state;
  }
}

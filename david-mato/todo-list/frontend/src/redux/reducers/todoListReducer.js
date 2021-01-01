export default function todoListReducer(state = [], action) {
  switch (action.type) {
    case 'LOAD_TODOLIST':
      return [...state, ...action.todoList];
    case 'POST_TODOLIST_ITEM':
      return [...state, action.todoListItem];
    case 'DELETE_TODOLIST_ITEM':
      return state.filter((listItem) => {
        const { _id } = listItem;
        return _id !== action.todoListItemId;
      });
    default:
      return state;
  }
}

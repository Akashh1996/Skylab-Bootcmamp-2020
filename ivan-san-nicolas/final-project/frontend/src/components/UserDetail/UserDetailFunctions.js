export function editUser(userItem, newValue, updateUser, dispatch, marker) {
  const user = 'user';
  const games = 'games';
  const languages = 'languages';

  switch (marker) {
    case user:
      if (newValue.length) {
        userItem.userName = newValue;
      } else {
        userItem.userName = 'New User';
      }
      break;
    case games:
      userItem.favouriteGames = newValue.filter((value) => value.title !== '');
      break;
    case languages:
      userItem.languages = newValue.filter((value) => value.title !== '');
      break;
    default:
      break;
  }

  dispatch(updateUser(userItem._id, userItem));
}

export function deleteListValue(categoryArray, valueId, setEditListModalArrayValue) {
  const newCategoryArray = categoryArray.filter(
    (actualValue) => actualValue.uniqueKey !== valueId,
  );
  setEditListModalArrayValue(newCategoryArray);
}

import { editUser, deleteListValue } from './UserDetailFunctions';

describe('UserDetailFunctions', () => {
  const userFunction = jest.fn();
  const dispatch = jest.fn();

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('should call dispatch setting the new userName as the new text', () => {
    const user = {};
    const editModalTextValue = 'string';
    const marker = 'user';
    editUser(user, editModalTextValue, userFunction, dispatch, marker);

    expect(dispatch).toHaveBeenCalled();
  });
  test('should call dispatch setting the new userName as the default text', () => {
    const user = {};
    const editModalTextValue = '';
    const marker = 'user';
    editUser(user, editModalTextValue, userFunction, dispatch, marker);

    expect(dispatch).toHaveBeenCalled();
  });
  test('should call dispatch setting the new favouriteGames as the new array', () => {
    const user = {};
    const editModalTextValue = [
      {
        title: 'string',
      },
      {
        title: '',
      },
    ];
    const marker = 'games';
    editUser(user, editModalTextValue, userFunction, dispatch, marker);

    expect(dispatch).toHaveBeenCalled();
  });
  test('should call dispatch setting the new languages as the new array', () => {
    const user = {};
    const editModalTextValue = [
      {
        title: 'string',
      },
      {
        title: '',
      },
    ];
    const marker = 'languages';
    editUser(user, editModalTextValue, userFunction, dispatch, marker);

    expect(dispatch).toHaveBeenCalled();
  });
  test('should call dispatch setting the default userName', () => {
    const user = {};
    const editModalTextValue = '';

    editUser(user, editModalTextValue, userFunction, dispatch);

    expect(dispatch).toHaveBeenCalled();
  });

  test('should call setArray removing one category from the array', () => {
    const categoryArray = [
      {
        uniqueKey: 'string',
      },
      {
        uniqueKey: 'dont match',
      },
    ];
    const valueId = 'string';
    const setArrayFunction = jest.fn();

    deleteListValue(categoryArray, valueId, setArrayFunction);

    expect(setArrayFunction).toHaveBeenCalled();
  });
});

import axios from 'axios';
import actionTypes from './actionTypes';

const userUrl = 'http://192.168.0.17:2000/user';

export function addMenuToDBSuccess(menu: Object) {
  return {
    type: actionTypes.ADD_MENU_TO_USER,
    menu,
  };
}

export default function addMenuToDB(user: Object) {
  return async (dispatch: (arg0: { type: string; menu: object; }) => void) => {
    try {
      const { data } = await axios.put(`${userUrl}/menu`, { user });
      dispatch(addMenuToDBSuccess(data));
    } catch (error) {
      console.log(error);
    }
  };
}

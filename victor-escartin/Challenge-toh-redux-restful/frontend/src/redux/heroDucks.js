import axios from "axios";

// constantes
const dataInicial = {
  array: [],
  offset: 0,
};

//types
const GET_HEROES_SUCCESS = "GET_HEROES_SUCCESS";

//reducer
export default function heroReducer(state = dataInicial, action) {
  switch (action.type) {
    case GET_HEROES_SUCCESS:
      return { ...state, array: action.payload };
    default:
      return state;
  }
}

//acciones
export const getHeroesSuccess = () => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:3000/api/heroes/`);
    debugger;
    dispatch({
      type: GET_HEROES_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

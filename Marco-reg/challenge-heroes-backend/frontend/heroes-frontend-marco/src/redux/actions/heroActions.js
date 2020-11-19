import axios from 'axios';
import heroeRoutes from '../../../../../backend/routes/heroeRoutes';
import actionTypes from './actiontypes';

function loadHeroesSuccess(heroes){
    return{
        type:actionTypes.LOAD_HEROES,
        payload:heroeRoutes,
    }
}


export default const loadHeroes=()=> async (dispatch)=>{
    const URL='http://localhost:3020';

    try{
        const loadHero=await axios.get(URL);
        dispatch(loadHeroesSuccess(coinListResponse.data));

    }catch(error){
       console.log((error));
    }
};
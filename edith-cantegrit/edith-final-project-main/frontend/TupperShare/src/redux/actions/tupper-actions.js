import axios from 'axios';
import actionTypes from './action-types';


function loadTupperListSuccess(tupperList) {
  return {
      type: actionTypes.LOAD_TUPPERS,
      tupperList
  }

}

function loadTupperListError(errorList) {
  return {
      type: actionTypes.LIST_ERROR,
      errorList
  }
}

function loadTupperDetailSuccess(tupperDetail) {
  return {
      type: actionTypes.LOAD_TUPPER,
      tupperDetail
  }

}

function loadTupperDetailError(errorDetail) {
  return {
      type: actionTypes.DETAIL_ERROR,
      errorDetail
  }
}

export function loadTuppers() {
  return async(dispatch) => {
  const endpointList = 'http://localhost:5200/tupper/';
      try {
          const list = await axios.get(endpointList); 
          dispatch(loadTupperListSuccess(list.data)) 
      } catch(error){
          dispatch(loadTupperListError(error))
      } 
  }
}



export function loadTupperById(tupperId) {
  return async(dispatch) => {
  const endpointItem = `http://localhost:5200/tupper/${tupperId}`;
    try {
      const detail = await axios.get(endpointItem); 
      dispatch(loadTupperDetailSuccess(detail.data)) 
    } catch(error){
      dispatch(loadTupperDetailError(error))
    } 
  }
}




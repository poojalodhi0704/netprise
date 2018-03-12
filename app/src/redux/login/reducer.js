import { Map } from 'immutable';
import {LOGIN, LOGOUT,LOGIN_SUCCESS,LOGIN_ERROR} from './constants';
import { getToken } from '../../helpers/utility';

const initState = new Map({
  access_token:''
});

export default (state=initState.merge(),action) => {
  switch(action.type){
    case LOGIN_SUCCESS:
    return {...state,
            access_token: action.access_token};
   
    
    case LOGIN_ERROR:
    return {...state,error:action.error};
    case LOGOUT:
    return initState;
    
    default:
    return state;
  }
};

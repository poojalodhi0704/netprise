import { all, takeEvery, put, fork, take,call } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { clearToken } from '../../helpers/utility';

import {LOGIN ,LOGOUT,LOGIN_SUCCESS,LOGIN_ERROR,LOGIN_REQUEST,GUEST_LOGIN_REQUEST,GUEST_LOGIN_SUCCESS} from './constants';
import appUrl from '../../config';


let access_token;
export const authApi = {
  register(authData){
    if(authData){
      access_token ="token";
    }
  }
    
};
export function* loginRequest() {
  
  try{
     
     if(authApi){
        yield put({ type: LOGIN_SUCCESS,
                    access_token:authApi.access_token});
      }
    }catch(error){
      yield put({ type: LOGIN_ERROR });

     }

  }




export function* loginSuccess(){
  
  yield takeEvery(LOGIN_SUCCESS, function*(payload){
  
    yield localStorage.setItem('access_token',payload.access_token);
   
  });
}

export function* loginError(){
  yield takeEvery(LOGIN_ERROR, function*(){});
}
export function* logout(){
  yield takeEvery(LOGOUT,function*(){
      clearToken();
    yield put(push('/'));
  });
}


export default function* rootSaga() {
  yield all([
    fork(loginRequest),
    fork(loginSuccess),
    fork(loginError),
    fork(logout),
    
   ]);
}

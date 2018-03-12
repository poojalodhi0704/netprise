import {LOGIN_REQUEST,LOGIN_SUCCESS, LOGOUT} from './constants';


export  const login = (userName,password) => ({type:LOGIN_SUCCESS,
                                            userName:userName,
                                            password:password
                                          });

export const logout = () => ({type:LOGOUT});



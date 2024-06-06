// authAction.js
import axios from 'axios';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAIL = 'GET_USER_FAIL';
 
export const LOGOUT = 'LOGOUT';

const API_URL = 'http://localhost:8080/api/users/';
                                                                                            
export const register = (name, email, password) => async dispatch => {
  try {
    const response = await axios.post(`${API_URL}signUp`, { name, email, password });
    dispatch({ type: REGISTER_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: REGISTER_FAIL });
  }
};

export const login = (email, password) => async dispatch => {
  try {
    const response = await axios.post(`${API_URL}signIn`, { email, password });
    dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    localStorage.setItem('token', response.data.token);
  } catch (error) {
    dispatch({ type: LOGIN_FAIL });
  }
};

export const logout = () => dispatch => {
  localStorage.removeItem('token');
  dispatch({ type: LOGOUT });
};

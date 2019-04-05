import { LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS, CHANGE_LOGIN_FORM } from './constants';

export const loginRequest = form => ({
  type: LOGIN_REQUEST,
  form,
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const loginFailure = error => ({
  type: LOGIN_FAILURE,
  error,
});

export const loginChangeForm = form => ({
  type: CHANGE_LOGIN_FORM,
  form,
});

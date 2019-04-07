import { CHANGE_INFO_REQUEST, CHANGE_INFO_SUCCESS, CHANGE_INFO_FAILURE } from './constants';

export const changeInfoRequest = payload => ({
  type: CHANGE_INFO_REQUEST,
  payload,
});

export const changeInfoSuccess = () => ({
  type: CHANGE_INFO_SUCCESS,
});

export const changeInfoFailure = error => ({
  type: CHANGE_INFO_FAILURE,
  error,
});

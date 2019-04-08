import {
  CHANGE_INFO_REQUEST,
  CHANGE_INFO_SUCCESS,
  CHANGE_INFO_FAILURE,
  UPLOAD_IMAGE_REQUEST,
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_FAILURE,
} from './constants';

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

export const uploadImageRequest = file => ({
  type: UPLOAD_IMAGE_REQUEST,
  file,
});

export const uploadImageSuccess = () => ({
  type: UPLOAD_IMAGE_SUCCESS,
});

export const uploadImageFailure = error => ({
  type: UPLOAD_IMAGE_FAILURE,
  error,
});

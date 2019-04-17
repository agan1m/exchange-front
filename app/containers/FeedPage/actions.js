import {
  FEED_LIST_REQUEST,
  FEED_LIST_SUCCESS,
  FEED_LIST_FAILURE,
  FEED_FORM_CHANGE,
  FEED_FORM_CLEAR,
  FEED_CREATE_REQUEST,
  FEED_CREATE_SUCCESS,
  FEED_CREATE_FAILURE,
} from './constants';

export const feedListRequest = () => ({
  type: FEED_LIST_REQUEST,
});

export const feedListSuccess = payload => ({
  type: FEED_LIST_SUCCESS,
  payload,
});

export const feedListFailure = error => ({
  type: FEED_LIST_FAILURE,
  error,
});

export const feedFormChange = form => ({
  type: FEED_FORM_CHANGE,
  form,
});

export const feedFormClear = () => ({
  type: FEED_FORM_CLEAR,
});

export const feedCreateRequest = form => ({
  type: FEED_CREATE_REQUEST,
  form,
});

export const feedCreateSuccess = () => ({
  type: FEED_CREATE_SUCCESS,
});

export const feedCreateFailure = error => ({
  type: FEED_CREATE_FAILURE,
  error,
});

import { FEED_LIST_REQUEST, FEED_LIST_SUCCESS, FEED_LIST_FAILURE } from './constants';

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
import { call, put, takeLatest } from 'redux-saga/effects';
import { FEED_LIST_REQUEST, FEED_CREATE_REQUEST } from './constants';
import ApiService from '../../services/feeds';
import { feedListSuccess, feedListFailure } from './actions';

export default function* feedSagaFlow() {
  yield takeLatest(FEED_LIST_REQUEST, feedSaga);
  yield takeLatest(FEED_CREATE_REQUEST, feedCreateSaga);
}

function* feedSaga() {
  try {
    const response = yield call(ApiService.getPosts);
    if (response.isSuccess) {
      yield put(feedListSuccess(response.data));
    } else {
      yield put(feedListFailure(response.message));
    }
  } catch (error) {
    yield put(feedListFailure('Что-то пошло не так'));
  }
}

function* feedCreateSaga(action) {
  try {
    const response = yield call(ApiService.createPost, action.form);
    if (response.isSuccess) {
      yield call(feedSaga);
    } else {
      yield put(feedListFailure(response.message));
    }
  } catch (error) {
    yield put(feedListFailure('Что-то пошло не так'));
  }
}

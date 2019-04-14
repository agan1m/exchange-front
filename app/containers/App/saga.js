import { call, takeLatest } from 'redux-saga/effects';
import history from 'apphistory';
import { LOGOUT } from '../NavContainer/constants';
import ApiService from '../../services/auth';
import auth from '../../utils/auth';

export default function* appSagaFlow() {
  yield takeLatest(LOGOUT, appSaga);
}

function* appSaga() {
  try {
    const response = yield call(ApiService.logout);
    if (response.isSuccess) {
      yield call(auth.clearAppStorage);
      yield call(history.push, '/login');
    }
  } catch (error) {
    window.console.error(error);
  }
}

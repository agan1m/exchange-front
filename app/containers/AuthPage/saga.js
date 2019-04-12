import { call, put, takeLatest } from 'redux-saga/effects';
import history from 'apphistory';
import auth from '../../utils/auth';
import { LOGIN_REQUEST } from './constants';
import ApiService from '../../services/auth';
import { loginFailure, loginSuccess } from './actions';
import { setUser } from '../App/actions';

export default function* loginSagaFlow() {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
}

function* loginSaga(action) {
  try {
    const response = yield call(ApiService.login, action.form);
    if (response.isSuccess) {
      auth.setToken(response.data.token);
      yield put(loginSuccess());
      yield put(setUser({ user: response.data.user, bill: response.data.bill }));
      history.push('/home');
    } else {
      yield put(loginFailure(response.message));
    }
  } catch (error) {
    yield put(loginFailure('Что-то пошло не так'));
  }
}

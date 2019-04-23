import { call, put, takeLatest } from 'redux-saga/effects';
import history from 'apphistory';
import { REGISTRATION_REQUEST } from './constants';
import ApiService from '../../services/auth';
import { registrationFailure, registrationSuccess } from './actions';
import auth from '../../utils/auth';
import { setUser } from '../App/actions';

export default function* registrationSagaFlow() {
  yield takeLatest(REGISTRATION_REQUEST, registrationSaga);
}

function* registrationSaga(action) {
  try {
    const response = yield call(ApiService.registration, action.form);
    if (response.isSuccess) {
      auth.setToken(response.data.token);
      yield put(registrationSuccess());
      yield put(setUser({ user: response.data.user, bill: response.data.bill }));
      history.push('/trade');
    } else {
      yield put(registrationFailure(response.message));
    }
  } catch (error) {
    yield put(registrationFailure('Что-то пошло не так'));
  }
}

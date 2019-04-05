import { call, put, takeLatest } from 'redux-saga/effects';
import history from 'apphistory';
import { REGISTRATION_REQUEST } from './constants';
import ApiService from '../../services/auth';
import { registrationFailure, registrationSuccess } from './actions';

export default function* registrationSagaFlow() {
  yield takeLatest(REGISTRATION_REQUEST, registrationSaga);
}

function* registrationSaga(action) {
  try {
    const response = yield call(ApiService.registration, action.form);
    if (response.success) {
      yield put(registrationSuccess());
      history.push('/');
    } else {
      yield put(registrationFailure(response.message));
    }
  } catch (error) {
    yield put(registrationFailure('Что-то пошло не так'));
  }
}

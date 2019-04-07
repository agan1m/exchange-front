import { call, put, takeLatest } from 'redux-saga/effects';
import { CHANGE_INFO_REQUEST } from './constants';
import ApiService from '../../services/profile';
import { changeInfoFailure, changeInfoSuccess } from './actions';

export default function* profileSagaFlow() {
  yield takeLatest(CHANGE_INFO_REQUEST, profileSaga);
}

function* profileSaga(action) {
  try {
    const response = yield call(ApiService.changeInfo, action.payload);
    if (response.isSuccess) {
      yield put(changeInfoSuccess());
    } else {
      yield put(changeInfoFailure(response.message));
    }
  } catch (error) {
    yield put(changeInfoFailure('Что-то пошло не так'));
  }
}

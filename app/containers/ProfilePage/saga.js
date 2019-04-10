import { call, put, takeLatest } from 'redux-saga/effects';
import { CHANGE_INFO_REQUEST, UPLOAD_IMAGE_REQUEST } from './constants';
import ApiService from '../../services/profile';
import { changeInfoFailure, changeInfoSuccess, uploadImageSuccess, uploadImageFailure } from './actions';
import { setUser } from '../App/actions';

export default function* profileSagaFlow() {
  yield takeLatest(CHANGE_INFO_REQUEST, profileSaga);
  yield takeLatest(UPLOAD_IMAGE_REQUEST, uploadImageSaga);
}

function* profileSaga(action) {
  try {
    const response = yield call(ApiService.changeInfo, action.payload);
    if (response.isSuccess) {
      yield put(changeInfoSuccess());
      yield put(setUser(response.data));
    } else {
      yield put(changeInfoFailure(response.message));
    }
  } catch (error) {
    yield put(changeInfoFailure('Что-то пошло не так'));
  }
}

function* uploadImageSaga(action) {
  try {
    const response = yield call(ApiService.uploadImage, action.file);
    if (response.isSuccess) {
      yield put(uploadImageSuccess());
      yield put(setUser(response.data));
    } else {
      yield put(uploadImageFailure(response.message));
    }
  } catch (error) {
    yield put(uploadImageFailure());
  }
}

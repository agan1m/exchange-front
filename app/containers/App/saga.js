/* eslint-disable */
import { call, put, takeLatest } from 'redux-saga/effects';
import history from 'apphistory';


export default function* offerSagaFlow() {
  yield takeLatest('CHANGE_WORKSPACE_REQUEST', changeWorkSpaceSaga);
}

function* changeWorkSpaceSaga(action) {}

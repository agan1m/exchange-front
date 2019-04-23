import { eventChannel } from 'redux-saga';
import { call, takeLatest, put, take } from 'redux-saga/effects';
import { SOCKET_CONNECT } from './constants';
import ApiService from '../../services/notifications';
import { newPost } from './actions';

export default function* socketSagaFlow() {
  yield takeLatest(SOCKET_CONNECT, socketSaga);
}

function createSocketChannel(socket) {
  return eventChannel(emit => {
    const pingHandler = event => {
      emit(newPost(event));
    };

    const errorHandler = errorEvent => {
      console.log(errorEvent);
      emit(new Error(errorEvent.reason));
    };

    socket.on('newPost', pingHandler);
    socket.on('error', errorHandler);

    const unsubscribe = () => {
      socket.on('disconnected', pingHandler);
    };

    return unsubscribe;
  });
}

function* socketSaga() {
  try {
    const socket = yield call(ApiService.openSocket);
    const socketChannel = yield call(createSocketChannel, socket);
    while (true) {
      const { payload } = yield take(socketChannel);
      console.log(payload);
      yield put(newPost(payload));
    }
  } catch (error) {
    window.console.error(error);
  }
}

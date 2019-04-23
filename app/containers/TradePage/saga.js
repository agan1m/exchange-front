import { call, takeLatest, put } from 'redux-saga/effects';
import { TRADES_LIST_REQUEST, TRADE_OPERATION_REQUEST } from './constants';
import ApiService from '../../services/trade';
import { tradeListSuccess, tradeListFailure, tradeOperationFailure, tradeOperationSuccess } from './actions';

export default function* tradeSagaFlow() {
  yield takeLatest(TRADES_LIST_REQUEST, tradeSaga);
  yield takeLatest(TRADE_OPERATION_REQUEST, tradeOperationSaga);
}

function* tradeSaga() {
  try {
    const response = yield call(ApiService.getTradeList);
    if (response.isSuccess) {
      yield put(tradeListSuccess(response.data));
    } else {
      yield put(tradeListFailure(response.message));
    }
  } catch (error) {
    window.console.error(error);
    yield put(tradeListFailure('Что-то пошло не так'));
  }
}

function* tradeOperationSaga(action) {
  try {
    if (action.payload.operationType === 'buy') {
      const response = yield call(ApiService.tradeBuy, action.payload.form);
      if (response.isSuccess) {
        yield put(tradeOperationSuccess());
        yield call(tradeSaga);
      } else {
        yield put(tradeOperationFailure(response.message));
      }
    }
    if (action.payload.operationType === 'sell') {
      const response = yield call(ApiService.tradeSell, action.payload.form);
      if (response.isSuccess) {
        yield put(tradeOperationSuccess());
        yield call(tradeSaga);
      } else {
        yield put(tradeOperationFailure(response.message));
      }
    }
  } catch (error) {
    window.console.error(error);
    yield put(tradeOperationFailure('Что-то пошло не так'));
  }
}

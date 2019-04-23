import {
  TRADES_LIST_REQUEST,
  TRADES_LIST_SUCCESS,
  TRADES_LIST_FAILURE,
  TRADE_OPERATION_REQUEST,
  TRADE_OPERATION_SUCCESS,
  TRADE_OPERATION_FAILURE,
} from './constants';

export const tradeListRequest = () => ({
  type: TRADES_LIST_REQUEST,
});

export const tradeListSuccess = payload => ({
  type: TRADES_LIST_SUCCESS,
  payload,
});

export const tradeListFailure = error => ({
  TRADES_LIST_FAILURE,
  error,
});

export const tradeOperationRequest = payload => ({
  type: TRADE_OPERATION_REQUEST,
  payload,
});

export const tradeOperationSuccess = () => ({
  type: TRADE_OPERATION_SUCCESS,
});

export const tradeOperationFailure = error => ({
  type: TRADE_OPERATION_FAILURE,
  error,
});

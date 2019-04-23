import { fromJS } from 'immutable';
import { TRADES_LIST_REQUEST, TRADES_LIST_SUCCESS, TRADES_LIST_FAILURE } from './constants';

export const initialState = fromJS({
  loading: false,
  error: false,
  trades: [],
});

function tradeReducer(state = initialState, action) {
  switch (action.type) {
    case TRADES_LIST_REQUEST:
      return state.set('loading', true);
    case TRADES_LIST_SUCCESS:
      return state.set('loading', false).set('trades', action.payload);
    case TRADES_LIST_FAILURE:
      return state.set('loading', false).set('trades', action.error);
    default:
      return state;
  }
}

export default tradeReducer;

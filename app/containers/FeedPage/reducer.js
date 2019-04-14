import { fromJS } from 'immutable';
import { FEED_LIST_SUCCESS, FEED_LIST_REQUEST, FEED_LIST_FAILURE } from './constants';

export const initialState = fromJS({
  loading: false,
  error: false,
  feeds: [
    {
      id: 1,
    },
  ],
});

function feedReducer(state = initialState, action) {
  switch (action.type) {
    case FEED_LIST_REQUEST:
      return state.set('loading', true);
    case FEED_LIST_SUCCESS:
      return state.set('loading', false).set('feeds', fromJS(action.payload));
    case FEED_LIST_FAILURE:
      return state.set('loading', false).set('error', action.error);
    default:
      return state;
  }
}

export default feedReducer;

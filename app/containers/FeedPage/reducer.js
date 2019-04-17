import { fromJS } from 'immutable';
import {
  FEED_LIST_SUCCESS,
  FEED_LIST_REQUEST,
  FEED_LIST_FAILURE,
  FEED_FORM_CHANGE,
  FEED_FORM_CLEAR,
} from './constants';

export const initialState = fromJS({
  loading: false,
  error: false,
  feeds: [],
  feedForm: {
    title: '',
    content: '',
  },
});

function feedReducer(state = initialState, action) {
  switch (action.type) {
    case FEED_LIST_REQUEST:
      return state.set('loading', true);
    case FEED_LIST_SUCCESS:
      return state.set('loading', false).set('feeds', fromJS(action.payload));
    case FEED_LIST_FAILURE:
      return state.set('loading', false).set('error', action.error);
    case FEED_FORM_CHANGE:
      return state.set('feedForm', fromJS(action.form));
    case FEED_FORM_CLEAR:
      return initialState;
    default:
      return state;
  }
}

export default feedReducer;

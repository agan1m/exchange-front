import { fromJS } from 'immutable';
import { CHANGE_INFO_REQUEST, CHANGE_INFO_SUCCESS, CHANGE_INFO_FAILURE } from './constants';

export const initialState = fromJS({
  loading: false,
  error: false,
});

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INFO_REQUEST:
      return state.set('loading', true);
    case CHANGE_INFO_SUCCESS:
      return state.set('loading', false);
    case CHANGE_INFO_FAILURE:
      return state.set('loading', false).set('error', action.error);
    default:
      return state;
  }
}

export default profileReducer;

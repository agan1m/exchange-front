/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, CHANGE_LOGIN_FORM } from './constants';

// The initial state of the App
export const initialState = fromJS({
  loading: false,
  error: false,
  regForm: {
    email: '',
    password: '',
  },
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return state.set('loading', true);
    case LOGIN_SUCCESS:
      return state.set('loading', false);
    case LOGIN_FAILURE:
      return state.set('loading', false).set('error', action.error);
    case CHANGE_LOGIN_FORM:
      return state.set('regForm', fromJS(action.form));
    default:
      return state;
  }
}

export default loginReducer;

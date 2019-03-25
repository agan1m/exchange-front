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
import {
  REGISTRATION_FAILURE,
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  CHANGE_REGISTRATION_FORM,
} from './constants';

// The initial state of the App
export const initialState = fromJS({
  loading: false,
  error: false,
  regForm: {
    email: '',
    password: '',
  },
});

function registrationReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTRATION_REQUEST:
      return state.set('loading', true);
    case REGISTRATION_SUCCESS:
      return state.set('loading', false);
    case REGISTRATION_FAILURE:
      return state.set('loading', false).set('error', action.error);
    case CHANGE_REGISTRATION_FORM:
      return state.set('regForm', fromJS(action.form));
    default:
      return state;
  }
}

export default registrationReducer;

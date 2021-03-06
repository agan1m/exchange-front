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
import { SET_USER } from './constants';
import { LOGOUT } from '../NavContainer/constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  user: {},
  bill: {},
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return state
        .set('user', action.payload.user)
        .set('bill', action.payload.bill ? action.payload.bill : state.get('bill'));
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}

export default appReducer;

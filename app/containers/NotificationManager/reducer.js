import { fromJS } from 'immutable';

// The initial state of the App
export const initialState = fromJS({
  loading: false,
  error: false,
});

function navReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default navReducer;

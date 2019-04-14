import { fromJS } from 'immutable';

export const initialState = fromJS({
  loading: false,
  error: false,
});

function tradeReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default tradeReducer;

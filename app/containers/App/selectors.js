import { createSelector } from 'reselect';

const selectGlobal = state => state.get('global');

const makeSelectCurrentUser = () => createSelector(selectGlobal, state => state.get('user'));

export default selectGlobal;
export { makeSelectCurrentUser };

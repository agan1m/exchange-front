import { createSelector } from 'reselect';

const selectGlobal = state => state.get('global');

const makeSelectCurrentUser = () => createSelector(selectGlobal, state => state.get('user'));
const makeSelectBill = () => createSelector(selectGlobal, state => state.get('bill'));

export default selectGlobal;
export { makeSelectCurrentUser, makeSelectBill };

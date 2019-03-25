import { createSelector } from 'reselect';

const selectGlobal = state => state.get('global');

export const makeSelectCurrentUser = () =>
  createSelector(selectGlobal, state => state.get('currentUser'));

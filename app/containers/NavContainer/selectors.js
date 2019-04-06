import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectNavDomain = state => state.get('navContainer', initialState);

const makeSelectNav = () => createSelector(selectNavDomain, substate => substate.toJS());

export default selectNavDomain;
export { makeSelectNav };

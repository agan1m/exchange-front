import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectLoginPageDomain = state => state.get('loginPage', initialState);

const makeSelectLoginPage = () => createSelector(selectLoginPageDomain, substate => substate.toJS());

export default selectLoginPageDomain;
export { makeSelectLoginPage };

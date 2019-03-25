import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectRegistrationPageDomain = state =>
  state.get('registrationPage', initialState);

const makeSelectRegistrationPage = () =>
  createSelector(selectRegistrationPageDomain, substate => substate.toJS());

export default selectRegistrationPageDomain;
export { makeSelectRegistrationPage };

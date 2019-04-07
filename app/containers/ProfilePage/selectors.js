import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectProfileDomain = state => state.get('profilePage', initialState);

const makeSelectProfilePage = () => createSelector(selectProfileDomain, substate => substate.toJS());

export default selectProfileDomain;
export { makeSelectProfilePage };

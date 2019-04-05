import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHomePageDomain = state => state.get('homePage', initialState);

const makeSelectHomePage = () => createSelector(selectHomePageDomain, substate => substate.toJS());

export default selectHomePageDomain;
export { makeSelectHomePage };

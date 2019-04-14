import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectFeedPageDomain = state => state.get('feedPage', initialState);

const makeSelectFeedPage = () => createSelector(selectFeedPageDomain, substate => substate.toJS());

export default selectFeedPageDomain;
export { makeSelectFeedPage };

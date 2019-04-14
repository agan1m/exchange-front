import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectTradePageDomain = state => state.get('tradePage', initialState);

const makeSelectTradePage = () => createSelector(selectTradePageDomain, substate => substate.toJS());

export default selectTradePageDomain;
export { makeSelectTradePage };

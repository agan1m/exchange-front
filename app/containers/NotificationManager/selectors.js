import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectNotificationDomain = state => state.get('notificationManager', initialState);

const makeSelectNotificationManager = () => createSelector(selectNotificationDomain, substate => substate.toJS());

export default selectNotificationDomain;
export { makeSelectNotificationManager };

import { LOGOUT, SELECT_ITEM_MENU } from './constants';

export const logOut = () => ({
  type: LOGOUT,
});

export const selectNavItem = payload => ({
  type: SELECT_ITEM_MENU,
  payload,
});

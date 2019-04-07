import { fromJS } from 'immutable';

// The initial state of the App
export const initialState = fromJS({
  loading: false,
  error: false,
  menu: [
    { name: 'Главная', link: '/' },
    { name: 'Торги', link: '/trade' },
    { name: 'Лента', link: '/feed' },
    { name: 'Профиль', link: '/profile' },
  ],
});

function navReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default navReducer;

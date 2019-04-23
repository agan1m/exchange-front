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
  selectItem: {},
});

function navReducer(state = initialState, action) {
  switch (action.type) {
    case '@@router/LOCATION_CHANGE':
      return state.set(
        'selectItem',
        fromJS(
          state
            .get('menu')
            .toJS()
            .find(item => item.link === action.payload.location.pathname),
        ),
      );
    default:
      return state;
  }
}

export default navReducer;

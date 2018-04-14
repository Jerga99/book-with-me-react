export const INITIAL_STATE = {
  rentals: {
    isFetching: false,
    items: [],
    isSearch: false,
    searchCity: ''
  },
  rental: {
    item: {},
    isFetching: false
  },
  auth: {
    token: localStorage.getItem('auth_token') || "",
    registered: false,
    errors: [],
    isAuth: false
  }
}

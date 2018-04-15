export const INITIAL_STATE = {
  rentals: {
    items: [],
    isFetching: false,
    isSearch: false,
    searchCity: '',
    errors: []
  },
  rental: {
    item: {},
    isFetching: false
  },
  auth: {
    token: "",
    registered: false,
    errors: [],
    isAuth: false
  }
}

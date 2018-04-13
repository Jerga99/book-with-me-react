export const INITIAL_STATE = {
  rentals: [],
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

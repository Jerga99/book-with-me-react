import { Axios } from '../services/axios';
import { RECIEVE_RENTALS,
         RECIEVE_SELECTED_RENTAL,
         REQUEST_SELECTED_RENTAL,
         REGISTER_SUCCESS,
         REGISTER_FAILURE,
         LOGIN_SUCCESS,
         LOGIN_FAILURE,
         LOGOUT_USER,
         FETCH_RENTALS_FAILURE,
         REQUEST_RENTALS_SEARCH,
         CREATE_BOOKING,
         REQUEST_RENTALS,
         REQUEST_BOOKING,
         BOOKING_SUCCESS,
         BOOKING_FAILURE} from './types';

const axiosService = Axios.init();

// BOOKINGS

const bookingFailure = (errors) => {
  return {
    type: BOOKING_FAILURE,
    errors
  }
}


const bookingSuccess = (booking) => {
  return {
    type: BOOKING_SUCCESS,
    booking
  }
}

const requestBooking = () => {
  return {
    type: REQUEST_BOOKING
  }
}

export const createBooking = (booking) => {
  return {
    type: CREATE_BOOKING,
    booking
  }
}

export const bookPlace = (booking) => {
  return dispatch => {
    dispatch(requestBooking);
    return axiosService.post('/bookings', booking)
      .then(res => res.data)
      .then(booking => dispatch(bookingSuccess(booking)))
      .catch(({response}) => dispatch(bookingFailure(response.data.errors)))
  }
}

// RENTALS ACTIONS

const recieveRentals = (rentals) => {
  return {
    type: RECIEVE_RENTALS,
    rentals: rentals
  }
}

const recieveSelectedRental = (rental) => {
  return {
    type: RECIEVE_SELECTED_RENTAL,
    selectedRental: rental
  }
}

const requestRentalById = () => {
  return {
    type: REQUEST_SELECTED_RENTAL
  }
}

const fetchRentalsFailure = (errors) => {
  return {
    type: FETCH_RENTALS_FAILURE,
    errors
  }
}

const requestRentalsWithSearch = (city) => {
  return {
    type: REQUEST_RENTALS_SEARCH,
    city: city
  }
}

const requestRentals = () => {
  return {
    type: REQUEST_RENTALS
  }
}

export const fetchRentalByid = (rentalId) => {
  return dispatch => {
    dispatch(requestRentalById());
    return axiosService.get(`/rentals/${rentalId}`)
      .then(res => res.data)
      .then(rental => dispatch(recieveSelectedRental(rental)))
  }
}

export const fetchRentalsByCity = (city) => {
  const url = `/rentals?city=${city.toLowerCase()}`

  return dispatch => {
    dispatch(requestRentalsWithSearch(city))
    getRentals(url, dispatch);
  }
}

export const fetchRentals = (city) => {
  const url = '/rentals';

  return dispatch => {
    dispatch(requestRentals());
    getRentals(url, dispatch);
  }
};

// AUTH ACTIONS - REGISTER

const registerSuccess = (data) => {
  return {
    type: REGISTER_SUCCESS,
    registered: true
  }
}

const registerFailure = (errors) => {
  return {
    type: REGISTER_FAILURE,
    errors
  }
}

export const register = (userData) => {
  return dispatch => {
    return axiosService.post('/users', {...userData})
      .then(res => dispatch(registerSuccess(res.data)))
      .catch(({response}) => dispatch(registerFailure(response.data.errors)))
  }
}

// AUTH ACTIONS - LOGIN

const loginFailure = (errors) => {
  return {
    type: LOGIN_FAILURE,
    errors
  }
}

export const loginSuccess = (token) => {
  return {
    type: LOGIN_SUCCESS,
    token: token
  }
}

export const logout = () => {
  localStorage.removeItem('auth_token');
  Axios.removeAuth();

  return {
    type: LOGOUT_USER
  }
}

export const login = (userData) => {
  return dispatch => {
    return axiosService.post('/auth', {...userData})
      .then(res => res.data.token)
      .then(token => {
        localStorage.setItem('auth_token', token);
        Axios.setAuth();
        dispatch(loginSuccess(token));
      })
      .catch(({response}) => dispatch(loginFailure(response.data.errors)))
  }
}


function getRentals(url, dispatch) {
  return axiosService.get(url)
    .then(res => res.data)
    .then(rentals => dispatch(recieveRentals(rentals)))
    .catch(({response}) => dispatch(fetchRentalsFailure(response.data.errors)))
}


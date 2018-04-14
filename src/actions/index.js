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
         REQUEST_RENTALS } from './types';

const axiosService = Axios.init();

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

export const fetchRentals = (city) => {
  const url = city ? `/rentals?city=${city}` : '/rentals';

  return dispatch => {
    (city) ? dispatch(requestRentalsWithSearch(city)) : dispatch(requestRentals());

    return axiosService.get(url)
      .then(res => res.data)
      .then(rentals => dispatch(recieveRentals(rentals)))
      .catch(({response}) => dispatch(fetchRentalsFailure(response.data.errors)))
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
        dispatch(loginSuccess(token));
      })
      .catch(({response}) => dispatch(loginFailure(response.data.errors)))
  }
}


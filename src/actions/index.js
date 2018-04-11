import { Axios } from '../services/axios';
import { RECIEVE_RENTALS,
         RECIEVE_SELECTED_RENTAL,
         REQUEST_SELECTED_RENTAL } from './types';

const axiosService = Axios.init();

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

export const fetchRentalByid = (rentalId) => {
  return dispatch => {
    dispatch(requestRentalById());
    return axiosService.get(`/rentals/${rentalId}`)
      .then(res => res.data)
      .then(rental => dispatch(recieveSelectedRental(rental)))
  }
}

export const fetchRentals = () => {
  return dispatch => {
    return axiosService.get('/rentals')
      .then(res => res.data)
      .then(rentals => dispatch(recieveRentals(rentals)))
  }
};

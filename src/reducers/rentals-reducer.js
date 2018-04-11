import { RECIEVE_RENTALS, RECIEVE_SELECTED_RENTAL, REQUEST_SELECTED_RENTAL} from '../actions/types';
import { INITIAL_STATE } from './initial-state';

export const rentalsReducer = (state = INITIAL_STATE.rentals, action) => {
  switch(action.type){
    case RECIEVE_RENTALS:
      return action.rentals;
    default:
      return state;
  }
};

export const selectedRentalReducer = (state = INITIAL_STATE.rental, action) => {
  switch(action.type) {
    case REQUEST_SELECTED_RENTAL:
      return Object.assign({}, state, {isFetching: true});
    case RECIEVE_SELECTED_RENTAL:
      return Object.assign({}, state, {isFetching: false, item: action.selectedRental});
    default:
      return state;
  }
}

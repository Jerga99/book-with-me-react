import * as redux from 'redux';
import thunk from 'redux-thunk';
import { rentalsReducer, selectedRentalReducer } from './rentals-reducer';

export const init = () => {
  const reducer = redux.combineReducers({
    rentals: rentalsReducer,
    selectedRental: selectedRentalReducer
  });
  const store = redux.createStore(reducer, redux.applyMiddleware(thunk));

  return store;
};

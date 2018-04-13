import { REGISTER_SUCCESS, REGISTER_FAILURE} from '../actions/types';
import { INITIAL_STATE } from './initial-state';

export const authReducer = (state = INITIAL_STATE.auth, action) => {
  switch(action.type){
    case REGISTER_SUCCESS:
      return Object.assign({}, state, {registered: true})
    case REGISTER_FAILURE:
      return Object.assign({}, state, {registered: false, errors: action.errors})
    default:
      return state;
  }
};

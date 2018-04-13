import { REGISTER_SUCCESS,
         REGISTER_FAILURE,
         LOGIN_SUCCESS,
         LOGIN_FAILURE,
         RESET_AUTH_ERRORS} from '../actions/types';
import { INITIAL_STATE } from './initial-state';

export const authReducer = (state = INITIAL_STATE.auth, action) => {
  switch(action.type){
    case REGISTER_SUCCESS:
      return Object.assign({}, state, {registered: true});
    case REGISTER_FAILURE:
      return Object.assign({}, state, {errors: action.errors});
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {registered: true, isAuth: true, token: action.token})
    case LOGIN_FAILURE:
      return Object.assign({}, state, {errors: action.errors})
    case RESET_AUTH_ERRORS:
      return Object.assign({}, state, {errors: []})
    default:
      return state;
  }
};

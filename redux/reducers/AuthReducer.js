import {SIGNIN_USER_SUCCESS} from "../../constants/ActionTypes";

const INIT_STATE = {
  token: '',
};

const AuthReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SIGNIN_USER_SUCCESS: {
      return {
        ...state,
        token: action.payload
      }
    }
    default:
      return state;
  }
}

export default AuthReducer;

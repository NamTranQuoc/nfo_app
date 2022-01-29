import {SIGNIN_USER} from "../../constants/ActionTypes";

export const signInAction = (username, password) => {
  return {
    type: SIGNIN_USER,
    data: {
      username: username,
      password: password
    }
  }
}

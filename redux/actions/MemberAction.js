import {SIGNIN_USER, SIGNUP_USER} from "../../constants/ActionTypes";

export const signInAction = (username, password, navigation) => {
  return {
    type: SIGNIN_USER,
    data: {
      username: username,
      password: password,
      navigation: navigation
    }
  }
}

export const signUpAction = (name, email, navigation) => {
  return {
    type: SIGNUP_USER,
    data: {
      name: name,
      email: email,
      navigation: navigation
    }
  }
}

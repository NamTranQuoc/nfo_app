import {SIGNUP_USER} from "../../constants/ActionTypes";

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

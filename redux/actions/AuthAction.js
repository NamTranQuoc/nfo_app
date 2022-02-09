import {CHANGE_PASSWORD, LOGOUT, SIGNIN_USER} from "../../constants/ActionTypes";

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

export const logoutAction = () => {
  return {
    type: LOGOUT
  }
}

export const changePasswordAction = (oldPassword, newPassword, confirmPassword, navigation) => {
  return {
    type: CHANGE_PASSWORD,
    data: {
      oldPassword: oldPassword,
      newPassword: newPassword,
      confirmPassword: confirmPassword,
      navigation: navigation
    }
  }
}

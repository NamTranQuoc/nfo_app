import {GET_CURRENT_MEMBER, GET_CURRENT_MEMBER_SUCCESS, SIGNUP_USER} from "../../constants/ActionTypes";

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

export const getCurrentMember = () => {
  return {
    type: GET_CURRENT_MEMBER
  }
}

export const getCurrentMemberSuccess = (member) => {
  return {
    type: GET_CURRENT_MEMBER_SUCCESS,
    data: {
      member: member,
    }
  }
}

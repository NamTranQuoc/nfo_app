import {GET_CURRENT_MEMBER, GET_CURRENT_MEMBER_SUCCESS, SIGNUP_USER, UPDATE_MEMBER} from "../../constants/ActionTypes";

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

export const updateMemberAction = (name, phone_number, gender, avatar) => {
  return {
    type: UPDATE_MEMBER,
    data: {
      name: name,
      phone_number: phone_number,
      gender: gender,
      avatar: avatar
    }
  }
}

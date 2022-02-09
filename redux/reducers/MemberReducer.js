import {GET_CURRENT_MEMBER, GET_CURRENT_MEMBER_SUCCESS} from "../../constants/ActionTypes";

const INIT_STATE = {
  member: null,
};

const MemberReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_CURRENT_MEMBER_SUCCESS: {
      return {
        ...state,
        member: action.data.member
      }
    }
    case GET_CURRENT_MEMBER: {
      return {
        ...state,
        member: null
      }
    }
    default:
      return state;
  }
}

export default MemberReducer;

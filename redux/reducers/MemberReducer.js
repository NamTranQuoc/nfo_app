import {GET_CURRENT_MEMBER_SUCCESS} from "../../constants/ActionTypes";

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
    default:
      return state;
  }
}

export default MemberReducer;

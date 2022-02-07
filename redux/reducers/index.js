import {combineReducers} from 'redux';
import AuthReducer from "./AuthReducer";
import CommonReducer from "./CommonReducer";
import MemberReducer from "./MemberReducer";

const allReducers = combineReducers({
  auth: AuthReducer,
  common: CommonReducer,
  member: MemberReducer
});

export default allReducers;

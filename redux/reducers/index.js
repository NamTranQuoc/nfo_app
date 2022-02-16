import {combineReducers} from 'redux';
import AuthReducer from "./AuthReducer";
import CommonReducer from "./CommonReducer";
import MemberReducer from "./MemberReducer";
import CategoryReducer from "./CategoryReducer";

const allReducers = combineReducers({
  auth: AuthReducer,
  common: CommonReducer,
  member: MemberReducer,
  category: CategoryReducer,
});

export default allReducers;

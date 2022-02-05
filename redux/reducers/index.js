import {combineReducers} from 'redux';
import AuthReducer from "./AuthReducer";
import CommonReducer from "./CommonReducer";

const allReducers = combineReducers({
  auth: AuthReducer,
  common: CommonReducer,
});

export default allReducers;

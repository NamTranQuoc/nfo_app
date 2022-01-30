import {combineReducers} from 'redux';
import AuthReducer from "./AuthReducer";

const allReducers = combineReducers({
  auth: AuthReducer,
});

export default allReducers;

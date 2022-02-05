import {HIDE_LOADER, SHOW_LOADER} from "../../constants/ActionTypes";

const INIT_STATE = {
  showLoader: false,
};

const CommonReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SHOW_LOADER: {
      return {
        ...state,
        showLoader: true
      }
    }
    case HIDE_LOADER: {
      return {
        ...state,
        showLoader: false
      }
    }
    default:
      return state;
  }
}

export default CommonReducer;

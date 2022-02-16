import {GET_CATEGORIES_SUCCESS} from "../../constants/ActionTypes";

const INIT_STATE = {
  categories: [],
};

const CategoryReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_CATEGORIES_SUCCESS: {
      return {
        ...state,
        categories: action.data.categories
      }
    }
    default:
      return state;
  }
}

export default CategoryReducer;

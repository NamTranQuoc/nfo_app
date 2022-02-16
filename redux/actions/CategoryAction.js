import {GET_CATEGORIES, GET_CATEGORIES_SUCCESS} from "../../constants/ActionTypes";

export const getCategoriesAction = () => {
  return {
    type: GET_CATEGORIES,
  }
}

export const getCategoriesSuccessAction = (categories) => {
  return {
    type: GET_CATEGORIES_SUCCESS,
    data: {
      categories: categories,
    }
  }
}

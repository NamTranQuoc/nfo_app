import {HIDE_LOADER, SHOW_LOADER} from "../../constants/ActionTypes";

export const onShowLoader = () => {
  return {
    type: SHOW_LOADER
  }
}

export const onHideLoader = () => {
  return {
    type: HIDE_LOADER
  }
}

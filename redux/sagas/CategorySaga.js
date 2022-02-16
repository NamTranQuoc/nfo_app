import {GET_CATEGORIES, GET_CURRENT_MEMBER, SIGNUP_USER, UPDATE_MEMBER} from "../../constants/ActionTypes";
import {call, put, takeEvery} from "redux-saga/effects";
import axios from "axios";
import {HOST} from "../../constants/Common";
import {Alert} from "react-native";
import {onHideLoader, onShowLoader} from "../actions/CommonAction";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getCurrentMember, getCurrentMemberSuccess} from "../actions/MemberAction";
import {getCategoriesSuccessAction} from "../actions/CategoryAction";

const INSTRUCTOR_API_URL = `${HOST}/member`

//start sign up

export function* takeEveryGetCategories() {
  yield takeEvery(GET_CATEGORIES, getCategoriesGenerate);
}

function* getCategoriesGenerate() {
  try {
    yield put(onShowLoader());
    const response = yield call(getCategoriesRequest);
    if (response.status !== 200) {
      Alert.alert(response.status);
    } else if (response.data.code !== 9999) {
      Alert.alert(response.data.message);
    } else {
      yield put(getCategoriesSuccessAction(response.data.payload));
    }
  } catch (error) {
    Alert.alert(error);
  } finally {
    yield put(onHideLoader());
  }
}

const getCategoriesRequest = async () => {
  return await axios({
    method: "GET",
    url: `${INSTRUCTOR_API_URL}/get_all`,
  }).then(response => response)
      .catch(error => error)
}

//end sign up

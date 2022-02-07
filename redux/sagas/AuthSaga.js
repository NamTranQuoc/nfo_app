import {SIGNIN_USER} from "../../constants/ActionTypes";
import {call, put, takeEvery} from "redux-saga/effects";
import axios from "axios";
import {HOST} from "../../constants/Common";
import {Alert} from "react-native";
import {onHideLoader, onShowLoader} from "../actions/CommonAction";

const INSTRUCTOR_API_URL = `${HOST}/auth`

//start sign in

export function* takeEverySignIn() {
  yield takeEvery(SIGNIN_USER, SignInGenerate);
}

function* SignInGenerate({data}) {
  try {
    yield put(onShowLoader());
    const response = yield call(SignInRequest, data);
    if (response.status !== 200) {
      Alert.alert(response.status);
    } else if (response.data.code !== 9999) {
      Alert.alert(response.data.message);
    } else {
      data.navigation.navigate("Root");
    }
  } catch (error) {
    Alert.alert(error);
  } finally {
    yield put(onHideLoader());
  }
}

const SignInRequest = async (data) => {
  return await axios({
    method: "POST",
    url: `${INSTRUCTOR_API_URL}/login`,
    data: {
      username: data.username,
      password: data.password
    }
  }).then(response => response)
      .catch(error => error)
}

//end sign in

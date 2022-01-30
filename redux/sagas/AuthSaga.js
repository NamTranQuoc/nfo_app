import {SIGNIN_USER} from "../../constants/ActionTypes";
import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import axios from "axios";
import {HOST} from "../../constants/Common";
import {Alert} from "react-native";

const INSTRUCTOR_API_URL = `${HOST}/auth`

export function* takeEverySignIn() {
  yield takeEvery(SIGNIN_USER, SignInGenerate);
}

function* SignInGenerate({data}) {
  try {
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


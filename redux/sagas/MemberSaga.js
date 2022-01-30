import {SIGNUP_USER} from "../../constants/ActionTypes";
import {call, takeEvery} from "redux-saga/effects";
import axios from "axios";
import {HOST} from "../../constants/Common";
import {Alert} from "react-native";

const INSTRUCTOR_API_URL = `${HOST}/member`

//start sign up

export function* takeEverySignUp() {
  yield takeEvery(SIGNUP_USER, SignUpGenerate);
}

function* SignUpGenerate({data}) {
  try {
    const response = yield call(SignUpRequest, data);
    console.log(response);
    if (response.status !== 200) {
      Alert.alert(response.status);
    } else if (response.data.code !== 9999) {
      Alert.alert(response.data.message);
    } else {
      Alert.alert("Tạo tài khoản thành công");
      data.navigation.navigate("Login");
    }
  } catch (error) {
    Alert.alert(error);
  }
}

const SignUpRequest = async (data) => {
  return await axios({
    method: "POST",
    url: `${INSTRUCTOR_API_URL}/add`,
    data: {
      name: data.name,
      email: data.email
    }
  }).then(response => response)
      .catch(error => error)
}

//end sign up
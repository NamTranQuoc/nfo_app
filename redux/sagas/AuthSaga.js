import {SIGNIN_USER} from "../../constants/ActionTypes";
import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import axios from "axios";
import {HOST} from "../../constants/Common";

const INSTRUCTOR_API_URL = `${HOST}/auth`

export function* takeEverySignIn() {
  yield takeEvery(SIGNIN_USER, SignInGenerate);
}

function* SignInGenerate({data}) {
  try {
    const response = yield call(SignInRequest, data);
    if (response.status !== 200) {
      console.log(response.status);
    } else if (response.data.code !== 9999) {
      console.log(response.data.message);
    } else {
      console.log(response.data.payload);
    }
  } catch (error) {
    console.log(error);
  }
}

const SignInRequest = async (data) => {
  return await axios({
    method: "POST",
    url: `http://172.17.192.1:8080/auth/login`,
    data: {
      username: data.username,
      password: data.password
    }
  }).then(response => response)
      .catch(error => error)
}


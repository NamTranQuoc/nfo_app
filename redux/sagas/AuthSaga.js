import {CHANGE_PASSWORD, LOGOUT, SIGNIN_USER} from "../../constants/ActionTypes";
import {call, put, takeEvery} from "redux-saga/effects";
import axios from "axios";
import {HOST} from "../../constants/Common";
import {Alert} from "react-native";
import {onHideLoader, onShowLoader} from "../actions/CommonAction";
import {setString} from "../../utils/LocalStorage";
import {getMemberIdCurrent, getRoleCurrent} from "../../utils/ParseUtils";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getCurrentMember} from "../actions/MemberAction";

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
      setString("token", response.data.payload);
      setString("member_id", getMemberIdCurrent(response.data.payload));
      setString("role", getRoleCurrent(response.data.payload));
      yield put(getCurrentMember());
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


//start log out

export function* takeEveryLogOut() {
  yield takeEvery(LOGOUT, LogOutGenerate);
}

function* LogOutGenerate() {
  try {
    yield put(onShowLoader());
    yield call(LogOutRequest);
  } catch (error) {
    Alert.alert(error);
  } finally {
    yield put(onHideLoader());
  }
}

const LogOutRequest = async () => {
  await AsyncStorage.removeItem("token");
  await AsyncStorage.removeItem("role");
  await AsyncStorage.removeItem("member_id");
}

//end log out


//start change password

export function* takeEveryChangePassword() {
  yield takeEvery(CHANGE_PASSWORD, ChangePasswordGenerate);
}

function* ChangePasswordGenerate({data}) {
  try {
    yield put(onShowLoader());
    const response = yield call(ChangePasswordRequest, data);
    if (response.status !== 200) {
      Alert.alert(response.status);
    } else if (response.data.code !== 9999) {
      Alert.alert(response.data.message);
    } else {
      data.navigation.navigate("More");
      Alert.alert("Đổi mật khẩu thành công");
    }
  } catch (error) {
    Alert.alert(error);
  } finally {
    yield put(onHideLoader());
  }
}

const ChangePasswordRequest = async (data) => {
  const token = await AsyncStorage.getItem("token");
  return await axios({
    method: "POST",
    url: `${INSTRUCTOR_API_URL}/change_password`,
    data: {
      old_password: data.oldPassword,
      new_password: data.newPassword,
      confirm_password: data.confirmPassword,
    },
    headers: {
      Authorization: "Bearer " + token,
    },
  }).then(response => response)
      .catch(error => error)
}

//end change password

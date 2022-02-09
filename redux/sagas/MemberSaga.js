import {GET_CURRENT_MEMBER, SIGNUP_USER, UPDATE_MEMBER} from "../../constants/ActionTypes";
import {call, put, takeEvery} from "redux-saga/effects";
import axios from "axios";
import {HOST} from "../../constants/Common";
import {Alert} from "react-native";
import {onHideLoader, onShowLoader} from "../actions/CommonAction";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getCurrentMember, getCurrentMemberSuccess} from "../actions/MemberAction";

const INSTRUCTOR_API_URL = `${HOST}/member`

//start sign up

export function* takeEverySignUp() {
  yield takeEvery(SIGNUP_USER, SignUpGenerate);
}

function* SignUpGenerate({data}) {
  try {
    yield put(onShowLoader());
    const response = yield call(SignUpRequest, data);
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
  } finally {
    yield put(onHideLoader());
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

//start sign up

export function* takeEveryGetCurrentMember() {
  yield takeEvery(GET_CURRENT_MEMBER, GetCurrentMemberGenerate);
}

function* GetCurrentMemberGenerate() {
  try {
    const response = yield call(GetCurrentMemberRequest);
    if (response.status !== 200) {
      Alert.alert(response.status);
    } else if (response.data.code !== 9999) {
      Alert.alert(response.data.message);
    } else {
      yield put(getCurrentMemberSuccess(response.data.payload));
    }
  } catch (error) {
    Alert.alert(error);
  }
}

const GetCurrentMemberRequest = async () => {
  const id = await AsyncStorage.getItem("member_id");
  const token = await AsyncStorage.getItem("token");
  return await axios({
    method: "GET",
    url: `${INSTRUCTOR_API_URL}/get_by_id/` + id,
    headers: {
      Authorization: "Bearer " + token,
    },
  }).then(response => response)
      .catch(error => error)
}

//end sign up

//start update member

export function* takeEveryUpdateMember() {
  yield takeEvery(UPDATE_MEMBER, UpdateMemberGenerate);
}

function* UpdateMemberGenerate({data}) {
  try {
    yield put(onShowLoader());
    const response = yield call(UpdateMemberRequest, data);
    if (response.status !== 200) {
      Alert.alert(response.status);
    } else if (response.data.code !== 9999) {
      Alert.alert(response.data.message);
    } else {
      yield put(getCurrentMember());
      Alert.alert("Cập nhật thông tin cá nhân thành công");
    }
  } catch (error) {
    Alert.alert(error);
  } finally {
    yield put(onHideLoader());
  }
}

const UpdateMemberRequest = async (data) => {
  const id = await AsyncStorage.getItem("member_id");
  const token = await AsyncStorage.getItem("token");
  return await axios({
    method: "PUT",
    url: `${INSTRUCTOR_API_URL}/update`,
    data: {
      id: id,
      name: data.name,
      phone_number: data.phone_number,
      gender: data.gender,
      avatar: data.avatar
    },
    headers: {
      Authorization: "Bearer " + token,
    },
  }).then(response => response)
      .catch(error => error)
}

//end update member

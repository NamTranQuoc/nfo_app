import {all} from 'redux-saga/effects';
import {takeEverySignIn} from "./AuthSaga";
import {takeEverySignUp} from "./MemberSaga";

export default function* rootSaga() {
  yield all([
    takeEverySignIn(),
    takeEverySignUp()
  ]);
}

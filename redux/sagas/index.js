import {all} from 'redux-saga/effects';
import {takeEveryLogOut, takeEverySignIn} from "./AuthSaga";
import {takeEverySignUp} from "./MemberSaga";

export default function* rootSaga() {
  yield all([
    takeEverySignIn(),
    takeEverySignUp(),
    takeEveryLogOut()
  ]);
}
